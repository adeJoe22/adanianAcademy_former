import React, { useState } from "react";
import styled from "styled-components";

const myData = [
  {
    id: 1,
    fName: "Joy",
    lName: "Shane",
    email: "shade@gmail.com",
    joinDate: "12-4-2030",
    phone: "3420289222",
    gender: "Male",
  },
  {
    id: 2,
    fName: "Tope",
    lName: "Folawiyo",
    email: "shade@gmail.com",
    joinDate: "12-4-2030",
    phone: "5640975754",
    gender: "Female",
  },
  {
    id: 3,
    fName: "Colly",
    lName: "Sharp",
    email: "shade@gmail.com",
    joinDate: "12-4-2030",
    phone: "7856556548",
    gender: "Female",
  },
  {
    id: 4,
    fName: "Charles",
    lName: "Lipo",
    email: "shade@gmail.com",
    joinDate: "12-4-2030",
    phone: "0923568678",
    gender: "Male",
  },
];

const UserData = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrap>
            <Name>Shola Taylor</Name>
            <ID>
              <span>Student ID:</span>
              <p>38UJ7S</p>
            </ID>
          </TitleWrap>
          <InfoTable>
            <Personal>
              <Ptitle>Personal Information</Ptitle>
              <PWrap>
                <PDetails>
                  <label>First Name</label>
                  <div>Joseph</div>
                </PDetails>
                <PDetails>
                  <label>First Name</label>
                  <div>Joseph</div>
                </PDetails>
                <PDetails>
                  <label>First Name</label>
                  <div>Joseph</div>
                </PDetails>
              </PWrap>
            </Personal>
          </InfoTable>
        </Wrapper>
      </Container>
    </>
  );
};

export default UserData;

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

const TitleWrap = styled.div`
  border: 1px solid;
  width: 100%;
`;
const Name = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const ID = styled.div`
  display: flex;
  margin: 10px 0;
  span {
    color: #9c9c9c;
    font-weight: 600;
  }
  p {
    text-transform: uppercase;
    color: #38edf3;
    font-weight: 600;
    margin-left: 3px;
  }
`;
const InfoTable = styled.div`
  border: 1px solid;
  width: 100%;
  margin: 10px 0px;
`;
const Personal = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
const Ptitle = styled.div`
  color: #38edf3;
  font-weight: 600;
`;
const PWrap = styled.div`
  margin: 10px 0px;
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
`;

const PDetails = styled.div`
  width: 320px;
  height: 45px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  label {
    color: #bbbbbb;
    font-weight: 600;
  }
  div {
    color: #5c5c5c;
    font-weight: 600;
  }
`;
