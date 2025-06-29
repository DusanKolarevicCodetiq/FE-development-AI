import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  border: 1px solid #e5e7eb;
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f3f4f6;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
`;

export const DetailsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DetailRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  align-items: start;
  padding: 0.75rem 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const Label = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  line-height: 1.5;
`;

export const Value = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  word-break: break-all;

  @media (max-width: 640px) {
    word-break: break-word;
  }
`;

export const StatusBadge = styled.span<{ $color: string; $small?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ $small }) => ($small ? "0.125rem 0.375rem" : "0.25rem 0.5rem")};
  background-color: ${({ $color }) => $color}20;
  color: ${({ $color }) => $color};
  border-radius: 0.375rem;
  font-size: ${({ $small }) => ($small ? "0.75rem" : "0.875rem")};
  font-weight: 500;
  margin-top: ${({ $small }) => ($small ? "0.25rem" : "0")};
`;

export const ScheduleIdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 0.8125rem;
    flex: 1;
  }
`;

export const CopyButton = styled.button<{ $success?: boolean }>`
  padding: 0.25rem;
  border: 1px solid ${({ $success }) => ($success ? "#10b981" : "#d1d5db")};
  background: ${({ $success }) => ($success ? "#ecfdf5" : "white")};
  color: ${({ $success }) => ($success ? "#10b981" : "#6b7280")};
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ $success }) => ($success ? "#10b981" : "#9ca3af")};
    background: ${({ $success }) => ($success ? "#d1fae5" : "#f9fafb")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CostValue = styled.div`
  font-weight: 600;
  color: #374151;
  font-size: 0.9375rem;
`;

export const LastUpdated = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  font-style: italic;
`;
