import React, { useState } from "react";
import { useGetCountriesQuery } from "../services/api";
import { CountryCards } from "./CountryCards";
import { CountryTable } from "./CountryTable";
import {
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  LoadingWrapper,
  ErrorWrapper,
} from "./CountryTabs.styles";

type TabType = "cards" | "table";

export const CountryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("cards");
  const { data: countries, isLoading, error } = useGetCountriesQuery();

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tab: TabType) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTab(tab);
    }
  };

  if (isLoading) {
    return (
      <LoadingWrapper>
        <div role="status" aria-label="Loading countries data">
          Loading countries...
        </div>
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper role="alert">
        <h2>Error Loading Countries</h2>
        <p>Failed to load countries data. Please try again later.</p>
      </ErrorWrapper>
    );
  }

  if (!countries || countries.length === 0) {
    return (
      <ErrorWrapper>
        <h2>No Data Available</h2>
        <p>No countries data found.</p>
      </ErrorWrapper>
    );
  }

  return (
    <TabsContainer>
      <TabList role="tablist" aria-label="Country view options">
        <Tab
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === "cards"}
          aria-controls="cards-panel"
          id="cards-tab"
          $active={activeTab === "cards"}
          onClick={() => handleTabChange("cards")}
          onKeyDown={(e) => handleKeyDown(e, "cards")}
        >
          Cards
        </Tab>
        <Tab
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === "table"}
          aria-controls="table-panel"
          id="table-tab"
          $active={activeTab === "table"}
          onClick={() => handleTabChange("table")}
          onKeyDown={(e) => handleKeyDown(e, "table")}
        >
          Table
        </Tab>
      </TabList>

      <TabPanel
        role="tabpanel"
        id="cards-panel"
        aria-labelledby="cards-tab"
        hidden={activeTab !== "cards"}
      >
        {activeTab === "cards" && <CountryCards countries={countries} />}
      </TabPanel>

      <TabPanel
        role="tabpanel"
        id="table-panel"
        aria-labelledby="table-tab"
        hidden={activeTab !== "table"}
      >
        {activeTab === "table" && <CountryTable countries={countries} />}
      </TabPanel>
    </TabsContainer>
  );
};
