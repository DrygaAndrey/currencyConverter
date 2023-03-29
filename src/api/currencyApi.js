import axiosConfig from "./axiosConfig";


export const CURRENCIES_CODES = { USD: "USD", EUR: "EUR", UAH: "UAH" }

async function getCurrencyByCode(code) {
    let response = await axiosConfig.get('/statdirectory/exchange', {
        params: {
            json: '',
            valcode: code
        }
    });
    return response.data[0];
}
export async function getCurrenciesByCodes(codes) {
    let result = {};

    for (const code of codes) {
        let currency = await getCurrencyByCode(code);
        result = { ...result, [code]: currency }
    }


    return result;
}