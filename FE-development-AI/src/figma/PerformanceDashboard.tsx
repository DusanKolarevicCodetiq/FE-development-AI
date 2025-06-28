import React, { useState, useMemo } from "react";
import * as S from "./PerformanceDashboard.styles";

interface DataPoint {
  date: string;
  values: number[];
  label: string;
}

type ChartType = "grouped" | "stacked" | "line" | "export";

const PerformanceDashboard: React.FC = () => {
  const [startDate, setStartDate] = useState("2023-11-16");
  const [endDate, setEndDate] = useState("2023-12-16");
  const [chartType, setChartType] = useState<ChartType>("grouped");
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
  }>({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  // Mock data based on the chart
  const data: DataPoint[] = [
    {
      date: "2023-12-24",
      values: [0.0024, 0.0019, 0.0021],
      label: "2023-12-24",
    },
    { date: "2023-12-25", values: [0.0022, 0.0018], label: "2023-12-25" },
    { date: "2023-12-26", values: [0.0028, 0.0024], label: "2023-12-26" },
    { date: "2023-12-27", values: [0.0033, 0.0025], label: "2023-12-27" },
    { date: "2023-12-28", values: [0.0022, 0.0018], label: "2023-12-28" },
    { date: "2023-12-29", values: [0.0027, 0.0015], label: "2023-12-29" },
    { date: "2023-12-30", values: [0.003, 0.0018], label: "2023-12-30" },
    { date: "2023-12-31", values: [0.0023, 0.0018], label: "2023-12-31" },
    { date: "2024-01-01", values: [0.0034, 0.0032], label: "2024-01-01" },
    { date: "2024-01-02", values: [0.0041, 0.0026], label: "2024-01-02" },
    { date: "2024-01-03", values: [0.0048, 0.0021], label: "2024-01-03" },
  ];

  const colors = ["#ff6b6b", "#51cf66", "#ffd43b"];

  const chartDimensions = {
    width: 800,
    height: 400,
    margin: { top: 20, right: 40, bottom: 60, left: 60 },
  };

  const innerWidth =
    chartDimensions.width -
    chartDimensions.margin.left -
    chartDimensions.margin.right;
  const innerHeight =
    chartDimensions.height -
    chartDimensions.margin.top -
    chartDimensions.margin.bottom;

  const maxValue = useMemo(() => {
    return Math.max(...data.flatMap((d) => d.values)) * 1.1;
  }, [data]);

  const yScale = (value: number) => {
    return innerHeight - (value / maxValue) * innerHeight;
  };

  const formatYValue = (value: number) => {
    return value.toFixed(6);
  };

  const formatTooltipValue = (value: number) => {
    return value.toFixed(6);
  };

  const handleBarHover = (
    event: React.MouseEvent,
    value: number,
    date: string,
    seriesIndex: number
  ) => {
    const rect = (event.currentTarget as SVGElement).getBoundingClientRect();
    const container = (event.currentTarget as SVGElement)
      .closest(".chart-container")
      ?.getBoundingClientRect();

    if (container) {
      setTooltip({
        visible: true,
        x: rect.left - container.left + rect.width / 2,
        y: rect.top - container.top,
        content: `${date}: ${formatTooltipValue(value)}`,
      });
    }
  };

  const handleBarLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const renderChart = () => {
    const barWidth = innerWidth / data.length;
    const barGroupWidth = barWidth * 0.8;
    const individualBarWidth = barGroupWidth / 3;

    return (
      <S.ChartSvg
        viewBox={`0 0 ${chartDimensions.width} ${chartDimensions.height}`}
      >
        {/* Grid lines */}
        {[0, 0.001, 0.002, 0.003, 0.004, 0.005].map((value) => (
          <g key={value}>
            <S.GridLine
              x1={chartDimensions.margin.left}
              y1={chartDimensions.margin.top + yScale(value)}
              x2={chartDimensions.width - chartDimensions.margin.right}
              y2={chartDimensions.margin.top + yScale(value)}
            />
            <S.YAxisLabel
              x={chartDimensions.margin.left - 10}
              y={chartDimensions.margin.top + yScale(value) + 4}
            >
              {formatYValue(value)}
            </S.YAxisLabel>
          </g>
        ))}

        {/* Bars */}
        {data.map((dataPoint, dataIndex) => {
          const x =
            chartDimensions.margin.left +
            dataIndex * barWidth +
            (barWidth - barGroupWidth) / 2;

          return (
            <S.BarGroup key={dataPoint.date}>
              {dataPoint.values.map((value, valueIndex) => {
                const barX = x + valueIndex * individualBarWidth;
                const barHeight = (value / maxValue) * innerHeight;
                const barY =
                  chartDimensions.margin.top + innerHeight - barHeight;

                return (
                  <S.Bar
                    key={valueIndex}
                    x={barX}
                    y={barY}
                    width={individualBarWidth}
                    height={barHeight}
                    color={colors[valueIndex]}
                    onMouseEnter={(e) =>
                      handleBarHover(e, value, dataPoint.label, valueIndex)
                    }
                    onMouseLeave={handleBarLeave}
                  />
                );
              })}
            </S.BarGroup>
          );
        })}

        {/* X-axis labels */}
        {data.map((dataPoint, index) => {
          const x =
            chartDimensions.margin.left + index * barWidth + barWidth / 2;
          const y = chartDimensions.height - chartDimensions.margin.bottom + 20;

          return (
            <S.XAxisLabel key={dataPoint.date} x={x} y={y}>
              {dataPoint.date.split("-")[2]}/{dataPoint.date.split("-")[1]}
            </S.XAxisLabel>
          );
        })}
      </S.ChartSvg>
    );
  };

  return (
    <S.Container>
      <S.DashboardCard>
        <S.Header>
          <S.Title>Performance reference</S.Title>

          <S.Controls>
            <S.DateControls>
              <S.DateLabel>Data from:</S.DateLabel>
              <S.DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <S.CalendarIcon>📅</S.CalendarIcon>

              <S.DateLabel>to:</S.DateLabel>
              <S.DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <S.CalendarIcon>📅</S.CalendarIcon>
            </S.DateControls>

            <S.ChartTypeControls>
              <S.ChartTypeLabel>Chart type</S.ChartTypeLabel>
              <S.ChartTypeButton
                isActive={chartType === "grouped"}
                onClick={() => setChartType("grouped")}
                title="Grouped bars"
              >
                📊
              </S.ChartTypeButton>
              <S.ChartTypeButton
                isActive={chartType === "stacked"}
                onClick={() => setChartType("stacked")}
                title="Stacked bars"
              >
                📈
              </S.ChartTypeButton>
              <S.ChartTypeButton
                isActive={chartType === "line"}
                onClick={() => setChartType("line")}
                title="Line chart"
              >
                ✓
              </S.ChartTypeButton>
              <S.ChartTypeButton
                isActive={chartType === "export"}
                onClick={() => setChartType("export")}
                title="Export"
              >
                📤
              </S.ChartTypeButton>
            </S.ChartTypeControls>
          </S.Controls>
        </S.Header>

        <S.ChartContainer className="chart-container">
          {renderChart()}
          <S.Tooltip x={tooltip.x} y={tooltip.y} visible={tooltip.visible}>
            {tooltip.content}
          </S.Tooltip>
        </S.ChartContainer>
      </S.DashboardCard>
    </S.Container>
  );
};

export default PerformanceDashboard;
