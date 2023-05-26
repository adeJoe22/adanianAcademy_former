import React from "react";
import styled from "styled-components";
import UserTable from "../../components/adminDashboardComp/usercomponents/UserTable";

const User = () => {
  return (
    <>
      <Container>
        <UserTable />
      </Container>
    </>
  );
};

export default User;
const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 15px;
`;
