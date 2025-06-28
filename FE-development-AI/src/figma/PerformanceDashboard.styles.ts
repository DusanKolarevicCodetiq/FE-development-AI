import styled from "styled-components";

export const Container = styled.div`
  background: #f8f9fa;
  padding: 24px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const DashboardCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #495057;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const DateControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const DateLabel = styled.span`
  font-size: 14px;
  color: #6c757d;
  font-weight: 500;
`;

export const DateInput = styled.input`
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  color: #495057;
  background: white;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const CalendarIcon = styled.button`
  background: none;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f8f9fa;
  }

  &:focus {
    outline: none;
    border-color: #80bdff;
  }
`;

export const ChartTypeControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChartTypeLabel = styled.span`
  font-size: 14px;
  color: #6c757d;
  font-weight: 500;
`;

export const ChartTypeButton = styled.button<{ isActive?: boolean }>`
  background: ${(props) => (props.isActive ? "#007bff" : "white")};
  border: 1px solid ${(props) => (props.isActive ? "#007bff" : "#ced4da")};
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "white" : "#6c757d")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.isActive ? "#0056b3" : "#f8f9fa")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const ChartContainer = styled.div`
  padding: 24px;
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
    height: 400px;
  }
`;

export const ChartSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const GridLine = styled.line`
  stroke: #e9ecef;
  stroke-width: 1;
  stroke-dasharray: 2, 2;
`;

export const YAxisLabel = styled.text`
  font-size: 12px;
  fill: #6c757d;
  text-anchor: end;
`;

export const XAxisLabel = styled.text`
  font-size: 11px;
  fill: #6c757d;
  text-anchor: middle;
`;

export const BarGroup = styled.g`
  cursor: pointer;

  &:hover rect {
    opacity: 0.8;
  }
`;

export const Bar = styled.rect<{ color: string }>`
  fill: ${(props) => props.color};
  transition: opacity 0.2s ease;
`;

export const Tooltip = styled.div<{ x: number; y: number; visible: boolean }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  z-index: 10;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.8);
  }
`;
