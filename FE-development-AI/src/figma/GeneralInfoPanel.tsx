import React, { useState } from "react";
import * as S from "./GeneralInfoPanel.styles";

interface GeneralInfo {
  status: string;
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

interface GeneralInfoPanelProps {
  data?: GeneralInfo;
}

const defaultData: GeneralInfo = {
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

export const GeneralInfoPanel: React.FC<GeneralInfoPanelProps> = ({
  data = defaultData,
}) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(field);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const formatLatestRun = (latestRun: string) => {
    const parts = latestRun.split(" / ");
    if (parts.length === 2) {
      return {
        datetime: parts[0],
        status: parts[1],
      };
    }
    return { datetime: latestRun, status: null };
  };

  const latestRunData = formatLatestRun(data.latestRun);

  const CopyIconSvg = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  return (
    <S.Container>
      <S.Title>General</S.Title>

      <S.InfoGrid>
        <S.InfoRow>
          <S.Label>Status</S.Label>
          <S.StatusBadge>{data.status}</S.StatusBadge>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Schedule ID</S.Label>
          <S.ValueWithIcon>
            <S.Value type="id">{data.scheduleId}</S.Value>
            <S.CopyIcon
              onClick={() =>
                handleCopyToClipboard(data.scheduleId, "scheduleId")
              }
              title={
                copySuccess === "scheduleId" ? "Copied!" : "Copy to clipboard"
              }
            >
              <CopyIconSvg />
            </S.CopyIcon>
          </S.ValueWithIcon>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Interval</S.Label>
          <S.Value type="default">{data.interval}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Start date</S.Label>
          <S.Value type="default">{data.startDate}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Next run</S.Label>
          <S.Value type="default">{data.nextRun}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Latest run</S.Label>
          <S.Value type="default">
            {latestRunData.datetime}
            {latestRunData.status && (
              <>
                {" / "}
                <S.SuccessStatus>{latestRunData.status}</S.SuccessStatus>
              </>
            )}
          </S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Author</S.Label>
          <S.Value type="default">{data.author}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Created</S.Label>
          <S.Value type="default">{data.created}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Cost summary</S.Label>
          <S.Value type="currency">{data.costSummary}</S.Value>
        </S.InfoRow>
      </S.InfoGrid>

      <S.UpdateInfo>
        <S.UpdateText>Last updated {data.lastUpdated}</S.UpdateText>
      </S.UpdateInfo>
    </S.Container>
  );
};

export default GeneralInfoPanel;
