import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const DateGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DateLabel = styled.label`
  font-size: 0.875rem;
  color: #6b7280;
  white-space: nowrap;
`;

export const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #374151;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const ChartTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ChartTypeLabel = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  margin-right: 0.5rem;
`;

export const ChartTypeButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${({ $active }) => ($active ? "#3b82f6" : "#d1d5db")};
  background: ${({ $active }) => ($active ? "#eff6ff" : "white")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b82f6;
    background: #eff6ff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  height: 400px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const YAxisLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
  width: 60px;
  text-align: right;
`;

export const Chart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 0;
`;

export const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-left: 4px;
`;

export const XAxisLabel = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  transform: rotate(-45deg);
  transform-origin: left;
  white-space: nowrap;
`;

export const BarGroup = styled.div`
  display: flex;
  align-items: end;
  gap: 2px;
  flex: 1;
  justify-content: center;
`;

export const Bar = styled.div<{ $height: number; $color: string }>`
  width: 12px;
  height: ${({ $height }) => $height}%;
  background-color: ${({ $color }) => $color};
  border-radius: 2px 2px 0 0;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: scaleY(1.05);
  }

  @media (max-width: 768px) {
    width: 8px;
  }
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 640px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
`;

export const LegendColor = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ $color }) => $color};
  border-radius: 2px;
`;
