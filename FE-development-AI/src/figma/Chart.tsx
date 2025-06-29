import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  DateRangeContainer,
  DateGroup,
  DateLabel,
  DateInput,
  ChartTypeContainer,
  ChartTypeLabel,
  ChartTypeButton,
  ChartContainer,
  Chart,
  YAxisLabel,
  XAxis,
  XAxisLabel,
  BarGroup,
  Bar,
  Legend,
  LegendItem,
  LegendColor,
} from "./Chart.styles";

interface PerformanceData {
  date: string;
  value1: number;
  value2: number;
  value3?: number;
}

interface PerformanceChartProps {
  data?: PerformanceData[];
}

const defaultData: PerformanceData[] = [
  { date: "2023-12-24", value1: 0.0023, value2: 0.002, value3: 0.0021 },
  { date: "2023-12-25", value1: 0.0021, value2: 0.0019 },
  { date: "2023-12-26", value1: 0.0029, value2: 0.0024 },
  { date: "2023-12-27", value1: 0.0035, value2: 0.0025 },
  { date: "2023-12-28", value1: 0.0021, value2: 0.0019 },
  { date: "2023-12-29", value1: 0.0027, value2: 0.0016 },
  { date: "2023-12-30", value1: 0.003, value2: 0.0018 },
  { date: "2023-12-31", value1: 0.0022, value2: 0.0018 },
  { date: "2024-01-01", value1: 0.0035, value2: 0.0032 },
  { date: "2024-01-02", value1: 0.0042, value2: 0.0025 },
  { date: "2024-01-03", value1: 0.0048, value2: 0.002 },
];

export const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data = defaultData,
}) => {
  const [dateFrom, setDateFrom] = useState("2023-11-16 00:00");
  const [dateTo, setDateTo] = useState("2023-12-16 00:00");
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const maxValue = Math.max(
    ...data.flatMap((d) => [d.value1, d.value2, d.value3 || 0])
  );
  const yAxisMax = Math.ceil(maxValue * 10000) / 10000;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}-${date.getDate()}`;
  };

  const formatYAxisValue = (value: number) => {
    return `${(value * 1000).toFixed(2)}`;
  };

  const getBarHeight = (value: number) => {
    return (value / yAxisMax) * 100;
  };

  return (
    <Container>
      <Header>
        <Title>Performance reference</Title>

        <DateRangeContainer>
          <DateGroup>
            <DateLabel>Data from:</DateLabel>
            <DateInput
              type="datetime-local"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </DateGroup>

          <DateGroup>
            <DateLabel>to:</DateLabel>
            <DateInput
              type="datetime-local"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </DateGroup>
        </DateRangeContainer>

        <ChartTypeContainer>
          <ChartTypeLabel>Chart type:</ChartTypeLabel>
          <ChartTypeButton
            $active={chartType === "bar"}
            onClick={() => setChartType("bar")}
            aria-label="Bar chart"
          >
            📊
          </ChartTypeButton>
          <ChartTypeButton
            $active={chartType === "line"}
            onClick={() => setChartType("line")}
            aria-label="Line chart"
          >
            📈
          </ChartTypeButton>
          <ChartTypeButton
            $active={false}
            onClick={() => {}}
            aria-label="Export"
          >
            📤
          </ChartTypeButton>
        </ChartTypeContainer>
      </Header>

      <ChartContainer>
        <YAxisLabel>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i}>{formatYAxisValue((yAxisMax / 5) * (5 - i))}</span>
          ))}
        </YAxisLabel>

        <Chart>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              height: "100%",
              gap: "8px",
            }}
          >
            {data.map((item, index) => (
              <BarGroup key={index}>
                <Bar
                  $height={getBarHeight(item.value1)}
                  $color="#ff6b6b"
                  title={`Value 1: ${item.value1}`}
                />
                <Bar
                  $height={getBarHeight(item.value2)}
                  $color="#51cf66"
                  title={`Value 2: ${item.value2}`}
                />
                {item.value3 && (
                  <Bar
                    $height={getBarHeight(item.value3)}
                    $color="#ffd43b"
                    title={`Value 3: ${item.value3}`}
                  />
                )}
              </BarGroup>
            ))}
          </div>

          <XAxis>
            {data.map((item, index) => (
              <XAxisLabel key={index}>{formatDate(item.date)}</XAxisLabel>
            ))}
          </XAxis>
        </Chart>
      </ChartContainer>

      <Legend>
        <LegendItem>
          <LegendColor $color="#ff6b6b" />
          Series 1
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#51cf66" />
          Series 2
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#ffd43b" />
          Series 3
        </LegendItem>
      </Legend>
    </Container>
  );
};
