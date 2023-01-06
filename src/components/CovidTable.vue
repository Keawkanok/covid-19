<template>
    <div style=" margin: auto; width: 80%;  padding: 10px;">
        <h1 class="black-background">Table Covid-19 </h1><br>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <select v-model="select" class="form-select" aria-label="Default select example">
                            <option v-for="item in continents" :key="item" :value="item" @click="selectItem(item)">{{
                                item
                            }}</option>
                        </select><br>
                        <table class="table" >
                            <thead>
                                <tr>
                                    <th>Name Country</th>
                                    <th>Initials</th>
                                    <th>Cases</th>
                                    <th>Deaths</th>
                                    <th>Recovered</th>
                                    <th>Continent</th>
                                    <th>Country pictures</th>
                                </tr>
                            </thead>
                            <tr v-for="item in informationCountry" :key="item">
                                <td>{{ item.country }}</td>
                                <td>{{ item.countryInfo.iso3 }}</td>
                                <td>{{ item.cases }}</td>
                                <td>{{ item.deaths }}</td>
                                <td>{{ item.recovered }}</td>
                                <td>{{ item.continent }}</td>
                                <td><img :src="item.countryInfo.flag" style=" width: 58%;" /></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Api from "../services/index"
import { BDropdown, BDropdownItem } from 'bootstrap-vue-3'

export default {
    components: {
        BDropdown,
        BDropdownItem
    },
    data() {
        return {
            informationCountry: [],
            continents: [],
            select: "Afghanistan",
        }
    }, watch: {
        select: function () {
            // console.log(this.select, " select")
            this.information(this.select)
        },
    },
    methods: {
        information(selectCountries) {
            this.informationCountry = [];
            Api.continents().then((res) => {
                res.data
                for (const i in res.data) {
                    this.continents.push(res.data[i].country)
                }
            })
            // console.log(selectCountries)
            Api.country(selectCountries).then((res) => {
                res.data
                this.informationCountry.push(res.data)
                // console.log(this.informationCountry)
            })
        }
    }, mounted() {
        this.information(this.select)
    }
}
</script>


<style>
.background {
    color: coral;
}

table,
td,
th {
    border: 1px solid black;
    text-align: center;
}

table {
    border-collapse: collapse;
    width: 100%;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>