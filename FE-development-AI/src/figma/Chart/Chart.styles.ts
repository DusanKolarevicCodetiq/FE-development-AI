import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  * {
    font-family: inherit;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  line-height: 1.4;
`;

export const ChartDate = styled.span`
  font-size: 0.875rem;
  color: #718096;
  font-weight: 400;
`;

export const ChartContent = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  
  .recharts-cartesian-grid-horizontal line {
    stroke: #f0f0f0;
  }
  
  .recharts-cartesian-axis-line {
    display: none;
  }
  
  .recharts-tooltip-cursor {
    fill: rgba(0, 0, 0, 0.03);
  }
`;

export const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 400;
`;

export const LegendColor = styled.span<{ color: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`;
