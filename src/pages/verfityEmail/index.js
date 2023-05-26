import React from "react";
import styled from "styled-components";
import Background from "../../ui/background";

const VerifyEmailPage = () => {
  return (
    <>
      <Background>
        <Card>
          <Title>
            <div>You are almost there</div>
            <p>Kindly verify your mail to secure your account.</p>
          </Title>
        </Card>
      </Background>
    </>
  );
};

export default VerifyEmailPage;

const Card = styled.div`
  width: 650px;
  padding: 60px 32px;
  margin: 100px 0;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 500px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 150px;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 90px;
    background-color: red;
  }
  div {
    font-size: 32px;
    color: #13a8be;
    font-weight: 600;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 23px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 12px;
    }
  }
`;
