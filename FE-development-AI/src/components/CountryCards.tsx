import React from "react";
import { Country } from "../types";
import { CountryGrid } from "./CountryGrid";

interface CountryCardsProps {
  countries: Country[];
}

export const CountryCards: React.FC<CountryCardsProps> = ({ countries }) => {
  const handleCountryClick = (country: Country) => {
    // Optional: Handle country selection
    console.log("Selected country:", country.name.common);
  };

  return (
    <CountryGrid countries={countries} onCountryClick={handleCountryClick} />
  );
};
