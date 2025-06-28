import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #f8f9fa;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    height: 170px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const CardContent = styled.div`
  padding: 24px;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const CountryName = styled.h3`
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 14px;
  }
`;

export const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 0;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const DetailLabel = styled.span`
  color: #6c757d;
  font-size: 0.95rem;
  font-weight: 600;
  min-width: 90px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
    min-width: 85px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    min-width: 80px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    min-width: auto;
  }
`;

export const DetailValue = styled.span`
  color: #495057;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: right;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    text-align: left;
  }
`; 