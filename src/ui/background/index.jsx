import React from "react";
import styled from "styled-components";

const Background = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Background;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f39712;
  display: flex;
  align-items: center;
  justify-content: center;
`;
