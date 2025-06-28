import styled from "styled-components";
import { useGetCountriesQuery } from "../services/api";

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CountryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Flag = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const CountryName = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.2rem;
`;

const CountryInfo = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 0.9rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #e74c3c;
`;

export const CountryList = () => {
  const { data: countries, isLoading, error } = useGetCountriesQuery();

  if (isLoading) {
    return <LoadingMessage>Loading countries...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error loading countries. Please try again.</ErrorMessage>;
  }

  return (
    <CountryGrid>
      {countries?.map((country) => (
        <CountryCard key={country.cca3}>
          <Flag src={country.flags.png} alt={country.flags.alt || `${country.name.common} flag`} />
          <CountryName>{country.name.common}</CountryName>
          <CountryInfo><strong>Official Name:</strong> {country.name.official}</CountryInfo>
          <CountryInfo><strong>Region:</strong> {country.region}</CountryInfo>
          <CountryInfo><strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}</CountryInfo>
          <CountryInfo><strong>Population:</strong> {country.population.toLocaleString()}</CountryInfo>
          <CountryInfo><strong>Code:</strong> {country.cca3}</CountryInfo>
        </CountryCard>
      ))}
    </CountryGrid>
  );
}; 