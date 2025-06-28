import React, { useState } from "react";
import { useGetCountriesQuery } from "../services/api";
import { Country } from "../types";
import { CountryCard } from "./CountryCard";
import { CountryTable } from "./CountryTable";
import * as S from "./CountryTabs.styles";

// Component
type TabType = "cards" | "table";

const ITEMS_PER_PAGE = 20;

export const CountryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("cards");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: countries, error, isLoading } = useGetCountriesQuery();

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination when switching tabs
  };

  const handleKeyDown = (event: React.KeyboardEvent, tab: TabType) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleTabChange(tab);
    }
  };

  // Pagination logic
  const totalPages = countries
    ? Math.ceil(countries.length / ITEMS_PER_PAGE)
    : 0;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = countries?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <S.PaginationContainer>
        <S.PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </S.PaginationButton>

        {startPage > 1 && (
          <>
            <S.PaginationButton onClick={() => handlePageChange(1)}>
              1
            </S.PaginationButton>
            {startPage > 2 && <span>...</span>}
          </>
        )}

        {pageNumbers.map((page) => (
          <S.PaginationButton
            key={page}
            isActive={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </S.PaginationButton>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span>...</span>}
            <S.PaginationButton onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </S.PaginationButton>
          </>
        )}

        <S.PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </S.PaginationButton>

        <S.PaginationInfo>
          Page {currentPage} of {totalPages} ({countries?.length} countries)
        </S.PaginationInfo>
      </S.PaginationContainer>
    );
  };

  const handleCountryClick = (country: Country) => {
    // Handle country selection - could open a modal, navigate to detail page, etc.
    console.log("Selected country:", country.name.common);
  };

  const renderCardsView = () => (
    <>
      <S.CardsGrid>
        {currentItems?.map((country: Country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            onClick={handleCountryClick}
          />
        ))}
      </S.CardsGrid>
      {renderPagination()}
    </>
  );

  const renderTableView = () => (
    <CountryTable
      countries={countries || []}
      onRowClick={handleCountryClick}
      itemsPerPage={10}
    />
  );

  if (isLoading) {
    return (
      <S.Container>
        <S.LoadingContainer>Loading countries...</S.LoadingContainer>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.ErrorContainer>
          Error loading countries. Please try again later.
        </S.ErrorContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.TabsContainer>
        <S.TabsList>
          <S.TabButton
            isActive={activeTab === "cards"}
            onClick={() => handleTabChange("cards")}
            onKeyDown={(e) => handleKeyDown(e, "cards")}
            role="tab"
            aria-selected={activeTab === "cards"}
            aria-controls="cards-panel"
          >
            Cards
          </S.TabButton>
          <S.TabButton
            isActive={activeTab === "table"}
            onClick={() => handleTabChange("table")}
            onKeyDown={(e) => handleKeyDown(e, "table")}
            role="tab"
            aria-selected={activeTab === "table"}
            aria-controls="table-panel"
          >
            Table
          </S.TabButton>
        </S.TabsList>
      </S.TabsContainer>

      <div
        id="cards-panel"
        role="tabpanel"
        aria-labelledby="cards-tab"
        hidden={activeTab !== "cards"}
      >
        {activeTab === "cards" && renderCardsView()}
      </div>

      <div
        id="table-panel"
        role="tabpanel"
        aria-labelledby="table-tab"
        hidden={activeTab !== "table"}
      >
        {activeTab === "table" && renderTableView()}
      </div>
    </S.Container>
  );
};
