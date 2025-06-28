// components/CountriesList.tsx
import { useGetCountriesQuery } from "../services/api";

export function CountriesList() {
  const { data: countries, error, isLoading } = useGetCountriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading countries</div>;

  return (
    <div>
      {countries?.map((country) => (
        <div key={country.cca3}>
          <h3>{country.name.common}</h3>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Capital: {country.capital?.join(", ")}</p>
          <img src={country.flags.png} alt={country.flags.alt} width="50" />
        </div>
      ))}
    </div>
  );
}
