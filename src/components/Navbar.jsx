import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      <StHeader>
        <div>
          <Link to="/">홈</Link>
        </div>
        <StDiv>
          <Link to="/login">로그인</Link>
          <Link to="/profile">프로필</Link>
          <Link to="/test">테스트</Link>
          <Link to="testResult">결과</Link>
          <Link to="/login">로그아웃</Link>
        </StDiv>
      </StHeader>
    </>
  );
};

export default Navbar;
