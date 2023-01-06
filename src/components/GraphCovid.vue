<template>

    <div style=" margin: auto; width: 60%; border: 3px solid #73AD21; padding: 10px;">
        <h1 class="black-background">Graph Covid-19</h1>
        <br>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <tr>
                            <th>
                                <div id="app" class="p-3" style=" ">
                                    <select v-model="days" class="form-select" @change="ChangeTime"
                                        aria-label="Default select example">
                                        <option :value="30">ย้อนหลัง 1 เดือน</option>
                                        <option :value="60">ย้อนหลัง 2 เดือน</option>
                                        <option :value="90">ย้อนหลัง 3 เดือน</option>
                                        <!-- <option :value="14">ย้อนหลัง 2 สัปดาห์</option> -->
                                        <option :value="0">ดูรวมโดยรวมทั้งหมด</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                        <Line id="my-chart-id" :options="chartOptions" :data="data" />
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

import 'v-calendar/dist/style.css'
import Api from "../services/index"
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

export default {
    components: {
        // DatePicker, 
        Line
    },
    data() {
        return {
            newcases: [],
            deaths: [],
            recovered: [],
            labels: [],
            days: '30',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'New Cases',
                    backgroundColor: 'rgb(255, 255, 0)',
                    borderColor: 'rgb(255, 255, 0)',
                    data: this.newcases,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Deaths',
                    backgroundColor: 'rgb(255, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: this.deaths,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Recovered',
                    backgroundColor: 'rgb(0, 255, 0)',
                    borderColor: 'rgb(0, 255, 0)',
                    data: this.recovered,
                    fill: false,
                    tension: 0.1
                },
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }, methods: {
        ChangeTime() {
            this.information(this.days);
            console.log(this.days)
        },
        information(days) {
            Api.created(days).then((res) => {
                this.resetData();
                console.log(res.data)
                for (let i in res.data.cases) {
                    // this.labels.push(i)
                    this.newcases.push(res.data.cases[i])
                }
                for (let i in res.data.deaths) {
                    this.deaths.push(res.data.deaths[i])
                } for (let i in res.data.recovered) {
                    this.recovered.push(res.data.recovered[i])
                }

                const TimeCases = {};
                for (const key in res.data.cases) {
                    const date = new Date(key);
                    const formattedDateMonth = date.toLocaleDateString('en-US', { day: 'numeric', year: '2-digit', month: 'short' });
                    TimeCases[formattedDateMonth] = res.data.cases[key];
                }
                const TimeRe = {};
                for (const key in res.data.recovered) {
                    const date = new Date(key);
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
                    TimeRe[formattedDate] = res.data.recovered[key];
                }
                const TimeDeaths = {};
                for (const key in res.data.deaths) {
                    const date = new Date(key);
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
                    TimeDeaths[formattedDate] = res.data.deaths[key];
                }
                this.labels = Object.keys(TimeCases)
                this.labels = Object.keys(TimeDeaths)
                this.labels = Object.keys(TimeRe)

                this.data = {
                    days: this.days,
                    labels: this.labels,
                    datasets: [{
                        label: 'New Cases',
                        backgroundColor: 'rgb(255, 255, 0)',
                        borderColor: 'rgb(255, 255, 0)',
                        data: this.newcases,
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: 'Deaths',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'rgb(255, 0, 0)',
                        data: this.deaths,
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: 'Recovered',
                        backgroundColor: 'rgb(0, 255, 0)',
                        borderColor: 'rgb(0, 255, 0)',
                        data: this.recovered,
                        fill: false,
                        tension: 0.1
                    },
                    ]
                }
            })
        }, resetData: function () {
            this.newcases = [];
            this.deaths = [];
            this.recovered = [];
            this.labels = [];
        }
    },
    mounted() {
        this.information()
    }
}

</script>
