import React, { useState } from 'react';
import {
  PanelContainer,
  PanelHeader,
  PanelTitle,
  PanelActions,
  ActionButton,
  PanelContent,
  DetailsGrid,
  DetailSection,
  SectionTitle,
  SectionContent,
  InfoRow,
  InfoLabel,
  InfoValue,
  StatusBadge,
  ProgressSection,
  ProgressBar,
  ProgressLabel,
  ProgressValue,
  MetricsGrid,
  MetricCard,
  MetricIcon,
  MetricContent,
  MetricTitle,
  MetricValue,
  MetricChange,
  ActivitySection,
  ActivityList,
  ActivityItem,
  ActivityIcon,
  ActivityContent,
  ActivityTime,
  ActivityText,
  ActivityUser
} from './PanelDetailsLayout.styles';

// Panel Details Layout Component
const PanelDetailsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PanelContainer>
      <PanelHeader>
        <PanelTitle>Project Dashboard</PanelTitle>
        <PanelActions>
          <ActionButton variant="secondary">Export</ActionButton>
          <ActionButton variant="primary">Edit Project</ActionButton>
        </PanelActions>
      </PanelHeader>

      <PanelContent>
        <DetailsGrid>
          {/* Project Information Section */}
          <DetailSection>
            <SectionTitle>Project Information</SectionTitle>
            <SectionContent>
              <InfoRow>
                <InfoLabel>Project Name</InfoLabel>
                <InfoValue>E-commerce Platform Redesign</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Status</InfoLabel>
                <StatusBadge status="active">Active</StatusBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Start Date</InfoLabel>
                <InfoValue>March 15, 2024</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>End Date</InfoLabel>
                <InfoValue>June 30, 2024</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Team Lead</InfoLabel>
                <InfoValue>Sarah Johnson</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Budget</InfoLabel>
                <InfoValue>$125,000</InfoValue>
              </InfoRow>
            </SectionContent>
          </DetailSection>

          {/* Progress Section */}
          <DetailSection>
            <SectionTitle>Progress Overview</SectionTitle>
            <SectionContent>
              <ProgressSection>
                <ProgressLabel>Overall Progress</ProgressLabel>
                <ProgressBar>
                  <div style={{ width: '65%', height: '100%', background: '#667eea', borderRadius: '4px' }}></div>
                </ProgressBar>
                <ProgressValue>65% Complete</ProgressValue>
              </ProgressSection>
              
              <ProgressSection>
                <ProgressLabel>Design Phase</ProgressLabel>
                <ProgressBar>
                  <div style={{ width: '90%', height: '100%', background: '#28a745', borderRadius: '4px' }}></div>
                </ProgressBar>
                <ProgressValue>90% Complete</ProgressValue>
              </ProgressSection>
              
              <ProgressSection>
                <ProgressLabel>Development</ProgressLabel>
                <ProgressBar>
                  <div style={{ width: '45%', height: '100%', background: '#ffc107', borderRadius: '4px' }}></div>
                </ProgressBar>
                <ProgressValue>45% Complete</ProgressValue>
              </ProgressSection>
              
              <ProgressSection>
                <ProgressLabel>Testing</ProgressLabel>
                <ProgressBar>
                  <div style={{ width: '20%', height: '100%', background: '#dc3545', borderRadius: '4px' }}></div>
                </ProgressBar>
                <ProgressValue>20% Complete</ProgressValue>
              </ProgressSection>
            </SectionContent>
          </DetailSection>

          {/* Key Metrics */}
          <DetailSection>
            <SectionTitle>Key Metrics</SectionTitle>
            <SectionContent>
              <MetricsGrid>
                <MetricCard>
                  <MetricIcon>📊</MetricIcon>
                  <MetricContent>
                    <MetricTitle>Tasks Completed</MetricTitle>
                    <MetricValue>127</MetricValue>
                    <MetricChange positive={true}>+12 this week</MetricChange>
                  </MetricContent>
                </MetricCard>
                
                <MetricCard>
                  <MetricIcon>⏱️</MetricIcon>
                  <MetricContent>
                    <MetricTitle>Hours Logged</MetricTitle>
                    <MetricValue>1,247</MetricValue>
                    <MetricChange positive={true}>+89 this week</MetricChange>
                  </MetricContent>
                </MetricCard>
                
                <MetricCard>
                  <MetricIcon>👥</MetricIcon>
                  <MetricContent>
                    <MetricTitle>Team Members</MetricTitle>
                    <MetricValue>8</MetricValue>
                    <MetricChange positive={false}>-1 this month</MetricChange>
                  </MetricContent>
                </MetricCard>
                
                <MetricCard>
                  <MetricIcon>💰</MetricIcon>
                  <MetricContent>
                    <MetricTitle>Budget Used</MetricTitle>
                    <MetricValue>$78,450</MetricValue>
                    <MetricChange positive={false}>62.8% of total</MetricChange>
                  </MetricContent>
                </MetricCard>
              </MetricsGrid>
            </SectionContent>
          </DetailSection>

          {/* Recent Activity */}
          <DetailSection>
            <SectionTitle>Recent Activity</SectionTitle>
            <SectionContent>
              <ActivityList>
                <ActivityItem>
                  <ActivityIcon>✅</ActivityIcon>
                  <ActivityContent>
                    <ActivityText>Task "Homepage Design" completed</ActivityText>
                    <ActivityUser>by Alex Chen</ActivityUser>
                  </ActivityContent>
                  <ActivityTime>2 hours ago</ActivityTime>
                </ActivityItem>
                
                <ActivityItem>
                  <ActivityIcon>📝</ActivityIcon>
                  <ActivityContent>
                    <ActivityText>New comment on "API Integration"</ActivityText>
                    <ActivityUser>by Sarah Johnson</ActivityUser>
                  </ActivityContent>
                  <ActivityTime>4 hours ago</ActivityTime>
                </ActivityItem>
                
                <ActivityItem>
                  <ActivityIcon>🔄</ActivityIcon>
                  <ActivityContent>
                    <ActivityText>Status updated to "In Review"</ActivityText>
                    <ActivityUser>by Mike Rodriguez</ActivityUser>
                  </ActivityContent>
                  <ActivityTime>6 hours ago</ActivityTime>
                </ActivityItem>
                
                <ActivityItem>
                  <ActivityIcon>📁</ActivityIcon>
                  <ActivityContent>
                    <ActivityText>New file uploaded: "design-mockups.zip"</ActivityText>
                    <ActivityUser>by Emma Wilson</ActivityUser>
                  </ActivityContent>
                  <ActivityTime>1 day ago</ActivityTime>
                </ActivityItem>
                
                <ActivityItem>
                  <ActivityIcon>👤</ActivityIcon>
                  <ActivityContent>
                    <ActivityText>New team member added: David Kim</ActivityText>
                    <ActivityUser>by Project Manager</ActivityUser>
                  </ActivityContent>
                  <ActivityTime>2 days ago</ActivityTime>
                </ActivityItem>
              </ActivityList>
            </SectionContent>
          </DetailSection>
        </DetailsGrid>
      </PanelContent>
    </PanelContainer>
  );
};

export default PanelDetailsLayout; 