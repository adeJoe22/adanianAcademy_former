import React from "react";
import styled from "styled-components";
import logo from "../../assets/adanianlogongn.svg";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <LeftWrap>
                <LeftTop>
                  <Logo>
                    <img src={logo} alt="adanian-labs-logo" />
                  </Logo>
                  <Desc>Actuating the Tech Revolution in Africa.</Desc>
                </LeftTop>
                <LeftBottom>
                  <Subscribe>Subscribe to our newsletter</Subscribe>
                  <EmailField
                    type="email"
                    placeholder="Enter your e-mail address"
                  />
                  <SubscribeBtn>Subscribe</SubscribeBtn>
                </LeftBottom>
              </LeftWrap>
            </Left>
            <Right>
              <RightWrap>
                <PartnerWrap>
                  <Title>Partners</Title>
                  <Partners>
                    <p>PAYLEND</p>
                    <p>PHEMAAGRI</p>
                    <p>ADAANIMATION</p>
                    <p>TWAA</p>
                    <p>AFYA REKOD</p>
                    <p>RewardAdzx</p>
                    <p>COBba</p>
                    <p>BLOOW</p>
                  </Partners>
                </PartnerWrap>
                <AddressWrap>
                  <Title>Address</Title>
                  <Address1>Lagos: Lekii phase 1</Address1>
                  <Address2>Location 2</Address2>
                </AddressWrap>
              </RightWrap>
            </Right>
          </Top>
          <Bottom>
            <BottomWrap>
              <ContentWrap>
                <LeftContent>
                  <FB>
                    <img src={fb} alt="fb" />
                  </FB>
                  <TW>
                    <img src={twitter} alt="tw" />
                  </TW>
                  <IN>
                    <img src={instagram} alt="in" />
                  </IN>
                </LeftContent>
                <RightContent>
                  Copyright © 2023. Adanianlabs, All rights reserved.
                </RightContent>
              </ContentWrap>
            </BottomWrap>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 700px;

  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 900px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 920px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    height: 900px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    height: 920px;
    align-items: center;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 427px;
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    height: 800px;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 600px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const LeftWrap = styled.div`
  width: 450px;
  height: 315px;
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    height: 280px;
    width: calc(100% - 140px);
    margin-left: 0px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 220px;
    margin-left: 0px;
  }
`;
const LeftTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Logo = styled.div``;
const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #13a8be;
  margin-bottom: 25px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 13px;
    width: 240px;
    margin-bottom: 10px;
  }
`;

const LeftBottom = styled.div`
  width: 100%;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 120px;
    width: 300px;
  }
`;
const Subscribe = styled.div`
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 14px;
    width: 200px;
  }
`;
const EmailField = styled.input`
  padding: 16px;
  height: 51px;
  border-radius: 60px;
  border: none;
  box-shadow: 2px 2px 10px 4px rgba(22, 22, 22, 0.15);
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 295px;
    height: 38px;
    font-size: 11px;
  }
`;
const SubscribeBtn = styled.div`
  width: 100px;
  height: 44px;
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
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 80px;
    height: 34px;
    font-size: 12px;
  }
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
  }
`;
const RightWrap = styled.div`
  width: 441px;
  height: 100%;
  display: flex;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    flex-direction: column;
  }
`;
const PartnerWrap = styled.div`
  @media screen and (max-width: 425px) and (min-width: 320px) {
    padding-top: 20px;
  }
`;

const Partners = styled.div`
  margin-top: 20px;
  transition: all 350ms;

  p {
    padding: 10px 0px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: #13a8be;
    }

    @media screen and (max-width: 425px) and (min-width: 320px) {
      padding: 5px 0px;
      margin-bottom: 10px;
    }
  }
`;
const AddressWrap = styled.div`
  margin-left: 157px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin-left: 0px;
  }
`;

const Address1 = styled.div`
  margin: 20px 0px;
  font-weight: 400;
  font-size: 14px;
`;
const Address2 = styled(Address1)``;
const Title = styled.div`
  color: #f39712;
  font-weight: 500;
  font-size: 22px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 160px;
    width: 320px;
  }
`;

const BottomWrap = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  border-top: 2px solid #13a8be;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: calc(100% - 140px);
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 120px;
    width: calc(100% - 10px);
  }
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    flex-direction: column;
    height: 50px;
    width: 300px;
  }
`;
const LeftContent = styled.div`
  width: 248px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RightContent = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #f39712;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 12px;
    width: 280px;
    text-align: center;
    margin-top: 20px;
  }
`;
const FB = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 1px 1px 6px 2px rgba(22, 22, 22, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 50px;
    height: 50px;
  }
`;
const TW = styled(FB)``;
const IN = styled(FB)``;
