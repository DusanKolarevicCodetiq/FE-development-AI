import { useState, useMemo, useCallback } from "react";
import type { Country } from "../types";
import { useGetCountriesQuery } from "../services/api";
import {
  ListContainer,
  ListHeader,
  ListTitle,
  SearchContainer,
  SearchInput,
  FilterContainer,
  FilterButton,
  CountryList,
  CountryListItem,
  CountryFlag,
  CountryContent,
  CountryName,
  CountryInfo,
  CountryRegion,
  CountryPopulation,
  CountryCapital,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  ErrorContainer,
  ErrorText,
  EmptyState,
  EmptyStateText,
  EmptyStateSubtext,
} from "./RefactoredCountryList.styles";

type SortOption = "name" | "population" | "region";
type FilterOption = "all" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "name", label: "Name" },
  { value: "population", label: "Population" },
  { value: "region", label: "Region" },
];

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All Regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const RefactoredCountryList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const { data: countries = [], isLoading, error } = useGetCountriesQuery();

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === "all" || country.region === filterBy;

      return matchesSearch && matchesFilter;
    });

    // Sort countries
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case "name":
          aValue = a.name.common.toLowerCase();
          bValue = b.name.common.toLowerCase();
          break;
        case "population":
          aValue = a.population;
          bValue = b.population;
          break;
        case "region":
          aValue = a.region.toLowerCase();
          bValue = b.region.toLowerCase();
          break;
        default:
          aValue = a.name.common.toLowerCase();
          bValue = b.name.common.toLowerCase();
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === "asc" 
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });

    return filtered;
  }, [countries, searchTerm, sortBy, filterBy, sortDirection]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSortChange = useCallback((newSortBy: SortOption) => {
    if (sortBy === newSortBy) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setSortDirection("asc");
    }
  }, [sortBy]);

  const handleFilterChange = useCallback((newFilter: FilterOption) => {
    setFilterBy(newFilter);
  }, []);

  const formatPopulation = useCallback((population: number) => {
    return population.toLocaleString();
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>Loading countries...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>Error loading countries. Please try again.</ErrorText>
      </ErrorContainer>
    );
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>Country List (Refactored)</ListTitle>
      </ListHeader>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search countries by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search countries"
        />
      </SearchContainer>

      <FilterContainer>
        <div>
          <span>Sort by: </span>
          {SORT_OPTIONS.map((option) => (
            <FilterButton
              key={option.value}
              $active={sortBy === option.value}
              onClick={() => handleSortChange(option.value)}
              aria-label={`Sort by ${option.label}`}
            >
              {option.label}
              {sortBy === option.value && (
                <span> {sortDirection === "asc" ? "↑" : "↓"}</span>
              )}
            </FilterButton>
          ))}
        </div>
        <div>
          <span>Filter by: </span>
          {FILTER_OPTIONS.map((option) => (
            <FilterButton
              key={option.value}
              $active={filterBy === option.value}
              onClick={() => handleFilterChange(option.value)}
              aria-label={`Filter by ${option.label}`}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>
      </FilterContainer>

      <CountryList>
        {filteredAndSortedCountries.length === 0 ? (
          <EmptyState>
            <EmptyStateText>No countries found</EmptyStateText>
            <EmptyStateSubtext>
              Try adjusting your search or filter criteria
            </EmptyStateSubtext>
          </EmptyState>
        ) : (
          filteredAndSortedCountries.map((country) => (
            <CountryListItem key={country.cca3}>
              <CountryFlag
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                loading="lazy"
              />
              <CountryContent>
                <CountryName>{country.name.common}</CountryName>
                <CountryInfo>
                  <CountryRegion>{country.region}</CountryRegion>
                  <CountryPopulation>
                    Population: {formatPopulation(country.population)}
                  </CountryPopulation>
                  {country.capital && (
                    <CountryCapital>
                      Capital: {country.capital.join(", ")}
                    </CountryCapital>
                  )}
                </CountryInfo>
              </CountryContent>
            </CountryListItem>
          ))
        )}
      </CountryList>
    </ListContainer>
  );
}; 