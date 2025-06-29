import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: white;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;

    &:hover {
      background: #94a3b8;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    &::-webkit-scrollbar {
      height: 6px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 550px;
  }

  @media (max-width: 480px) {
    min-width: 500px;
  }
`;

export const TableHead = styled.thead`
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  &:first-child {
    width: 80px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.375rem;
    font-size: 0.75rem;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  vertical-align: middle;
  white-space: nowrap;

  &:first-child {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.375rem;
    font-size: 0.75rem;
  }
`;

export const FlagImage = styled.img`
  width: 56px;
  height: auto;
  max-height: 36px;
  object-fit: contain;
  object-position: center;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 48px;
    max-height: 32px;
  }

  @media (max-width: 480px) {
    width: 40px;
    max-height: 28px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    padding: 0.75rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 0.5rem 0;
  }
`;

export const PaginationInfo = styled.span`
  color: #64748b;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.375rem;
  }
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  min-width: 80px;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    border-color: #9ca3af;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f9fafb;
  }

  @media (max-width: 768px) {
    padding: 0.4375rem 0.875rem;
    font-size: 0.8125rem;
    min-width: 70px;
  }

  @media (max-width: 480px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    min-width: 60px;
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 0.25rem;
  margin: 0 0.5rem;

  @media (max-width: 480px) {
    order: 3;
    width: 100%;
    justify-content: center;
    margin: 0.5rem 0 0 0;
    gap: 0.1875rem;
  }
`;

export const PageNumber = styled.button<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ $active }) => ($active ? "#3b82f6" : "#d1d5db")};
  background: ${({ $active }) => ($active ? "#3b82f6" : "white")};
  color: ${({ $active }) => ($active ? "white" : "#374151")};
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#2563eb" : "#f3f4f6")};
    border-color: ${({ $active }) => ($active ? "#2563eb" : "#9ca3af")};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }
`;
