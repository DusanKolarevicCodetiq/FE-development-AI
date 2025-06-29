import styled from 'styled-components';

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  
  @media (min-width: 1536px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
