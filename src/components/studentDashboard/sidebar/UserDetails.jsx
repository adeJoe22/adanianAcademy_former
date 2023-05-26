import React from "react";
import styled from "styled-components";

const UserDetails = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Avatar>
            <img />
          </Avatar>
          <Details>
            <div>Mary Jane</div>
            <p>ID: 96u3ed</p>
          </Details>
        </Wrapper>
      </Container>
    </>
  );
};

export default UserDetails;
const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: aquamarine;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  border: 2px solid grey;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
const Details = styled.div`
  margin: 7px;
  div {
    font-weight: 600;
    font-size: 16px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;
