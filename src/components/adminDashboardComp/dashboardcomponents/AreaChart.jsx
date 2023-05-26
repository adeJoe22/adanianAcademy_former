import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const AreaChart = () => {
  return (
    <>
      <Container>
        <ChartWrap>
          <Chart
            type="area"
            width={750}
            height={280}
            series={[
              {
                name: "Registration",
                data: [
                  1080, 4500, 627, 254, 2030, 700, 4200, 7103, 1007, 348, 5070,
                  909,
                ],
              },
            ]}
            options={{
              title: {
                text: "Registration Graph",
                style: { fontSize: 16, color: "#025C80" },
              },
              colors: ["#D5810B"],
              stroke: { width: 1, curve: "smooth" },
              xaxis: {
                title: { text: "Registration per month" },
                style: { fontSize: 20, color: "#f7a951" },
                categories: [
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
              },
              yaxis: {
                title: { text: "No of Registration" },
                style: { fontSize: 20 },
              },
            }}
          />
        </ChartWrap>
      </Container>
    </>
  );
};

export default AreaChart;

const Container = styled.div``;

const ChartWrap = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-left: 5px;
`;
