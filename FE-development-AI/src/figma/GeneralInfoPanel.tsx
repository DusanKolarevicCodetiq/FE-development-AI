import React from "react";
import styled from "styled-components";

const Panel = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

const Label = styled.span`
  font-weight: 500;
  color: #555;
  flex: 1;
  min-width: 150px;
`;

const Value = styled.span<{ status?: boolean }>`
  color: ${({ status }) => (status ? "green" : "inherit")};
  word-break: break-word;
  text-align: right;
  flex: 1;
`;

const FooterNote = styled.div`
  font-size: 0.75rem;
  color: #aaa;
  text-align: right;
  margin-top: 1.5rem;
`;

const GeneralInfoPanel: React.FC = () => {
  return (
    <Panel>
      <Title>General</Title>
      <Row>
        <Label>Status</Label>
        <Value status>Active</Value>
      </Row>
      <Row>
        <Label>Schedule ID</Label>
        <Value>ded2b8ac-e55e-44ef-999b-eb75fef81294</Value>
      </Row>
      <Row>
        <Label>Interval</Label>
        <Value>Daily at 15:00</Value>
      </Row>
      <Row>
        <Label>Start date</Label>
        <Value>2023-06-11</Value>
      </Row>
      <Row>
        <Label>Next run</Label>
        <Value>2023-09-13 15:00</Value>
      </Row>
      <Row>
        <Label>Latest run</Label>
        <Value>2023-09-12 15:33 / Successful</Value>
      </Row>
      <Row>
        <Label>Author</Label>
        <Value>Mladenovic, Dusan</Value>
      </Row>
      <Row>
        <Label>Created</Label>
        <Value>2023-09-13 15:00</Value>
      </Row>
      <Row>
        <Label>Cost summary</Label>
        <Value>524.48 €</Value>
      </Row>
      <FooterNote>Last updated 2024-01-15 10:00</FooterNote>
    </Panel>
  );
};

export default GeneralInfoPanel;
