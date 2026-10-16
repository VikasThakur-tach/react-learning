import React, {useId, useState} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) 



{
    const amountInputId = useId()
    const [search, setSearch] = useState("")
    const filteredOptions = currencyOptions.filter(
        (c) => c=== selectCurrency ||c.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) =>onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <input type="text" 
                placeholder="Search currency"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-lg px-1 py-1 mb-1 bg-blue-300 outline-none w-full   "
                />


                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                    
                >
                    
                     {filteredOptions.map((Currency) => (
                        <option key={Currency} value= {Currency}>
                            {Currency}
                        </option>
                     ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

