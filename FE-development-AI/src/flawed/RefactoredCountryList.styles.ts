import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 800;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: white;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1em;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
  
  option {
    padding: 0.5rem;
  }
`;

export const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 2.5rem;
  width: 100%;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CountryCard = styled.article`
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
`;

export const CountryInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CountryName = styled.h2`
  font-size: 1.125rem;
  margin: 0 0 1rem 0;
  color: #2d3748;
  font-weight: 800;
  line-height: 1.3;
`;

export const Detail = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0;
  color: #4a5568;
  line-height: 1.6;
  
  strong {
    font-weight: 600;
    color: #2d3748;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.125rem;
  color: #4a5568;
  background: #f8fafc;
  border-radius: 0.5rem;
`;

export const ErrorMessage = styled.div`
  padding: 2rem;
  background: #fff5f5;
  color: #e53e3e;
  border: 1px solid #fed7d7;
  border-radius: 0.5rem;
  margin: 2rem 0;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
`;
