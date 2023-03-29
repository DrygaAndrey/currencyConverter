import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bank.gov.ua/NBUStatService/v1'
});

export default instance;