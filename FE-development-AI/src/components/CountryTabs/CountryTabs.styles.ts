import styled from 'styled-components';

interface TabButtonProps {
  $isActive: boolean;
}

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  
  @media (min-width: 1280px) {
    max-width: 90%;
  }
  
  @media (min-width: 1536px) {
    max-width: 85%;
  }
  
  @media (min-width: 1920px) {
    max-width: 1600px;
  }
`;

export const TabsHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  outline: none;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: #edf2f7;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #3182ce;
    z-index: 1;
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
      color: #3182ce;
      font-weight: 600;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0.5rem;
        right: 0.5rem;
        height: 3px;
        background-color: #3182ce;
        border-radius: 3px 3px 0 0;
        
        @media (min-width: 640px) {
          left: 1rem;
          right: 1rem;
        }
      }
    `}
`;

export const TabContent = styled.div`
  padding: 1rem;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

export const LoadingMessage = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  color: #4a5568;
  
  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #fff5f5;
  color: #c53030;
  border-radius: 4px;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
    margin: 1rem 0;
  }
`;
