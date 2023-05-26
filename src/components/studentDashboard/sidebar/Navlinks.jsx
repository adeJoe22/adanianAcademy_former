import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navlinks = ({ name, icon, to, color }) => {
  return (
    <>
      <Container to={to}>
        <Wrapper color={color}>
          <IconWrap>{icon}</IconWrap>
          <TextWrap>{name}</TextWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navlinks;
const Container = styled(NavLink)`
  width: 190px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(34, 34, 34, 0.15);
  background-color: #fff;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ color }) => color};
`;

const IconWrap = styled.div`
  width: 40px;
  height: 100%;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrap = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  font-size: 14px;
  text-align: left;
`;
