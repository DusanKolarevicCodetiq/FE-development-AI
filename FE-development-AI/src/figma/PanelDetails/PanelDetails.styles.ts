import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const PanelHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #edf2f7;
`;

export const PanelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.5;
`;

export const PanelContent = styled.div`
  padding: 1.5rem;
`;

export const PanelImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: block;
`;

export const PanelStats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StatItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #718096;
  font-weight: 500;
`;

export const PanelFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #edf2f7;
  text-align: center;
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #4c6fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(76, 111, 255, 0.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 111, 255, 0.2);
  }
`;
