import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  DetailsGrid,
  DetailRow,
  Label,
  Value,
  StatusBadge,
  CopyButton,
  ScheduleIdContainer,
  CostContainer,
  CostValue,
  LastUpdated,
} from "./ScheduleDetails.styles";

interface ScheduleData {
  status: "Active" | "Inactive" | "Pending";
  scheduleId: string;
  interval: string;
  startDate: string;
  nextRun: string;
  latestRun: string;
  author: string;
  created: string;
  costSummary: string;
  lastUpdated: string;
}

interface ScheduleDetailsProps {
  data?: ScheduleData;
  onCopyScheduleId?: (id: string) => void;
}

const defaultData: ScheduleData = {
  status: "Active",
  scheduleId: "ded2b8ac-e55e-44ef-999b-eb75fef81294",
  interval: "Daily at 15:00",
  startDate: "2023-06-11",
  nextRun: "2023-09-13 15:00",
  latestRun: "2023-09-12 15:33 / Successful",
  author: "Mladenovic, Dusan",
  created: "2023-09-13 15:00",
  costSummary: "524.48 €",
  lastUpdated: "2024-01-18 10:00",
};

export const ScheduleDetails: React.FC<ScheduleDetailsProps> = ({
  data = defaultData,
  onCopyScheduleId,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyScheduleId = async () => {
    try {
      await navigator.clipboard.writeText(data.scheduleId);
      setCopySuccess(true);
      onCopyScheduleId?.(data.scheduleId);

      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy schedule ID:", err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "#10b981";
      case "inactive":
        return "#ef4444";
      case "pending":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  const parseLatestRun = (latestRun: string) => {
    const parts = latestRun.split(" / ");
    return {
      datetime: parts[0] || "",
      status: parts[1] || "",
    };
  };

  const latestRunInfo = parseLatestRun(data.latestRun);

  return (
    <Container>
      <Header>
        <Title>General</Title>
      </Header>

      <DetailsGrid>
        <DetailRow>
          <Label>Status</Label>
          <Value>
            <StatusBadge $color={getStatusColor(data.status)}>
              {data.status}
            </StatusBadge>
          </Value>
        </DetailRow>

        <DetailRow>
          <Label>Schedule ID</Label>
          <Value>
            <ScheduleIdContainer>
              <span>{data.scheduleId}</span>
              <CopyButton
                onClick={handleCopyScheduleId}
                title={copySuccess ? "Copied!" : "Copy Schedule ID"}
                $success={copySuccess}
              >
                {copySuccess ? "✓" : "📋"}
              </CopyButton>
            </ScheduleIdContainer>
          </Value>
        </DetailRow>

        <DetailRow>
          <Label>Interval</Label>
          <Value>{data.interval}</Value>
        </DetailRow>

        <DetailRow>
          <Label>Start date</Label>
          <Value>{data.startDate}</Value>
        </DetailRow>

        <DetailRow>
          <Label>Next run</Label>
          <Value>{data.nextRun}</Value>
        </DetailRow>

        <DetailRow>
          <Label>Latest run</Label>
          <Value>
            <div>
              <div>{latestRunInfo.datetime}</div>
              {latestRunInfo.status && (
                <StatusBadge
                  $color={
                    latestRunInfo.status.toLowerCase() === "successful"
                      ? "#10b981"
                      : "#ef4444"
                  }
                  $small
                >
                  {latestRunInfo.status}
                </StatusBadge>
              )}
            </div>
          </Value>
        </DetailRow>

        <DetailRow>
          <Label>Author</Label>
          <Value>{data.author}</Value>
        </DetailRow>

        <DetailRow>
          <Label>Created</Label>
          <Value>{data.created}</Value>
        </DetailRow>

        <DetailRow>
          <Label>Cost summary</Label>
          <Value>
            <CostContainer>
              <CostValue>{data.costSummary}</CostValue>
              <LastUpdated>Last updated {data.lastUpdated}</LastUpdated>
            </CostContainer>
          </Value>
        </DetailRow>
      </DetailsGrid>
    </Container>
  );
};
