import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px;
  min-height: 100vh;
  background: #f8f9fa;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 20px 16px;
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
  }
`;

export const DashboardHeader = styled.header`
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const DashboardTitle = styled.h1`
  margin: 0;
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 20px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  color: #495057;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const RegionSelect = styled.select`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  background: white;
  transition: all 0.3s ease;
  font-weight: 500;

  &::placeholder {
    color: #6c757d;
    font-weight: 400;
  }

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    gap: 12px;
    max-height: 60vh;
  }

  @media (max-width: 480px) {
    gap: 10px;
    max-height: 50vh;
  }
`;

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
`;

export const CountryFlag = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e1e5e9;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  ${CountryItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 50px;
    align-self: center;
  }
`;

export const CountryInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CountryName = styled.h3`
  margin: 0 0 6px 0;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

export const CountryDetails = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    white-space: normal;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.3rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 40px 16px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.3rem;
  color: #e74c3c;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 40px 16px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
    font-size: 1rem;
  }
`; 