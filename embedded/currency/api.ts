import axios from 'axios';
let domain = 'http://localhost:3000/api/currency';
export const getExchangeRates = async () => {
    let { data } = await axios.get(domain);
    return data;
};
