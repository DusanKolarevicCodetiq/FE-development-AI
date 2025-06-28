import styled from "styled-components";

export const FullScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  overflow-x: hidden;
`;

export const Header = styled.header`
  background: white;
  padding: 24px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #333;
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

export const Subtitle = styled.p`
  margin: 12px 0 0 0;
  color: #666;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 6px;
  }
`; 