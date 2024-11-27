import React, { useState } from "react";
import { updateProfile } from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [nickname, setNickname] = useState(user?.nickname || "");
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        toast.info("로그인 하세요");
      }
      const token = user.accessToken;
      const formData = new FormData();
      formData.append("nickname", nickname);

      const updatedProfile = await updateProfile(formData, token);
      const updatedUser = { ...user, nickname: updatedProfile.nickname };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.info("업데이트 성공");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
