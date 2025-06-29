import React, { useState, useEffect, useMemo } from "react";
import { Country } from "../types";
import {
  Container,
  Title,
  FiltersContainer,
  FilterGroup,
  Label,
  Select,
  SearchInput,
  CountryList,
  CountryItem,
  Flag,
  CountryInfo,
  CountryName,
  CountryDetails,
  LoadingMessage,
  ErrorMessage,
} from "./styles";

export const CountryDashboard: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesRegion =
        selectedRegion === "all" || country.region === selectedRegion;
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

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error: {error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Country Dashboard</Title>

      <FiltersContainer>
        <FilterGroup>
          <Label htmlFor="region">Filter by region:</Label>
          <Select
            id="region"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <SearchInput
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </FilterGroup>
      </FiltersContainer>

      <CountryList>
        {filteredCountries.map((country) => (
          <CountryItem key={country.cca3}>
            <Flag
              src={country.flags?.svg || country.flags?.png}
              alt={`Flag of ${country.name.common}`}
              loading="lazy"
            />
            <CountryInfo>
              <CountryName>{country.name.common}</CountryName>
              <CountryDetails>
                {country.region} • Pop: {country.population.toLocaleString()}
              </CountryDetails>
            </CountryInfo>
          </CountryItem>
        ))}
      </CountryList>
    </Container>
  );
};
