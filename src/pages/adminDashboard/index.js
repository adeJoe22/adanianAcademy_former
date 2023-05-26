import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/adminDashboardComp/Sidebar";
import { Outlet } from "react-router-dom";

import TopBar from "../../components/adminDashboardComp/TopBar";
const AdminDashboard = () => {
  return (
    <>
      <Container>
        <SideBarWrapper>
          <Sidebar />
        </SideBarWrapper>
        <DisplayWrapper>
          <TopWrapper>
            <TopBar />
          </TopWrapper>
          <Body>
            <Outlet />
          </Body>
        </DisplayWrapper>
      </Container>
    </>
  );
};

export default AdminDashboard;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e5e5e5;
`;

const SideBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
`;
const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;
const TopWrapper = styled.div`
  width: 96%;
  height: 80px;
  display: flex;
  align-items: center;
  margin: 16px 0;
`;
const Body = styled.div`
  width: 96%;
  height: 500px;
  /* box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2); */
  border-radius: 5px;
  overflow-y: scroll;
  /* background-color: #fff; */
`;
