import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 500px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin: 12px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 500;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 400;
  flex-shrink: 0;
  min-width: 120px;

  @media (max-width: 640px) {
    min-width: auto;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Value = styled.span<{
  type?: "status" | "id" | "currency" | "default";
}>`
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  flex: 1;
  word-break: break-all;

  ${(props) =>
    props.type === "status" &&
    `
    color: #059669;
    font-weight: 500;
  `}

  ${(props) =>
    props.type === "id" &&
    `
    color: #4b5563;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
    font-size: 13px;
  `}
  
  ${(props) =>
    props.type === "currency" &&
    `
    color: #374151;
    font-weight: 500;
  `}
  
  ${(props) =>
    props.type === "default" &&
    `
    color: #374151;
  `}
  
  @media (max-width: 640px) {
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ValueWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

export const CopyIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  color: #6b7280;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const StatusBadge = styled.span`
  background: #d1fae5;
  color: #059669;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;

export const SuccessStatus = styled.span`
  color: #059669;
  font-weight: 500;
`;

export const UpdateInfo = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;

  @media (max-width: 480px) {
    margin-top: 16px;
    padding-top: 12px;
  }
`;

export const UpdateText = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
