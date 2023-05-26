import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navItems } from "../../utils/adminDasboard/navItems";
import logo from "../../assets/adanianlogongn.svg";

const Sidebar = () => {
  const activeNav = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "#666667",
      textDecoration: isActive ? "none" : "none",
      backgroundColor: isActive ? "#F39712" : "transparent",
      borderRadius: isActive ? "7px " : "",
    };
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Logo>
              <img src={logo} alt="adanian_logo" />
            </Logo>

            <NavWrap>
              {navItems.map(({ route, name, icon }, index) => (
                <NavLink style={activeNav} to={route}>
                  <Navs key={index}>
                    <Icon>{icon}</Icon>
                    <Name>{name}</Name>
                  </Navs>
                </NavLink>
              ))}
            </NavWrap>
          </Top>
          <Bottom>
            <Logout>LogOut</Logout>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Sidebar;
const Container = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
  width: 85%;
`;
const Top = styled.div``;
const Bottom = styled.div``;
const Logo = styled.div`
  margin: 30px 0;
`;
const NavWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;
const Navs = styled.div`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: #4d4d4d08;
  }
`;
const Name = styled.div`
  margin-left: 7px;
`;
const Icon = styled.div`
  font-size: 24px;
`;
const Logout = styled.div``;
