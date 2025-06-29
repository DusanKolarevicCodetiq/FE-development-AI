import { useState } from 'react';
import { useGetCountriesQuery } from '../../services/api';
import { CardsView } from './CardsView';
import { TableView } from './TableView';
import {
  TabsContainer,
  TabsHeader,
  TabButton,
  TabContent,
  LoadingMessage,
  ErrorMessage,
} from './CountryTabs.styles';

export function CountryTabs() {
  const [activeTab, setActiveTab] = useState<'cards' | 'table'>('cards');
  const { data: countries = [], isLoading, error } = useGetCountriesQuery();

  if (isLoading) {
    return <LoadingMessage>Loading countries...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error loading countries. Please try again later.</ErrorMessage>;
  }

  return (
    <TabsContainer>
      <TabsHeader role="tablist" aria-label="Country display options">
        <TabButton
          role="tab"
          aria-selected={activeTab === 'cards'}
          $isActive={activeTab === 'cards'}
          onClick={() => setActiveTab('cards')}
          id="cards-tab"
          aria-controls="cards-panel"
        >
          Cards
        </TabButton>
        <TabButton
          role="tab"
          aria-selected={activeTab === 'table'}
          $isActive={activeTab === 'table'}
          onClick={() => setActiveTab('table')}
          id="table-tab"
          aria-controls="table-panel"
        >
          Table
        </TabButton>
      </TabsHeader>
      <TabContent>
        {activeTab === 'cards' ? (
          <div id="cards-panel" role="tabpanel" aria-labelledby="cards-tab" tabIndex={0}>
            <CardsView countries={countries} />
          </div>
        ) : (
          <div id="table-panel" role="tabpanel" aria-labelledby="table-tab" tabIndex={0}>
            <TableView countries={countries} />
          </div>
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default CountryTabs;
