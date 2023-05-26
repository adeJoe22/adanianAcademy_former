import React from "react";
import styled from "styled-components";
import img from "../../assets/adedeji.jpg";

import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <UserDetails>
              <h3>Welcome Alexa A</h3>
              <p>Let's achieve our task</p>
            </UserDetails>
            <SearchWrap>
              <AiOutlineSearch style={{ margin: "0 10px", fontSize: "35px" }} />
              <SearchInput placeholder="Search" />
            </SearchWrap>
          </Left>
          <Right>
            <Message>
              <AiOutlineMail />
            </Message>
            <Notification>
              <MdNotifications />
            </Notification>
            <Avatar>
              <img src={img} alt="adminImg" />
            </Avatar>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Poppins";
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const UserDetails = styled.div`
  h3 {
    color: #13a8be;
    font-family: "Poppins";
  }
  p {
    font-size: 13px;
    color: #b3b3b3;
  }
`;
const SearchWrap = styled.div`
  margin-left: 50px;
  width: 380px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;
const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  border: none;
  :focus {
    outline: none;
    border: none;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Message = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0 5px;
  color: #adadad;
`;
const Notification = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0 5px;
  color: #adadad;
`;
const Avatar = styled.div`
  width: 45px;
  height: 45px;
  background-color: #eeeeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: #adadad;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
