import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyInput from "./CurrencyInput";
import "./index.css";


function Home() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [currencies1, setCurrencies1] = useState(["USD"]);
  const [currencies2, setCurrencies2] = useState(["ILS"]);
  const [rates, setRates] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    axios
      .get("http://data.fixer.io/api/latest?access_key=1b7f6dded08033f57f34b43a5ef00354")
      .then(response => {
        setRates(response.data.rates);
        setLastUpdated(response.data.date);
      });
  }, []);

  function handleInput1Change(input1) {
    const currency1 = currencies1[0]; // Get the selected currency
    const currency2 = currencies2[0]; // Get the selected currency
    const rate1 = rates[currency1];
    const rate2 = rates[currency2];
    setInput2((input1 * rate2) / rate1);
    setInput1(input1);
  }
  function format(number) {
    return number.toFixed(4);
  }

  function onAmountChange(input1) {
    setInput2(format(input1 * rates[currencies2] / rates[currencies1]));
    setInput1(input1);
  }
  function onCurrency1Change(currency1) {
    setInput2(format(input1 * rates[currencies2] / rates[currencies1]));
    setCurrencies1(currency1);
  }
  function onCurrency2Change(currency2) {
    console.log(currency2)
    setCurrencies2(currency2);
    setInput2(format(input1 * rates[currency2] / rates[currencies1]));
    console.log((format(input1 * rates[currency2] / rates[currencies1])))
  }
  const handleSwap = () => {
    setCurrencies1(currencies2);
    setCurrencies2(currencies1);
    setInput2(format(input1 * rates[currencies1] / rates[currencies2]));
  };
  const lastUpdatedText = `עדכון אחרון ${lastUpdated}`

  return (
    <div className="flex flex-col justify-center items-center h-full">
    <div className="font-body text-lg">:הכנס ערך</div>

      <CurrencyInput
        rates={Object.keys(rates)}
        currency={currencies1}
        amount={input1}
        setInput={handleInput1Change}
        setCurrency={setCurrencies1}
        onCurrencyChange = {onCurrency1Change}
        onAmountChange = {onAmountChange}
      />
      <br />
      <button onClick={handleSwap} className="font-body border-solid border-2 border-gray-700 pt-1 pb-1 pr-12 pl-12 font-xs">החלף</button><br/>
      <CurrencyInput
        rates={Object.keys(rates)}
        currency={currencies2}
        amount={input2}
        onAmountChange = {onAmountChange}
        onCurrencyChange = {onCurrency2Change}
        setCurrency={setCurrencies2}
      />
      <div className="font-body">{lastUpdatedText}</div>
    </div>
  );
}

export default Home;
