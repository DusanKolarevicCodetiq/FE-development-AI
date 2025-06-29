import styled from "styled-components";

export const FullScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
`;

export const Header = styled.header`
  background-color: #2b6cb0;
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
