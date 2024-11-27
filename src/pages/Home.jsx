import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StDiv = styled.div`
  width: 80%;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
`;

const Home = () => {
  return (
    <StDiv>
      <div>
        <h1>무료 성격 테스트</h1>
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      </div>
      <div>
        <span>성격 유형검사</span>
        <br /> 자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
        미치는지 알아보세요.
      </div>
      <div>
        <span>성격 유형이해</span>
        <br />
        다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
      </div>
      <div>
        <span>팀 평가</span>
        <br />팀 내 에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
        배워보세요.
      </div>
      <Link to="/testpage">내 성격 알아보러 가기!</Link>
    </StDiv>
  );
};

export default Home;
