import React, { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    svg: string;
  };
  capital?: string[];
}

type Region = "all" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

export const CountryDashboard: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Region>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value as Region);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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

  const formatPopulation = (population: number): string => {
    return population.toLocaleString();
  };

  if (loading) {
    return (
      <S.Container>
        <S.Title>Country Dashboard</S.Title>
        <S.LoadingMessage>Loading...</S.LoadingMessage>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.Title>Country Dashboard</S.Title>
        <S.ErrorMessage>Error: {error}</S.ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Country Dashboard</S.Title>

      <S.FiltersContainer>
        <S.FilterGroup>
          <S.Label htmlFor="region">Filter by region:</S.Label>
          <S.Select
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
          </S.Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="search">Search by name:</S.Label>
          <S.SearchInput
            id="search"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </S.FilterGroup>
      </S.FiltersContainer>

      {filteredCountries.length === 0 ? (
        <S.EmptyState>
          <S.EmptyStateText>
            No countries found matching your criteria.
          </S.EmptyStateText>
        </S.EmptyState>
      ) : (
        <S.CountriesList>
          {filteredCountries.map((country) => (
            <S.CountryItem key={country.cca3}>
              <S.FlagImage
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                loading="lazy"
              />
              <S.CountryInfo>
                <S.CountryName>{country.name.common}</S.CountryName>
                <S.CountryDetails>
                  {country.region}, Pop: {formatPopulation(country.population)}
                </S.CountryDetails>
              </S.CountryInfo>
            </S.CountryItem>
          ))}
        </S.CountriesList>
      )}
    </S.Container>
  );
};

// React Hooks Migration:

// useState for state management (countries, selectedRegion, searchTerm, loading, error)
// useEffect for data fetching lifecycle
// useMemo for optimized filtering performance

// TypeScript Integration:

// Proper type definitions for Country interface
// Type-safe Region union type
// Typed event handlers and state

// Styled Components:

// Complete replacement of inline styles
// Responsive design with mobile-first approach
// Consistent design system with proper spacing and colors
// Custom scrollbars and hover effects

// 🎨 Design Improvements:
// Layout & Structure:

// Clean, centered container with max-width
// Proper semantic HTML structure
// Flexible filter controls that stack on mobile
// Scrollable country list with fixed height

// Responsive Design:

// Desktop: Side-by-side filters, optimal spacing
// Tablet: Slightly reduced spacing and font sizes
// Mobile: Stacked filters, compact country cards

// User Experience:

// Better loading and error states
// Empty state handling
// Lazy loading for flag images
// Smooth hover animations
// Accessible form controls with proper labels

// 🚀 Performance Optimizations:

// useMemo prevents unnecessary re-filtering
// async/await for cleaner promise handling
// Proper error handling with HTTP status checks
// Lazy loading for images

// 📱 Mobile Responsiveness:

// Filters stack vertically on small screens
// Country items reorganize content on mobile
// Optimized touch targets and spacing
// Readable typography across all screen sizes

// The refactored component maintains the exact same functionality while providing a much cleaner, more maintainable, and responsive codebase using modern React patterns! 🎉
