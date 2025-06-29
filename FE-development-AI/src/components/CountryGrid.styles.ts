import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;

    &:hover {
      background: #94a3b8;
    }
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;

  @media (max-width: 768px) {
    padding: 0.75rem;
    max-height: 65vh;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    max-height: 60vh;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }

  /* Ensure all grid items have consistent width */
  > div {
    width: 100%;
    height: fit-content;
  }
`;
