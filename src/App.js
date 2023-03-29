import { useEffect, useState } from "react";
import { getCurrenciesByCodes, CURRENCIES_CODES } from "./api/currencyApi";
import Header from "./components/header/header";
import './App.scss';
import Converter from "./components/converter/converter";


function App() {
  const [currencies, setCurrencies] = useState({});
  useEffect(() => {

    initCurrencies();
  }, []);

  const initCurrencies = async () => {
    let data = await getCurrenciesByCodes([CURRENCIES_CODES.USD, CURRENCIES_CODES.EUR]);

    setCurrencies({
      [CURRENCIES_CODES.UAH]: { [CURRENCIES_CODES.USD]: 1 / data[CURRENCIES_CODES.USD].rate, [CURRENCIES_CODES.EUR]: 1 / data[CURRENCIES_CODES.EUR].rate,[CURRENCIES_CODES.UAH]:1 },
      [CURRENCIES_CODES.EUR]: { [CURRENCIES_CODES.USD]: data[CURRENCIES_CODES.EUR].rate / data[CURRENCIES_CODES.USD].rate, [CURRENCIES_CODES.UAH]: 1 * data[CURRENCIES_CODES.EUR].rate,[CURRENCIES_CODES.EUR]:1 },
      [CURRENCIES_CODES.USD]: { [CURRENCIES_CODES.EUR]: data[CURRENCIES_CODES.USD].rate / data[CURRENCIES_CODES.EUR].rate, [CURRENCIES_CODES.UAH]: 1 * data[CURRENCIES_CODES.USD].rate,[CURRENCIES_CODES.USD]:1 }
    })
  }

  return (
    <div className="App">
      <Header currencies={currencies} />
      <Converter currencies={currencies} />
    </div>
  );
}

export default App;
