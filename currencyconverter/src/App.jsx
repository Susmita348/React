import React from "react";
import { InputBox } from "./components";
import './App.css'
import useCurrencyInfo from "./hooks/usecurrencyinfo";

function App() {
    const [amount, setamount] = React.useState(1);
    const [from, setfrom] = React.useState("usd");
    const [to, setto] = React.useState("inr");
    const [convertedamount, setconvertedamount] = React.useState();

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swapcurrency = () => {
        setfrom(to);
        setto(from);
        setconvertedamount(amount);
        setamount(convertedamount);
    }

    const convertcurrency = () => {
        setconvertedamount(amount * currencyInfo[to])
    }

    return (
        <div
            className="w-full h-screen font-bold flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convertcurrency();
                    }}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoption={options}
                                onamountchange={(amount) => setamount(amount)}
                                oncurrencychange={(currency) => setfrom(currency)}  
                                selectedcurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="submit" className=" bg-blue-500 absolute -top-2 -translate-y-1/2 left-1/2 -translate-x-1/2   px-2 py-1 m-3 text-white text-sm"
                                onClick={swapcurrency}>    
                                                           swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamount}
                                currencyoption={options}
                                oncurrencychange={(currency) => setto(currency)} 
                                selectedcurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App;