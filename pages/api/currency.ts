import { IExchangeRate, getExchangeRage } from "../../lib/ultilites";

export default (req, res) => {
  res.status(200).json(getExchangeRage());
};
