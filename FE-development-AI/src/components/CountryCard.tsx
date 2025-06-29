import React from "react";
import { Country } from "../types";
import {
  Card,
  FlagContainer,
  Flag,
  CardContent,
  CountryName,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./CountryCard.styles";

interface CountryCardProps {
  country: Country;
  onClick?: (country: Country) => void;
  tabIndex?: number;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
  tabIndex = 0,
}) => {
  const handleClick = () => {
    onClick?.(country);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(country);
    }
  };

  const isInteractive = Boolean(onClick);

  return (
    <Card
      onClick={isInteractive ? handleClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      tabIndex={isInteractive ? tabIndex : undefined}
      role={isInteractive ? "button" : undefined}
      aria-label={
        isInteractive ? `View details for ${country.name.common}` : undefined
      }
      $interactive={isInteractive}
    >
      <FlagContainer>
        <Flag
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          loading="lazy"
        />
      </FlagContainer>

      <CardContent>
        <CountryName>{country.name.common}</CountryName>

        <InfoItem>
          <InfoLabel>Population:</InfoLabel>
          <InfoValue>{country.population.toLocaleString()}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>Region:</InfoLabel>
          <InfoValue>{country.region}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>Capital:</InfoLabel>
          <InfoValue>{country.capital?.join(", ") || "N/A"}</InfoValue>
        </InfoItem>
      </CardContent>
    </Card>
  );
};
