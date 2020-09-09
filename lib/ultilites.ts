import axios from "axios";

export function getCurrentPrice() {
  let tag = document.getElementById("__PRICE__");
  return tag.innerHTML;
}

interface IExchangeRate {
  vn: number;
  eu: number;
  us: number;
  au: number;
}

export function getExchangeRage(): IExchangeRate {
  return {
    au: 1.3,
    eu: 1.2,
    vn: 23000,
    us: 1,
  };
}

export type { IExchangeRate };
