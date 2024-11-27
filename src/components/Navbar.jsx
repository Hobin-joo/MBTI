import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const StHeader = styled.header`
  position: fixed;
  top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const StDiv = styled.div`
  display: flex;
  gap: 40px;
`;

const Navbar = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("로그아웃");
    nav("/login");
  };
  return (
    <>
      <StHeader>
        <div>
          <Link to="/">홈</Link>
        </div>
        <StDiv>
          <Link to="/profile">프로필</Link>
          <Link to="/testpage">테스트</Link>
          <Link to="result">결과</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </StDiv>
      </StHeader>
    </>
  );
};

export default Navbar;
