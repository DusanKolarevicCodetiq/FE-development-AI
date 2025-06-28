import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }

  @media (max-width: 480px) {
    margin: 12px 0;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  width: 100%;

  /* Custom scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    height: 8px;

    @media (max-width: 480px) {
      height: 6px;
    }
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  background: white;

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 480px) {
    min-width: 400px;
  }
`;

export const TableHead = styled.thead`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TableHeader = styled.th`
  padding: 16px 12px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e2e8f0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;

  &:first-child {
    padding-left: 20px;
    border-top-left-radius: 12px;
  }

  &:last-child {
    padding-right: 20px;
    border-top-right-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 12px;
    letter-spacing: 0.3px;

    &:first-child {
      padding-left: 12px;
      border-top-left-radius: 8px;
    }

    &:last-child {
      padding-right: 12px;
      border-top-right-radius: 8px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    font-size: 11px;

    &:first-child {
      padding-left: 8px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      padding-right: 8px;
      border-top-right-radius: 6px;
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background: #f9fafb;
  }

  &:hover {
    background: #f1f5f9;
    cursor: pointer;
  }

  &:focus-within {
    background: #eff6ff;
    outline: 2px solid #3b82f6;
    outline-offset: -2px;
  }
`;

export const TableCell = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-size: 14px;
  vertical-align: middle;

  &:first-child {
    padding-left: 20px;
  }

  &:last-child {
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 13px;

    &:first-child {
      padding-left: 12px;
    }

    &:last-child {
      padding-right: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    font-size: 12px;

    &:first-child {
      padding-left: 8px;
    }

    &:last-child {
      padding-right: 8px;
    }
  }
`;

export const FlagCell = styled(TableCell)`
  width: 60px;
  text-align: center;

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;

export const NameCell = styled(TableCell)`
  font-weight: 600;
  color: #1e293b;
  min-width: 150px;

  @media (max-width: 768px) {
    min-width: 120px;
  }

  @media (max-width: 480px) {
    min-width: 100px;
  }
`;

export const CapitalCell = styled(TableCell)`
  min-width: 120px;
  color: #64748b;

  @media (max-width: 768px) {
    min-width: 100px;
  }

  @media (max-width: 480px) {
    min-width: 80px;
  }
`;

export const RegionCell = styled(TableCell)`
  min-width: 100px;

  @media (max-width: 768px) {
    min-width: 80px;
  }

  @media (max-width: 480px) {
    min-width: 70px;
  }
`;

export const PopulationCell = styled(TableCell)`
  font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace;
  font-weight: 600;
  color: #059669;
  text-align: right;
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    min-width: 80px;
    font-size: 11px;
  }
`;

export const FlagImage = styled.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 28px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 15px;
    border-radius: 2px;
  }
`;

export const FlagPlaceholder = styled.div`
  width: 32px;
  height: 20px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #64748b;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 28px;
    height: 18px;
    font-size: 9px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 15px;
    font-size: 8px;
    border-radius: 2px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: #64748b;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;

export const EmptyStateIcon = styled.div`
  width: 64px;
  height: 64px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
  color: #94a3b8;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const EmptyStateText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

// Mobile responsive adjustments
export const MobileHiddenHeader = styled(TableHeader)`
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MobileHiddenCell = styled(TableCell)`
  @media (max-width: 640px) {
    display: none;
  }
`;

// Pagination styles
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 20px;
    padding: 0 16px;
  }

  @media (max-width: 640px) {
    gap: 4px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    margin-top: 16px;
    padding: 0 8px;
  }
`;

export const PaginationButton = styled.button<{
  isActive?: boolean;
  disabled?: boolean;
}>`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: ${(props) => (props.isActive ? "#3b82f6" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#374151")};
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  min-width: 44px;

  &:hover:not(:disabled) {
    background: ${(props) => (props.isActive ? "#2563eb" : "#f1f5f9")};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 40px;
  }

  @media (max-width: 640px) {
    padding: 6px 8px;
    font-size: 12px;
    min-width: 36px;
  }

  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 11px;
    min-width: 32px;
  }
`;

export const PaginationEllipsis = styled.span`
  color: #64748b;
  font-weight: 500;
  padding: 8px 4px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 3px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px 2px;
  }
`;

export const PaginationInfo = styled.span`
  color: #64748b;
  font-size: 14px;
  margin-left: 16px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-left: 8px;
    font-size: 12px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
