import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ListHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: #f7fafc;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4299e1;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
  }

  span {
    font-weight: 600;
    color: #4a5568;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid ${props => props.$active ? '#4299e1' : '#e2e8f0'};
  border-radius: 6px;
  background: ${props => props.$active ? '#4299e1' : '#ffffff'};
  color: ${props => props.$active ? '#ffffff' : '#4a5568'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4299e1;
    background: ${props => props.$active ? '#3182ce' : '#ebf8ff'};
    color: ${props => props.$active ? '#ffffff' : '#2b6cb0'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
  }
`;

export const CountryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CountryListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4299e1;
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
`;

export const CountryFlag = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 50px;
  }
`;

export const CountryContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CountryName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

export const CountryRegion = styled.span`
  font-weight: 500;
  color: #4a5568;
`;

export const CountryPopulation = styled.span`
  font-weight: 500;
  color: #4a5568;
`;

export const CountryCapital = styled.span`
  font-weight: 500;
  color: #4a5568;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #4299e1;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

export const LoadingText = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  margin: 0;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: 1.125rem;
  color: #e53e3e;
  margin: 0;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyStateText = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 0.5rem 0;
`;

export const EmptyStateSubtext = styled.p`
  font-size: 1rem;
  color: #718096;
  margin: 0;
`; 