import styled from 'styled-components';

export const PanelContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin: 10px;
    border-radius: 8px;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    align-items: flex-start;
  }
`;

export const PanelTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PanelActions = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const ActionButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' ? `
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
  ` : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `}
`;

export const PanelContent = styled.div`
  padding: 32px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const DetailSection = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e9ecef;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #667eea;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => props.status === 'active' ? `
    background: #d4edda;
    color: #155724;
  ` : props.status === 'pending' ? `
    background: #fff3cd;
    color: #856404;
  ` : `
    background: #f8d7da;
    color: #721c24;
  `}
`;

export const ProgressSection = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
`;

export const ProgressLabel = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const ProgressValue = styled.div`
  font-size: 12px;
  color: #999;
  text-align: right;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MetricCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const MetricIcon = styled.div`
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const MetricContent = styled.div`
  flex: 1;
`;

export const MetricTitle = styled.div`
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

export const MetricValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

export const MetricChange = styled.div<{ positive: boolean }>`
  font-size: 11px;
  color: ${props => props.positive ? '#28a745' : '#dc3545'};
`;

export const ActivitySection = styled.div`
  grid-column: 1 / -1;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }
`;

export const ActivityIcon = styled.div`
  font-size: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ActivityContent = styled.div`
  flex: 1;
`;

export const ActivityText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const ActivityUser = styled.div`
  font-size: 12px;
  color: #666;
`;

export const ActivityTime = styled.div`
  font-size: 11px;
  color: #999;
  text-align: right;
  flex-shrink: 0;
  min-width: 80px;
`; 