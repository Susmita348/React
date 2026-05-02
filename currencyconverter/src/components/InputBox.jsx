import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onamountchange,
    currencyoption = [],
    oncurrencychange,
    selectedcurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountid = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountid}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                    disabled={amountDisable}
                    min="0"
                    className="outline-none w-full bg-gray-100 py-1.5"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectedcurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    {currencyoption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;