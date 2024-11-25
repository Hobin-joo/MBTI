import { Api } from "./Api";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await Api.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await Api.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
