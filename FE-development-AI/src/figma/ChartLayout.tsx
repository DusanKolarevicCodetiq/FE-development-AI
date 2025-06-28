import React, { useState } from 'react';
import {
  ChartContainer,
  ChartHeader,
  ChartTitle,
  ChartControls,
  Select,
  ChartArea,
  ChartGrid,
  GridLine,
  ChartContent,
  ChartPlaceholder,
  ChartLegend,
  LegendItem,
  LegendDot,
  ChartStats,
  StatCard,
  StatTitle,
  StatValue,
  StatChange
} from './ChartLayout.styles';

// Chart Layout Component
const ChartLayout: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [chartType, setChartType] = useState('line');

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>Analytics Dashboard</ChartTitle>
        <ChartControls>
          <Select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="area">Area Chart</option>
          </Select>
          <Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="1d">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </Select>
        </ChartControls>
      </ChartHeader>

      <ChartArea>
        <ChartGrid>
          {Array.from({ length: 80 }).map((_, i) => (
            <GridLine key={i} />
          ))}
        </ChartGrid>
        <ChartContent>
          <ChartPlaceholder>
            Chart Visualization Area
          </ChartPlaceholder>
          <ChartLegend>
            <LegendItem>
              <LegendDot color="#667eea" />
              <span>Revenue</span>
            </LegendItem>
            <LegendItem>
              <LegendDot color="#764ba2" />
              <span>Users</span>
            </LegendItem>
            <LegendItem>
              <LegendDot color="#f093fb" />
              <span>Orders</span>
            </LegendItem>
          </ChartLegend>
        </ChartContent>
      </ChartArea>

      <ChartStats>
        <StatCard>
          <StatTitle>Total Revenue</StatTitle>
          <StatValue>$124,563</StatValue>
          <StatChange positive={true}>+12.5% from last month</StatChange>
        </StatCard>
        <StatCard>
          <StatTitle>Active Users</StatTitle>
          <StatValue>8,234</StatValue>
          <StatChange positive={true}>+8.2% from last month</StatChange>
        </StatCard>
        <StatCard>
          <StatTitle>Conversion Rate</StatTitle>
          <StatValue>3.24%</StatValue>
          <StatChange positive={false}>-0.8% from last month</StatChange>
        </StatCard>
        <StatCard>
          <StatTitle>Average Order</StatTitle>
          <StatValue>$156.78</StatValue>
          <StatChange positive={true}>+5.3% from last month</StatChange>
        </StatCard>
      </ChartStats>
    </ChartContainer>
  );
};

export default ChartLayout; 