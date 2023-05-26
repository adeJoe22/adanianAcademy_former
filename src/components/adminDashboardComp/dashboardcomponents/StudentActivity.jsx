import React from "react";
import styled from "styled-components";
import {
  MdNotificationsActive,
  MdPending,
  MdDeleteOutline,
} from "react-icons/md";
const StudentActivity = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <div>Student Activity</div> <p>See all</p>
          </Top>
          <Bottom>
            <Card>
              <Title>
                <h4>Interaction</h4>
                <div>Registered profile: 137</div>
              </Title>
              <Profile>
                {[
                  {
                    status: "Active",
                    icon: <MdNotificationsActive />,
                    data: "34",
                  },
                  { status: "Pending", icon: <MdPending />, data: "89" },
                  { status: "Deleted", icon: <MdDeleteOutline />, data: "14" },
                ].map((props, i) => (
                  <Wrap key={i}>
                    <Status>
                      <div>{props.icon}</div>
                      <div>{props.status}</div>
                    </Status>
                    <Data>{props.data}</Data>
                  </Wrap>
                ))}
              </Profile>
            </Card>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default StudentActivity;

const Container = styled.div`
  width: 290px;
  height: 270px;
  /* background-color: #fff; */
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  div {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: #f39712;
    text-decoration: underline;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  border-radius: 10px;
  border-top: 8px solid #f39712;
  width: 270px;
  height: 230px;
  padding: 12px 7px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;
const Title = styled.div`
  h4 {
    color: #3d3d3d;
  }
  div {
    font-size: 13px;
    margin: 10px 0;
    color: #3d3d3d;
  }
`;
const Profile = styled.div`
  padding: 0 10px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 4px;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  color: #969696;
  svg {
    font-size: 22px;
  }
  div {
    margin-left: 4px;
    font-size: 14px;
  }
`;
const Data = styled.div`
  font-size: 13px;
  color: #969696;
  font-weight: 600;
`;
