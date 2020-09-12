import React, { useCallback, useEffect, useState } from 'react';
import { getExchangeRates } from './api';
interface AppProps {
    currentPrice: number;
}

function App(props: AppProps) {
    let [currency, setCurrency] = useState(props.currentPrice);
    let [locate, setLocate] = useState('');

    useEffect(() => {
        getExchangeRates('USD').then((rates) => {
            setCurrency(currency * rates.AUD);
        });
    }, []);

    return (
        <div>
            <p>
                {currency.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                })}
            </p>
            <p></p>
        </div>
    );
}

export default App;
