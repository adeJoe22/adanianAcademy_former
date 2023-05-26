import React from "react";
import styled from "styled-components";
import logo from "../../assets/adanianlogongn.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggle }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo to="/">
            <img src={logo} alt="adanian-labs-logo" />
          </Logo>
          <Hamburger>
            <GiHamburgerMenu onClick={toggle} />
          </Hamburger>
          <Wrap>
            <Navigation>
              <NavLink to="/">
                <Home>Home</Home>
              </NavLink>

              <NavLink to="/courses">
                {" "}
                <Courses>Courses</Courses>
              </NavLink>
              <NavLink to="/startups">
                <Startups>Startups</Startups>
              </NavLink>

              <NavLink to="/partners">
                <Partners>Partners</Partners>
              </NavLink>

              <NavLink to="/blog">
                <Blog>Blog</Blog>
              </NavLink>
            </Navigation>
            <Login to="/login">Login</Login>
            <Register to="/register">Register</Register>
          </Wrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Logo = styled(NavLink)`
  margin-left: 120px;

  @media screen and (max-width: 996px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    align-items: center;
    margin-left: 25px;
    img {
      width: 120px;
    }
  }
`;
const Wrap = styled.div`
  width: 688px;
  height: 53px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  @media screen and (max-width: 996px) {
    display: none;
  }
`;
const Navigation = styled.div`
  width: 507px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Home = styled.div`
  padding: 10px;
  gap: 10px;
  transition: all 350ms;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #13a8be;
  }
`;

const Partners = styled(Home)``;
const Startups = styled(Home)``;
const Courses = styled(Home)``;
const Blog = styled(Home)``;

const Login = styled(NavLink)`
  padding: 10px 15px;
  margin: 0 10px;
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
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Register = styled(NavLink)`
  padding: 10px 15px;
  margin: 0 10px;
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

const Hamburger = styled.div`
  margin-right: 25px;
  font-size: 30px;
  color: #f39712;
  display: none;
  @media screen and (max-width: 996px) {
    display: block;
  }
`;
