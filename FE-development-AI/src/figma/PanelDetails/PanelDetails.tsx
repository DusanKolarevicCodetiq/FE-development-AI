import React from 'react';
import { 
  PanelContainer,
  PanelHeader,
  PanelTitle,
  PanelContent,
  PanelImage,
  PanelStats,
  StatItem,
  StatValue,
  StatLabel,
  PanelFooter,
  ViewAllButton
} from './PanelDetails.styles';
import panelImage from '../../assets/PanelDetails.png';

const PanelDetails: React.FC = () => {
  return (
    <PanelContainer>
      <PanelHeader>
        <PanelTitle>Today's Activity</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <PanelImage 
          src={panelImage} 
          alt="Today's activity statistics and charts" 
        />
        <PanelStats>
          <StatItem>
            <StatValue>24.5K</StatValue>
            <StatLabel>Visitors</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>1.2K</StatValue>
            <StatLabel>Orders</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>$12.5K</StatValue>
            <StatLabel>Revenue</StatLabel>
          </StatItem>
        </PanelStats>
      </PanelContent>
      <PanelFooter>
        <ViewAllButton>View All Activity</ViewAllButton>
      </PanelFooter>
    </PanelContainer>
  );
};

export default PanelDetails;
