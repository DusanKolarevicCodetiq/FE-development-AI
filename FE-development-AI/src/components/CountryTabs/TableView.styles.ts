import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  
  @media (max-width: 768px) {
    border-radius: 0;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const TableHeader = styled.thead`
  background-color: #f7fafc;
  border-bottom: 2px solid #e2e8f0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #edf2f7;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #f8fafc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  &:focus-visible {
    outline: 2px solid #3182ce;
    outline-offset: -1px;
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  color: #4a5568;
  vertical-align: middle;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border: none;
    
    &::before {
      content: attr(data-label);
      font-weight: 600;
      color: #4a5568;
      margin-right: 1rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      min-width: 100px;
    }
  }
`;

export const CountryNameCell = styled(TableCell)`
  font-weight: 600;
  color: #2d3748;
  font-size: 0.95rem;
`;

export const FlagImage = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 30px;
    height: 22.5px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PageInfo = styled.span`
  color: #4a5568;
  font-size: 0.875rem;
  margin: 0 1rem;
  min-width: 100px;
  text-align: center;
`;

const paginationButtonStyles = css`
  padding: 0.5rem 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  min-width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background-color: #f7fafc;
    border-color: #cbd5e0;
    color: #2d3748;
  }
  
  &:focus-visible {
    outline: 2px solid #3182ce;
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button`
  ${paginationButtonStyles}
`;

export const PaginationArrowButton = styled(PageButton)`
  font-size: 1.1em;
  line-height: 1;
`;

export const PageNumberButton = styled(PageButton)<{ $isActive?: boolean }>`
  ${({ $isActive }) => 
    $isActive && css`
      background-color: #3182ce;
      color: white;
      border-color: #3182ce;
      
      &:hover {
        background-color: #2c5282;
        border-color: #2c5282;
      }
    `
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: 0.25rem;
`;
