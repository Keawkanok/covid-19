<template>

    <!-- <div style="" class="wrapper">
        <h1 class="black-background">Graph Covid-19</h1>
        <br>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 box">
                        <tr>
                            <th>
                                <div id="app" class="p-3 flex-container" style=" ">
                                    <select v-model="days" class="form-select" @change="ChangeTime"
                                        aria-label="Default select example">
                                        <option :value="30">ย้อนหลัง 1 เดือน</option>
                                        <option :value="60">ย้อนหลัง 2 เดือน</option>
                                        <option :value="90">ย้อนหลัง 3 เดือน</option>
                                        <option :value="120">ย้อนหลัง 4 เดือน</option>
                                        <option :value="0">ดูรวมโดยรวมทั้งหมด</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div id="app" class="d-flex p-2" style=" ">
        <select v-model="days" class="form-select" @change="ChangeTime" aria-label="Default select example">
            <option :value="30">ย้อนหลัง 1 เดือน</option>
            <option :value="60">ย้อนหลัง 2 เดือน</option>
            <option :value="90">ย้อนหลัง 3 เดือน</option>
            <option :value="120">ย้อนหลัง 4 เดือน</option>
            <option :value="0">ดูรวมโดยรวมทั้งหมด</option>
        </select>
    </div>
    <Line id="my-chart-id" :options="chartOptions" :data="data" width="400" height="400" class="d-flex p-2" /> -->

    <!-- <div class="sb-nav-fixed">
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div class="">
                        <h1 class="mt-4">Charts</h1>
                        
                        <div class="card mb-4">
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div> -->

    <select v-model="days" class="form-select" @change="ChangeTime" aria-label="Default select example">
        <option :value="30">ย้อนหลัง 1 เดือน</option>
        <option :value="60">ย้อนหลัง 2 เดือน</option>
        <option :value="90">ย้อนหลัง 3 เดือน</option>
        <option :value="120">ย้อนหลัง 4 เดือน</option>
        <option :value="0">ดูรวมโดยรวมทั้งหมด</option>
    </select>
    <Line id="my-chart-id" :options="chartOptions" :data="data" width="100%" height="350" />

</template>

<script>
import '../css/styles.css'
import 'v-calendar/dist/style.css'
import Api from "../services/index"
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

export default {
    components: {
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
            // console.log(this.days)
        },
        information(days) {
            Api.created(days).then((res) => {
                this.resetData();
                // console.log(res.data)
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

<style>
/* .wrapper {
    width: 100%;
    max-width: 960%;
    margin: 0 auto;
}

.flex-container {
    display: flex;
}

.box {
    height: 100px;
    min-width: 10px;
} */
</style>
