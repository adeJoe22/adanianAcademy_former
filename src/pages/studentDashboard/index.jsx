import React from "react";
import styled from "styled-components";
import SideBarNav from "../../components/studentDashboard/sidebar";
import { Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div>
      <Main>
        <Wrapper>
          <Display>
            <Outlet />
          </Display>
          <Sidebar>
            <SideBarNav />
          </Sidebar>
        </Wrapper>
      </Main>
    </div>
  );
};

export default StudentDashboard;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Display = styled.div`
  width: calc(100% - 220px);
  height: 100%;
  padding: 15px 20px;
  background-color: red;
`;
const Sidebar = styled.div`
  width: 220px;
  height: 100%;
  display: flex;

  justify-content: center;
  background-color: beige;
`;
