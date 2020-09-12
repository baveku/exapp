import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const appID = '__CURRENCY_APPLICATIONER__';
let currentPrice = 0;
function makeDiv() {
    var rootRier = document.createElement('div');
    rootRier.id = appID;
    document.body.appendChild(rootRier);

    let p = document.getElementById('__PRICE__');
    if (p !== undefined) {
        let priceString = p!.innerHTML;
        currentPrice = Number(priceString.slice(0, priceString.length - 2));
    }
}
makeDiv();
ReactDOM.render(
    <React.StrictMode>
        <App currentPrice={currentPrice} />
    </React.StrictMode>,
    document.getElementById(appID)
);
