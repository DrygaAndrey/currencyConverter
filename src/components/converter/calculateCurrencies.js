import { CURRENCIES_CODES } from "../../api/currencyApi";

export function calculateCurrenciesByFirstInputValue(firstCurrency, secondCurrency, firstInputValue, currencies) {
    let newSecondInputValue = 0;
    Object.keys(CURRENCIES_CODES).forEach(firstKey => {
        if (CURRENCIES_CODES[firstKey] === firstCurrency) {
            Object.keys(CURRENCIES_CODES).forEach(secondKey => {
                if (CURRENCIES_CODES[secondKey] === secondCurrency) {
                    newSecondInputValue = firstInputValue * currencies[CURRENCIES_CODES[firstKey]][CURRENCIES_CODES[secondKey]];
                }
            })
        }
    })
    return newSecondInputValue;
}
