import axios from "axios";

// https://disease.sh/v3/covid-19/historical/all?lastdays=all
export default {
    created(days) {
        let apiURL = 'https://disease.sh/';
        // console.log(days + " api")
        return axios.get(apiURL + `v3/covid-19/historical/all?lastdays=${days}`)
    },
    // countries(countries) {
    //     let apiURL = 'https://disease.sh/';
    //     console.log(countries, " countries")
    //     return axios.get(apiURL + `v3/covid-19/historical/all?lastdays=all`)
    // },
    // continents() {
    //     let apiURL = 'https://disease.sh/';
    //     return axios.get(apiURL + 'v3/covid-19/countries')
    // }
}