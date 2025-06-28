// src/components/CountryCard.styles.ts

import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 1rem;

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`;
export const FlagImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const CountryName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #007acc;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const InfoText = styled.p`
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;
