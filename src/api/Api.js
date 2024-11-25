import axios from "axios";

export const Api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});
