import { useEffect, useState } from "react";
import { CURRENCIES_CODES } from "../../api/currencyApi";
import { calculateCurrenciesByFirstInputValue } from "./calculateCurrencies";
import './converter.scss';

function Converter({ currencies }) {
    const [firstCurrency, setFirstCurrency] = useState(CURRENCIES_CODES.EUR);
    const [secondCurrency, setSecondCurrency] = useState(CURRENCIES_CODES.UAH);
    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);
    useEffect(() => {

    }, []);
    function firstInputChange(value) {
        setFirstInput(parseFloat(value));
        setSecondInput(calculateCurrenciesByFirstInputValue(firstCurrency, secondCurrency, value, currencies));

    }
    function secondInputChange(value) {
        setSecondInput(parseFloat(value));
        setFirstInput(calculateCurrenciesByFirstInputValue(secondCurrency, firstCurrency, value, currencies));

    }

    function firstSelectChange(value) {
        setFirstCurrency(value);

        setSecondInput(calculateCurrenciesByFirstInputValue(value, secondCurrency, firstInput, currencies));

    }
    function secondSelectChange(value) {
        setSecondCurrency(value);

        setFirstInput(calculateCurrenciesByFirstInputValue(value, firstCurrency, secondInput, currencies));

    }

    return (
        <div className="converter">
            <div>
                <select size={1} onChange={e => firstSelectChange(e.target.value)} defaultValue={CURRENCIES_CODES.EUR}>
                    <option value={CURRENCIES_CODES.USD}>USD</option>
                    <option value={CURRENCIES_CODES.EUR}>EUR</option>
                    <option value={CURRENCIES_CODES.UAH}>UAH</option>
                </select>
                <input min={0} type={"number"} value={firstInput} onChange={(e) => { firstInputChange(e.target.value) }}></input>
            </div>
            <div>
                <select size={1} onChange={e => secondSelectChange(e.target.value)} defaultValue={CURRENCIES_CODES.UAH}>
                    <option value={CURRENCIES_CODES.USD}>USD</option>
                    <option value={CURRENCIES_CODES.EUR}>EUR</option>
                    <option value={CURRENCIES_CODES.UAH}>UAH</option>
                </select>
                <input min={0} type={"number"} value={secondInput} onChange={(e) => { secondInputChange(e.target.value) }}></input>
            </div>
        </div>
    );
}

export default Converter;
