import { useState } from "react";
import { useGetCountriesQuery } from "../services/api";
import { CountryCard } from "./CountryCard";
import { CountryTable } from "./CountryTable";
import {
  TabContainer,
  TabNav,
  TabButton,
  StateMessage,
  ErrorMessage,
  CardGrid,
} from "./CountryTabs.styles";

// Cards View Component
const CardsView = ({ countries }: { countries: any[] }) => (
  <CardGrid>
    {countries.map((country) => (
      <CountryCard key={country.cca3} country={country} />
    ))}
  </CardGrid>
);

// Main Component
export const CountryTabs = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'table'>('cards');
  const { data: countries, isLoading, error } = useGetCountriesQuery();

  if (isLoading) {
    return <StateMessage>Loading countries...</StateMessage>;
  }

  if (error) {
    return <ErrorMessage>Error loading countries. Please try again.</ErrorMessage>;
  }

  return (
    <TabContainer>
      <TabNav role="tablist" aria-label="Country view options">
        <TabButton
          role="tab"
          aria-selected={activeTab === 'cards'}
          aria-controls="cards-panel"
          id="cards-tab"
          $active={activeTab === 'cards'}
          onClick={() => setActiveTab('cards')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveTab('cards');
            }
          }}
        >
          Cards
        </TabButton>
        <TabButton
          role="tab"
          aria-selected={activeTab === 'table'}
          aria-controls="table-panel"
          id="table-tab"
          $active={activeTab === 'table'}
          onClick={() => setActiveTab('table')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveTab('table');
            }
          }}
        >
          Table
        </TabButton>
      </TabNav>

      <div
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
      >
        {activeTab === 'cards' ? (
          <CardsView countries={countries || []} />
        ) : (
          <CountryTable countries={countries || []} />
        )}
      </div>
    </TabContainer>
  );
}; 