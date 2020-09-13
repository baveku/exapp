import axios from 'axios';

export const getExchangeRates = async () => {
    let { data } = await axios.get('https://exapp.josbach.dev/api/currency');
};
