// src/components/CountryTable.styles.ts

import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Thead = styled.thead`
  background-color: #f0f0f0;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: #eef6ff;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: bold;
  border-bottom: 2px solid #ddd;

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const FlagImage = styled.img`
  width: 36px;
  height: 24px;
  object-fit: contain;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const PageButton = styled.button`
  padding: 0.5rem 0.9rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
`;
