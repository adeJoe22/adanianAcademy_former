import React from "react";
import Navlinks from "./Navlinks";
import { AiOutlineLike } from "react-icons/ai";
import styled from "styled-components";
import { FiVideo } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
// import {MdOutlineBarChart} from 'react-icons/md'
const NavWrap = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Navlinks
            name={"User Details"}
            icon={<AiOutlineLike />}
            to={"/student/user-data"}
            color={"red"}
          />
          {/* <Navlinks name={"Assessment Progress"} icon={<MdOutlineBarChart/>} to={"/"} color={"yellow"}/> */}
          <Navlinks
            name={"Make Payment/Upload Receipt"}
            icon={<MdPayment />}
            to={"/student/make-payment"}
          />
          <Navlinks
            name={"Start Learning"}
            icon={<FiVideo />}
            to={"/student/start-learning"}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default NavWrap;
const Container = styled.div`
  background-color: black;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;
