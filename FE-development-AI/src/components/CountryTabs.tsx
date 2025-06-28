// src/components/CountryTabs.tsx

import React, { useState } from "react";
import { useGetCountriesQuery } from "../services/api";
import type { Country } from "../types";
import {
  Container,
  Tabs,
  TabButton,
  Content,
  CardGrid,
} from "./CountryTabs.styles";
import CountryCard1 from "./CountryCard";
import CountryTable from "./CountryTable";

const CountryTabs: React.FC = () => {
  const [tab, setTab] = useState<"cards" | "table">("cards");
  const { data, isLoading, error } = useGetCountriesQuery();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    tabName: "cards" | "table"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      setTab(tabName);
    }
  };

  return (
    <Container>
      <Tabs role="tablist">
        <TabButton
          role="tab"
          aria-selected={tab === "cards"}
          tabIndex={0}
          active={tab === "cards"}
          onClick={() => setTab("cards")}
          onKeyDown={(e) => handleKeyDown(e, "cards")}
        >
          Cards
        </TabButton>
        <TabButton
          role="tab"
          aria-selected={tab === "table"}
          tabIndex={0}
          active={tab === "table"}
          onClick={() => setTab("table")}
          onKeyDown={(e) => handleKeyDown(e, "table")}
        >
          Table
        </TabButton>
      </Tabs>

      <Content>
        {isLoading && <p>Loading countries...</p>}
        {error && <p>Failed to load countries.</p>}

        {!isLoading && !error && data && tab === "cards" && (
          <CardGrid>
            {data.map((country) => (
              <CountryCard1 key={country.cca3} country={country} />
            ))}
          </CardGrid>
        )}

        {!isLoading && !error && data && tab === "table" && (
          <CountryTable countries={data} />
        )}
      </Content>
    </Container>
  );
};

export default CountryTabs;
