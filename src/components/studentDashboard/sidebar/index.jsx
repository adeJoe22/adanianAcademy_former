import React from "react";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import NavWrap from "./NavWrap";

const SideBarNav = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <UserDetails />
          <NavWrap />
        </Wrapper>
      </Container>
    </div>
  );
};

export default SideBarNav;
const Container = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  border: 1px solid;
  background-color: burlywood;
`;
