// src/components/CountryTabs.styles.ts

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 1rem 0.75rem;
  }
`;
export const Tabs = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  min-height: 50px; /* Reserve space to avoid jump */

  @media (max-width: 600px) {
    padding-bottom: 0.15rem;
    min-height: 44px;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.25rem;
  background: none;
  border: none;
  border-bottom: 3px solid
    ${({ active }) => (active ? "#007acc" : "transparent")};
  color: ${({ active }) => (active ? "#007acc" : "#333")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  flex-shrink: 0;
  font-size: 1rem;

  &:hover {
    color: #007acc;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  margin-top: 1.5rem;
`;

export const CountryName = styled.h3`
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const CountryCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flag = styled.img`
  width: 100%;
  max-height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Th = styled.th`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007acc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
