// src/components/PerformanceChart.tsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`;

const DateInput = styled.input`
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
`;

const ChartControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChartButton = styled.button`
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 0.4rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background: #007acc;
    color: white;
  }
`;

const ChartArea = styled.div`
  overflow-x: auto;
`;

const BarChart = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  height: 250px;
  padding-bottom: 1rem;
`;

const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`;

const Bar = styled.div<{ height: number; color: string }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  border-radius: 4px 4px 0 0;
  margin-bottom: 4px;
`;

const Label = styled.span`
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
`;

const mockData = [
  { date: "2023-12-04", values: [130, 120, 125] },
  { date: "2023-12-05", values: [110, 100] },
  { date: "2023-12-06", values: [140, 130] },
  { date: "2023-12-07", values: [160, 130] },
  { date: "2023-12-08", values: [110, 95] },
  { date: "2023-12-09", values: [135, 80] },
  { date: "2023-12-10", values: [150, 100] },
  { date: "2023-12-11", values: [115, 95] },
  { date: "2024-01-01", values: [180, 170] },
  { date: "2024-01-02", values: [200, 140] },
  { date: "2024-01-03", values: [230, 110] },
];

const barColors = ["#f66", "#4caf50", "#ffc107"];

const PerformanceChart: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Performance reference</Title>
        <FilterGroup>
          <label>
            Data from:
            <DateInput type="datetime-local" defaultValue="2023-11-16T00:00" />
          </label>
          <label>
            to:
            <DateInput type="datetime-local" defaultValue="2023-12-16T00:00" />
          </label>
          <ChartControls>
            <ChartButton className="active">▮▮</ChartButton>
            <ChartButton>📈</ChartButton>
          </ChartControls>
        </FilterGroup>
      </Header>

      <ChartArea>
        <BarChart>
          {mockData.map(({ date, values }, i) => (
            <BarGroup key={i}>
              {values.map((val, idx) => (
                <Bar
                  key={idx}
                  height={val}
                  color={barColors[idx % barColors.length]}
                  title={`${val}s`}
                />
              ))}
              <Label>{date}</Label>
            </BarGroup>
          ))}
        </BarChart>
      </ChartArea>
    </Wrapper>
  );
};

export default PerformanceChart;
