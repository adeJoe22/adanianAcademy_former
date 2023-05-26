import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hero from "../../assets/hero2.png";
const HeroSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Wrap>
              <Heading>
                Actuating the <span>Tech Revolution</span> in Africa
              </Heading>
              <Details>Take your career to the next level...</Details>
              <GetStarted>
                <Title>Get Started</Title>
                <StartWrap>
                  <Input placeholder="Enter your email" type="email" />
                  <Register>Start here</Register>
                </StartWrap>
              </GetStarted>
            </Wrap>
          </Left>
          <Right>
            <HeroImage>
              <img src={hero} alt="hero" />
            </HeroImage>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  height: 500px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    height: 800px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 600px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 800px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 550px;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 996px) and (min-width: 320px) {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrap = styled.div`
  width: 530px;
  height: 350px;
  margin-left: 120px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 280px;
    margin-left: 0px;
    margin-bottom: 25px;
  }
`;
const Heading = styled.div`
  font-weight: 400;
  font-size: 56px;
  line-height: 76px;
  margin-bottom: 10px;

  span {
    color: #13a8be;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
    margin-bottom: 10px;
  }
`;

const Details = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 50px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #777777;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

const GetStarted = styled.div`
  width: 510px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 110px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 20px;
  }
`;
const StartWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.158) 0px 0px 4px 2px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    align-items: center;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 388px;
  border: none;
  padding: 0 5px;
  font-size: 18px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 177px;
    height: 40px;
    border: none;
    font-size: 14px;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
    color: #a8a8a8;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 14px;
    }
  }
`;
const Register = styled(NavLink)`
  padding: 10px 15px;
  color: #13a8be;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, rgba(243, 151, 18, 1), rgba(250, 182, 83, 0.59))
      border-box;
  border-radius: 4px;
  border: solid 2px transparent;
  cursor: pointer;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const HeroImage = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 996px) and (min-width: 320px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin-top: 30px;
  }
  img {
    width: 600px;
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 550px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      width: 305px;
    }
  }
`;
