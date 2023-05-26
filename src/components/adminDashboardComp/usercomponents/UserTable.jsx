import React from "react";
import styled from "styled-components";
import { useMemo, useState, useEffect } from "react";
import { userData } from "../../../utils/adminDasboard/userData";
import Table from "../../../ui/datatable";
const UserTable = () => {
  const columns = useMemo(
    () => [
      {
        id: "image",
        label: "Image",
        render: (value) => (
          <div style={{ width: "75px", height: "75px" }}>
            <img src={value} alt="Product" width="100%" height="100%" />
          </div>
        ),
      },
      { id: "name", label: "Name" },
      { id: "studentId", label: "StudentID" },
      { id: "email", label: "Email" },
      { id: "referralCode", label: "ReferralCode" },
      { id: "date", label: "Date" },
      { id: "status", label: "Status" },
    ],
    []
  );

  return (
    <>
      <Container>
        <Table columns={columns} data={userData} />
      </Container>
    </>
  );
};

export default UserTable;

const Container = styled.div``;
