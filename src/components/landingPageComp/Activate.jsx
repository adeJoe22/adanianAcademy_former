import React from "react";
import styled from "styled-components";
import africa from "../../assets/africa.png";
const Activate = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={africa} alt="africa" />
        </Left>
        <Right>
          {" "}
          <Activation>Activate your skill set</Activation>
          <Mission>
            <p>
              <span style={{ color: "#13a8be" }}>Our mission</span> is to
              support and build 300 impact-driven commercially viable tech
              companies in Africa by 2025. To do this, we need a huge volume of
              highly skilled and tested developers.
            </p>
          </Mission>
          <Vision>
            <p>
              <span style={{ color: "#13a8be" }}>Our vision</span>, Adanian Labs
              Software Developers Training initiative is a strategic partnership
              with leaders in the industry to ensure that our mission is
              achieved expeditiously.
            </p>
          </Vision>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Activate;

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 50px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 800px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 750px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    flex-direction: column;
    height: 800px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    flex-direction: column;
    height: 750px;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 280px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 380px;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 480px;
  }

  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 450px;
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 350px;
    img {
      width: 300px;
    }
  }
`;
const Activation = styled.div`
  font-weight: 500;
  font-size: 48px;
  color: #f39712;
  text-align: right;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    text-align: center;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    text-align: center;
    font-size: 30px;
  }
`;
const Mission = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 460px;
  margin-top: 25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: right;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    text-align: center;
    width: 600px;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    text-align: left;
    width: 280px;
    font-size: 13px;
  }
`;
const Vision = styled(Mission)``;
