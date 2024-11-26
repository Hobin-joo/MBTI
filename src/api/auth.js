import { Api } from "./Api";

export const register = async (userData) => {
  const response = await Api.post("/register", userData);
  console.log(response);
  return response.data;
};

export const login = async (userData) => {
  const response = await Api.post("/login", userData);
  const { accessToken, userId, nickname } = response.data;

  //토큰 저장 함수
  localStorage.setItem(
    "user",
    JSON.stringify({ userId, nickname, accessToken })
  );

  return { userId, nickname, accessToken };
};

export const getUserProfile = async (token) => {
  const response = await Api.get("/user", {
    headers: {
      Authorization: "Bearer AccessToken",
    },
  });
  console.log("get한 프로필", response);
  return response.data;
};

export const updateProfile = async (formData, token) => {
  const response = await Api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("업데이트 리스폰", response);
  return response.data;
};
