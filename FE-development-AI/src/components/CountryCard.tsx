import React, { useState } from "react";
import { Country } from "../types";
import * as S from "./CountryCard.styles";

export interface CountryCardProps {
  country: Country;
  onClick?: (country: Country) => void;
  className?: string;
  tabIndex?: number;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
  className,
  tabIndex = 0,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleClick = () => {
    if (onClick) {
      onClick(country);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
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

  const getCapitalDisplay = (): string => {
    if (!country.capital || country.capital.length === 0) {
      return "N/A";
    }
    if (country.capital.length === 1) {
      return country.capital[0];
    }
    return `${country.capital[0]} (+${country.capital.length - 1} more)`;
  };

  return (
    <S.Card
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      role="button"
      aria-label={`View details for ${country.name.common}`}
    >
      <S.FlagContainer>
        {imageError ? (
          <S.FlagPlaceholder>No flag available</S.FlagPlaceholder>
        ) : (
          <S.FlagImage
            src={country.flags.png}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </S.FlagContainer>

      <S.CardContent>
        <S.CountryName>{country.name.common}</S.CountryName>

        <S.InfoGrid>
          <S.InfoItem>
            <S.InfoLabel>Population</S.InfoLabel>
            <S.PopulationValue>
              {formatPopulation(country.population)}
            </S.PopulationValue>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoLabel>Region</S.InfoLabel>
            <S.InfoValue>{country.region}</S.InfoValue>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoLabel>Capital</S.InfoLabel>
            <S.InfoValue>{getCapitalDisplay()}</S.InfoValue>
          </S.InfoItem>
        </S.InfoGrid>
      </S.CardContent>
    </S.Card>
  );
};
