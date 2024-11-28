import axios from "axios";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const API_URL = "http://localhost:5000/testResults";

//
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//생성
export const createTestResult = async (mbtiResult) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const mbtiType = mbtiDescriptions[mbtiResult];
  const result = {
    user: currentUser.nickname,
    createAt: new Date(),
    mbtiType,
    mbtiResult,
  };
  await axios.post(API_URL, result);
};

//삭제

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

//비공개
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.delete(`${API_URL}/${id}`, { visibility });
  return response.data;
};
