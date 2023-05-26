import React from "react";
import styled from "styled-components";
import AreaChart from "../../components/adminDashboardComp/dashboardcomponents/AreaChart";
import StudentActivity from "../../components/adminDashboardComp/dashboardcomponents/StudentActivity";
import Donut from "../../components/adminDashboardComp/dashboardcomponents/Donut";
const DashBoard = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapOne>
            <div>
              <AreaChart />
            </div>
            <div>
              <StudentActivity />
            </div>
          </WrapOne>
          <WrapTwo>
            <div></div>
            <div>
              <Donut />
            </div>
          </WrapTwo>
        </Wrapper>
      </Container>
    </>
  );
};

export default DashBoard;

const Container = styled.div`
  /* background-color: #fff; */
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const WrapOne = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
  margin: 15px 0;
`;

const WrapTwo = styled.div`
  width: 100%;
`;
