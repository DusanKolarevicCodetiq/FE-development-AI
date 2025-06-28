// src/components/CountryCard.tsx

import React from "react";
import type { Country } from "../types";
import {
  CardContainer,
  FlagImage,
  CardContent,
  CountryName,
  InfoText,
} from "./CountryCard.styles";

type CountryCardProps = {
  country: Country;
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <CardContainer
      role="button"
      tabIndex={0}
      aria-label={`Details about ${country.name.common}`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          // Optional: add focus/interaction handler
        }
      }}
    >
      <FlagImage
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
      />
      <CardContent>
        <CountryName>{country.name.common}</CountryName>
        <InfoText>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </InfoText>
        <InfoText>
          <strong>Region:</strong> {country.region}
        </InfoText>
        <InfoText>
          <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
        </InfoText>
      </CardContent>
    </CardContainer>
  );
};

export default CountryCard;
