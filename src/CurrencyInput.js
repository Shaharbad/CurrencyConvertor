import React, { useState } from "react";
import "./index.css";


function CurrencyInput({ rates, currency, amount, onAmountChange, onCurrencyChange }) {
  const filteredCurrencies = rates.filter((currency) =>
    ["ILS", "USD", "EUR", "JOD", "AED", "TRY"].includes(currency)
  );

  const [showFullList, setShowFullList] = useState(false);

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    if (selectedCurrency === "more") {
      setShowFullList(true);
    } else {
      onCurrencyChange(selectedCurrency);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <input class="shadow appearance-none border rounded w-9/12 py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-2xl" type="number" value={amount} onChange={(e) => onAmountChange(e.target.value)} placeholder="0" />

      <select style={{textAlign: "center"}} class="bg-gray-50 text-lg text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={currency} onChange={handleCurrencyChange}>
        
        {showFullList
          ? rates.map((currency) => (
              <option key={currency}>{currency}</option>
            ))
          : filteredCurrencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
        <option value="more">הצג הכל</option>
      </select>
    </div>
  );
}

export default CurrencyInput;
