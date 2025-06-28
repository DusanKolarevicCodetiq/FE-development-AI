import { useState, useMemo } from "react";
import type { Country } from "../types";
import { useGetCountriesQuery } from "../services/api";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  ControlsContainer,
  FilterGroup,
  FilterLabel,
  RegionSelect,
  SearchInput,
  CountryList,
  CountryItem,
  CountryFlag,
  CountryInfo,
  CountryName,
  CountryDetails,
  LoadingMessage,
  ErrorMessage,
} from "./CountryDashboardRefactored.styles";

const REGIONS = [
  { value: "all", label: "All Regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const CountryDashboardRefactored = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: countries = [], isLoading, error } = useGetCountriesQuery();

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [countries, selectedRegion, searchTerm]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const formatPopulation = (population: number) => {
    return population.toLocaleString();
  };

  if (isLoading) {
    return <LoadingMessage>Loading countries...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error loading countries. Please try again.</ErrorMessage>;
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Country Dashboard (Refactored)</DashboardTitle>
      </DashboardHeader>

      <ControlsContainer>
        <FilterGroup>
          <FilterLabel htmlFor="region">Filter by region:</FilterLabel>
          <RegionSelect
            id="region"
            value={selectedRegion}
            onChange={handleRegionChange}
            aria-label="Select region to filter countries"
          >
            {REGIONS.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </RegionSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="search">Search by name:</FilterLabel>
          <SearchInput
            id="search"
            type="text"
            placeholder="Enter country name..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search countries by name"
          />
        </FilterGroup>
      </ControlsContainer>

      <CountryList>
        {filteredCountries.length === 0 ? (
          <CountryItem>
            <CountryInfo>
              <CountryName>No countries found</CountryName>
              <CountryDetails>
                Try adjusting your search or filter criteria
              </CountryDetails>
            </CountryInfo>
          </CountryItem>
        ) : (
          filteredCountries.map((country) => (
            <CountryItem key={country.cca3}>
              <CountryFlag
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                loading="lazy"
              />
              <CountryInfo>
                <CountryName>{country.name.common}</CountryName>
                <CountryDetails>
                  {country.region} • Population: {formatPopulation(country.population)}
                  {country.capital && ` • Capital: ${country.capital.join(", ")}`}
                </CountryDetails>
              </CountryInfo>
            </CountryItem>
          ))
        )}
      </CountryList>
    </DashboardContainer>
  );
}; 