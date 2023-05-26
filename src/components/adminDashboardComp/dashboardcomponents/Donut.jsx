import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { BiMinus } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import {
  BsArrowUpRight,
  BsArrowDownRight,
  BsPlus,
  BsPeople,
} from "react-icons/bs";
const Donut = () => {
  return (
    <>
      <Container>
        <ChartWrap>
          <Chart
            type="donut"
            width={510}
            height={310}
            series={[
              230, 567, 601, 940, 340, 235, 621, 383, 470, 290, 560, 109,
            ]}
            options={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              title: {
                text: "Payment Activity",
                style: { fontSize: 16, color: "#025C80" },
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "80%",
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: 25,
                        color: " #f39712",
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
            }}
          />
        </ChartWrap>

        <Details>
          <Customer>
            <Top>
              <span>
                <BsPeople />
              </span>
              <div>Customers</div>
            </Top>
            <Bottom>
              <Projection>
                <span>567</span>
                <div>
                  <BsArrowUpRight />{" "}
                  <p>
                    {" "}
                    <BsPlus /> <span>8.8</span>
                  </p>
                </div>
              </Projection>
              <Message>
                <div>
                  You have <span>28</span> new customers
                </div>
              </Message>
            </Bottom>
          </Customer>
          <Revenue>
            <Top>
              <span>
                <FaDollarSign />
              </span>
              <div>Payments</div>
            </Top>
            <Bottom>
              <Projection>
                <span>890000</span>
                <div>
                  <BsArrowUpRight />
                  <p>
                    <BsPlus /> <span>18.8</span>
                  </p>
                </div>
              </Projection>
              <Message>
                <div>
                  You made <span>280000</span> this week
                </div>
              </Message>
            </Bottom>
          </Revenue>
        </Details>
      </Container>
    </>
  );
};

export default Donut;

const Container = styled.div`
  display: flex;
`;

const ChartWrap = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-left: 5px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
`;
const Customer = styled.div`
  margin-left: 10px;
  width: 230px;
  height: 180px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;
const Revenue = styled.div`
  margin-left: 15px;
  width: 230px;
  height: 180px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 45px;
    height: 45px;
    border-radius: 5px;
    background-color: #d5810b;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
  }
  div {
    font-size: 20px;
    margin-left: 10px;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const Projection = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 28px;
  }
  div {
    display: flex;
    color: #2cec05;
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      span {
        font-size: 13px;
      }
    }
  }
`;
const Message = styled.div`
  font-size: 14px;
  span {
    color: #2cec05;
  }
`;
