import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 2rem;
  gap: 0.5rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    gap: 0.25rem;

    /* Custom scrollbar for mobile */
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }

    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 2px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${({ $active }) => ($active ? "#3b82f6" : "transparent")};
  color: ${({ $active }) => ($active ? "white" : "#64748b")};
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  white-space: nowrap;
  min-width: fit-content;

  &:hover {
    background: ${({ $active }) => ($active ? "#2563eb" : "#f1f5f9")};
    color: ${({ $active }) => ($active ? "white" : "#475569")};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $active }) => ($active ? "#3b82f6" : "transparent")};
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const TabPanel = styled.div`
  &[hidden] {
    display: none;
  }

  width: 100%;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.125rem;
  color: #64748b;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
    min-height: 150px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 1rem;
    min-height: 120px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
  text-align: center;
  color: #dc2626;

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: #64748b;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 150px;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 120px;

    h2 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;
