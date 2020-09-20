import axios from 'axios';
let domain = 'https://exapp.josbach.dev/api/currency';
export const getExchangeRates = async () => {
    let { data } = await axios.get(domain);
    return data;
};
