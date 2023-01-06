import axios from "axios";

// https://disease.sh/v3/covid-19/historical/all?lastdays=all
export default {
    created(days) {
        let apiURL = 'https://disease.sh/';
        // console.log(days + " api")
        return axios.get(apiURL + `v3/covid-19/historical/all?lastdays=${days}`)
    },
    // https://disease.sh/v3/covid-19/countries/th?strict=true
    country(country) {
        let apiURL = 'https://disease.sh/';
        // console.log(country, " country")
        return axios.get(apiURL + `v3/covid-19/countries/${country}?strict=true`)
    },
    continents() {
        let apiURL = 'https://disease.sh/';
        return axios.get(apiURL + 'v3/covid-19/countries')
    },
    // https://disease.sh/v3/covid-19/all
    worldwide() {
        let apiURL = 'https://disease.sh/';
        return axios.get(apiURL + 'v3/covid-19/all')
    }

}