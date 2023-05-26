import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const navLinkItems = [
  { to: "/", name: "Home" },
  { to: "/courses", name: "Courses" },
  { to: "/startups", name: "Startups" },
  { to: "/partner", name: "Partners" },
  { to: "/blog", name: "Blog" },
];
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper isOpen={isOpen}>
          <SidebarMenu>
            {navLinkItems.map(({ to, name }) => (
              <SidebarLink key={to} to={to} onClick={toggle}>
                {name}
              </SidebarLink>
            ))}
          </SidebarMenu>
          <Login to="/login">Login</Login>
          <Register to="/register">Register</Register>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(199, 199, 199, 0.89);
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 996px) and (min-width: 320px) {
    display: flex;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #f39712;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

const SidebarWrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  top: 50px;
  right: 30px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  background-color: #fff;

  @media screen and (max-width: 320px) {
    overflow-y: hidden;
  }
`;
export const SidebarMenu = styled.ul`
  margin-top: 10px;
`;
const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 600;
  color: #070707;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    color: #c52d2f;
    transition: all 0.2s ease-in-out;
  }
`;

const Login = styled(NavLink)`
  width: 100px;
  padding: 8px 15px;
  margin: 10px;
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

const Register = styled(NavLink)`
  width: 100px;
  padding: 8px 15px;
  margin: 10px;
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
