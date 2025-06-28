import type { Country } from "../types";
import {
  CardContainer,
  FlagImage,
  CardContent,
  CountryName,
  CountryDetails,
  DetailItem,
  DetailLabel,
  DetailValue,
} from "./CountryCard.styles";

interface CountryCardProps {
  country: Country;
  onClick?: (country: Country) => void;
}

export const CountryCard = ({ country, onClick }: CountryCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(country);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <CardContainer
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `View details for ${country.name.common}` : undefined}
    >
      <FlagImage
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
        loading="lazy"
      />
      <CardContent>
        <CountryName>{country.name.common}</CountryName>
        <CountryDetails>
          <DetailItem>
            <DetailLabel>Population:</DetailLabel>
            <DetailValue>{country.population.toLocaleString()}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Region:</DetailLabel>
            <DetailValue>{country.region}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Capital:</DetailLabel>
            <DetailValue>{country.capital?.join(", ") || "N/A"}</DetailValue>
          </DetailItem>
        </CountryDetails>
      </CardContent>
    </CardContainer>
  );
}; 