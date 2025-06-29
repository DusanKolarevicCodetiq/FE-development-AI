import styled from "styled-components";

export const Card = styled.div<{ $interactive?: boolean }>`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: ${({ $interactive }) => ($interactive ? "pointer" : "default")};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:active {
    transform: ${({ $interactive }) =>
      $interactive ? "translateY(-2px)" : "translateY(-4px)"};
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: ${({ $interactive }) =>
        $interactive ? "translateY(-1px)" : "translateY(-2px)"};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }

    &:active {
      transform: none;
    }
  }
`;

export const FlagContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  background: #f1f5f9;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    ${Card}:hover & {
      transform: scale(1.01);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Card}:hover & {
      transform: none;
    }
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const CountryName = styled.h3`
  margin: 0 0 1.25rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.75rem;
  gap: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.625rem;
    gap: 0.375rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  min-width: fit-content;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const InfoValue = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
