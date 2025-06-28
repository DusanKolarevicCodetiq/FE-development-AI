import styled from "styled-components";

// Tab Container
export const TabContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 20px;
  flex: 1;

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

// Tab Navigation
export const TabNav = styled.nav`
  display: flex;
  border-bottom: 2px solid #e1e5e9;
  margin-bottom: 24px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#007bff' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: none;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px 12px 0 0;
  margin-right: 4px;
  white-space: nowrap;
  min-width: 120px;
  text-align: center;

  &:hover {
    background: ${props => props.$active ? '#0056b3' : '#f8f9fa'};
    color: ${props => props.$active ? 'white' : '#333'};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: -2px;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    min-width: 80px;
  }
`;

// Loading and Error States
export const StateMessage = styled.div`
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

export const ErrorMessage = styled(StateMessage)`
  color: #e74c3c;
`;

// Cards View
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 4px;
  }
`; 