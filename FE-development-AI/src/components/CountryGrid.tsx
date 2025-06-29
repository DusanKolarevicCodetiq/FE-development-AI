import React from "react";
import { Country } from "../types";
import { CountryCard } from "./CountryCard";
import { GridContainer, GridWrapper } from "./CountryGrid.styles";

interface CountryGridProps {
  countries: Country[];
  onCountryClick?: (country: Country) => void;
}

export const CountryGrid: React.FC<CountryGridProps> = ({
  countries,
  onCountryClick,
}) => {
  return (
    <GridWrapper>
      <GridContainer role="grid" aria-label="Countries grid">
        {countries.map((country, index) => (
          <div key={country.cca3} role="gridcell">
            <CountryCard
              country={country}
              onClick={onCountryClick}
              tabIndex={0}
            />
          </div>
        ))}
      </GridContainer>
    </GridWrapper>
  );
};
