// src/components/CountryDashboard.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Country } from "../types";

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  flex: 1;
  min-width: 200px;
`;

const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
  overflow-y: auto;
`;

const CountryItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
`;

const ErrorText = styled.p`
  color: red;
`;

const CountryDashboard: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <DashboardContainer>
      <h2>Country Dashboard</h2>

      {loading && <p>Loading...</p>}
      {error && <ErrorText>Error: {error}</ErrorText>}

      {!loading && !error && (
        <>
          <FilterSection>
            <label htmlFor="region">Filter by region:</label>
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

            <Input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </FilterSection>

          <CountryList>
            {filteredCountries.map((country) => (
              <CountryItem key={country.cca3}>
                <Flag
                  src={country.flags?.svg}
                  alt={`Flag of ${country.name.common}`}
                />
                <div>
                  <strong>{country.name.common}</strong> – {country.region},
                  Pop: {country.population.toLocaleString()}
                </div>
              </CountryItem>
            ))}
          </CountryList>
        </>
      )}
    </DashboardContainer>
  );
};

export default CountryDashboard;
// Replaces class-based lifecycle with useEffect

// Handles input changes with controlled state

// Uses styled-components for layout and style

// Fully responsive and mobile-friendly with flex-wrap and min-width

// No inline styles left
