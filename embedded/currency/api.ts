import axios from 'axios';

interface IExchangeRates {
    USD: number;
    GBP: number;
    AUD: number;
}

interface ExchangeRatesResponse {
    rates: IExchangeRates;
}

let validBase = ['USD', 'GBP', 'AUR', 'EUR'];
let currencyToLocale = {
    AUD: 'en-AU',
    USD: 'en-US',
    GBP: 'vn-VN',
    AUR: '',
};

export const getExchangeRates = async (currency: string) => {
    let base = 'USD';
    if (validBase.includes(currency)) {
        base = currency;
    }
    let response: ExchangeRatesResponse = await axios.get(
        `https://api.exchangeratesapi.io/latest?base=${base}&symbols=USD,GBP,AUD`
    );

    return response.rates;
};
