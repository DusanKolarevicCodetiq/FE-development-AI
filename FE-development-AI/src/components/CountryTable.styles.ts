import styled from "styled-components";

export const TableContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e1e5e9;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const TableScrollContainer = styled.div`
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      height: 6px;
    }
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 480px) {
    min-width: 400px;
  }
`;

export const TableHeader = styled.thead`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

export const TableHeaderCell = styled.th`
  padding: 20px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #e1e5e9;
  white-space: nowrap;

  &:first-child {
    padding-left: 24px;
    width: 80px;
  }

  &:nth-child(2) {
    min-width: 200px;
  }

  &:nth-child(3) {
    min-width: 120px;
  }

  &:nth-child(4) {
    min-width: 120px;
  }

  &:nth-child(5) {
    min-width: 120px;
  }

  &:last-child {
    padding-right: 24px;
  }

  @media (max-width: 1200px) {
    padding: 18px 14px;
    font-size: 0.95rem;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
    font-size: 0.9rem;

    &:first-child {
      padding-left: 16px;
      width: 70px;
    }

    &:last-child {
      padding-right: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    font-size: 0.85rem;

    &:first-child {
      padding-left: 12px;
      width: 60px;
    }

    &:last-child {
      padding-right: 12px;
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  transition: all 0.3s ease;
  border-bottom: 1px solid #f8f9fa;

  &:hover {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateX(2px);
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`;

export const TableCell = styled.td`
  padding: 20px 16px;
  color: #495057;
  font-size: 0.95rem;
  vertical-align: middle;
  line-height: 1.4;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }

  @media (max-width: 1200px) {
    padding: 18px 14px;
    font-size: 0.9rem;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
    font-size: 0.85rem;

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    font-size: 0.8rem;

    &:first-child {
      padding-left: 12px;
    }

    &:last-child {
      padding-right: 12px;
    }
  }
`;

export const FlagImage = styled.img`
  width: 50px;
  height: 35px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e1e5e9;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  ${TableRow}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 1200px) {
    width: 45px;
    height: 32px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 28px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 25px;
  }
`;

export const CountryNameCell = styled(TableCell)`
  min-width: 200px;
  max-width: 250px;
`;

export const CountryName = styled.div`
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 4px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const CountryOfficialName = styled.div`
  font-size: 0.85rem;
  color: #6c757d;
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
    max-width: 180px;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    max-width: 150px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    max-width: 120px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: #f8f9fa;
  border-top: 1px solid #e1e5e9;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1200px) {
    padding: 20px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const PaginationButton = styled.button`
  background: white;
  color: #495057;
  border: 1px solid #e1e5e9;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    background: #007bff;
    color: white;
    border-color: #007bff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  @media (max-width: 1200px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

export const PageInfo = styled.span`
  color: #6c757d;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PageSizeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: #6c757d;

  label {
    font-weight: 600;
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 8px;
  }
`;

export const PageSizeSelect = styled.select`
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.95rem;
  color: #495057;
  cursor: pointer;
  transition: border-color 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    border-color: #007bff;
  }

  @media (max-width: 1200px) {
    font-size: 0.9rem;
    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 3px 6px;
  }
`; 