import React, { useState } from "react";
import { Country } from "../types";
import * as S from "./CountryTable.styles";

export interface CountryTableProps {
  countries: Country[];
  onRowClick?: (country: Country) => void;
  itemsPerPage?: number;
  className?: string;
}

export const CountryTable: React.FC<CountryTableProps> = ({
  countries,
  onRowClick,
  itemsPerPage = 10,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Pagination logic
  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = countries.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowClick = (country: Country) => {
    if (onRowClick) {
      onRowClick(country);
    }
  };

  const handleRowKeyDown = (event: React.KeyboardEvent, country: Country) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRowClick(country);
    }
  };

  const handleImageError = (countryCode: string) => {
    setImageErrors((prev) => new Set(prev).add(countryCode));
  };

  const formatPopulation = (population: number): string => {
    if (population >= 1000000000) {
      return `${(population / 1000000000).toFixed(1)}B`;
    } else if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)}M`;
    } else if (population >= 1000) {
      return `${(population / 1000).toFixed(0)}K`;
    } else {
      return population.toLocaleString();
    }
  };

  const getCapitalDisplay = (capitals?: string[]): string => {
    if (!capitals || capitals.length === 0) {
      return "N/A";
    }
    if (capitals.length === 1) {
      return capitals[0];
    }
    return `${capitals[0]} (+${capitals.length - 1})`;
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
          aria-label="Previous page"
        >
          ← Previous
        </S.PaginationButton>

        {startPage > 1 && (
          <>
            <S.PaginationButton onClick={() => handlePageChange(1)}>
              1
            </S.PaginationButton>
            {startPage > 2 && <S.PaginationEllipsis>...</S.PaginationEllipsis>}
          </>
        )}

        {pageNumbers.map((page) => (
          <S.PaginationButton
            key={page}
            isActive={page === currentPage}
            onClick={() => handlePageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </S.PaginationButton>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <S.PaginationEllipsis>...</S.PaginationEllipsis>
            )}
            <S.PaginationButton onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </S.PaginationButton>
          </>
        )}

        <S.PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next →
        </S.PaginationButton>

        <S.PaginationInfo>
          Showing {startIndex + 1}-{Math.min(endIndex, countries.length)} of{" "}
          {countries.length} countries
        </S.PaginationInfo>
      </S.PaginationContainer>
    );
  };

  if (countries.length === 0) {
    return (
      <S.TableWrapper className={className}>
        <S.EmptyState>
          <S.EmptyStateIcon>🌍</S.EmptyStateIcon>
          <S.EmptyStateText>No countries found</S.EmptyStateText>
        </S.EmptyState>
      </S.TableWrapper>
    );
  }

  return (
    <S.TableWrapper className={className}>
      <S.TableContainer>
        <S.Table role="table" aria-label="Countries table">
          <S.TableHead>
            <tr>
              <S.TableHeader scope="col">Flag</S.TableHeader>
              <S.TableHeader scope="col">Country</S.TableHeader>
              <S.TableHeader scope="col">Capital</S.TableHeader>
              <S.MobileHiddenHeader scope="col">Region</S.MobileHiddenHeader>
              <S.TableHeader scope="col">Population</S.TableHeader>
            </tr>
          </S.TableHead>
          <S.TableBody>
            {currentItems.map((country) => (
              <S.TableRow
                key={country.cca3}
                onClick={() => handleRowClick(country)}
                onKeyDown={(e) => handleRowKeyDown(e, country)}
                tabIndex={0}
                role="row"
                aria-label={`${country.name.common} details`}
              >
                <S.FlagCell role="cell">
                  {imageErrors.has(country.cca3) ? (
                    <S.FlagPlaceholder title="Flag not available">
                      🏳️
                    </S.FlagPlaceholder>
                  ) : (
                    <S.FlagImage
                      src={country.flags.png}
                      alt={
                        country.flags.alt || `Flag of ${country.name.common}`
                      }
                      onError={() => handleImageError(country.cca3)}
                      loading="lazy"
                    />
                  )}
                </S.FlagCell>
                <S.NameCell role="cell">{country.name.common}</S.NameCell>
                <S.CapitalCell role="cell">
                  {getCapitalDisplay(country.capital)}
                </S.CapitalCell>
                <S.MobileHiddenCell role="cell">
                  {country.region}
                </S.MobileHiddenCell>
                <S.PopulationCell role="cell">
                  {formatPopulation(country.population)}
                </S.PopulationCell>
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableContainer>
      {renderPagination()}
    </S.TableWrapper>
  );
};
