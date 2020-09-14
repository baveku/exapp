import React, { useCallback, useEffect, useState } from 'react';
import { getExchangeRates } from './api';
interface AppProps {
    currentPrice: number;
}

interface IExchangeRages {
    AUD: number;
    GBP: number;
}

function App(props: AppProps) {
    let [currency, setCurrency] = useState(props.currentPrice);
    let [rates, setRates] = useState<IExchangeRages>({
        AUD: 1,
        GBP: 1,
    });

    useEffect(() => {
        getExchangeRates().then((rates: IExchangeRages) => {
            console.log(rates);
            setCurrency(currency * rates.AUD);
            setRates(rates);
        });
    }, []);

    return (
        <div>
            <p>
                {currency.toLocaleString('en-AU', {
                    style: 'currency',
                    currency: 'AUD',
                })}
            </p>
            <ul>
                <li>
                    {rates.AUD.toLocaleString('en-AU', {
                        style: 'currency',
                        currency: 'AUD',
                    })}
                    <span> AUD - USD </span>
                </li>
                <li>
                    {rates.GBP.toLocaleString('en-GB', {
                        style: 'currency',
                        currency: 'GBP',
                    })}
                    <span> GBP - USD </span>
                </li>
            </ul>
        </div>
    );
}

export default App;
