import axios from 'axios';
export default async (req, res) => {
    let rates = await getExchangeRates();
    res.status(200).json(rates);
};

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

export const getExchangeRates = async () => {
    let { data }: { data: ExchangeRatesResponse } = await axios.get(
        `https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,AUD`
    );
    console.log(data.rates);
    return data.rates;
};
