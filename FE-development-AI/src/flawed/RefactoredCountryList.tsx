import { useEffect, useState, useMemo, useCallback } from "react";
import styled from "styled-components";

type Country = {
  name: { common: string };
  region: string;
  population: number;
  flags: { svg: string };
  cca3: string;
};

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  flex: 1;
`;

const CountryItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Flag = styled.img`
  width: 32px;
  height: 20px;
  object-fit: contain;
  border: 1px solid #ccc;
`;

const List = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Failed to fetch countries");
        setLoading(false);
      });
  }, []);

  const handleRegionChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRegion(e.target.value);
    },
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      const matchesRegion = region === "All" || c.region === region;
      const matchesSearch = c.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [countries, region, search]);

  return (
    <Wrapper>
      <h2>Country List</h2>

      <Filters>
        <Select value={region} onChange={handleRegionChange}>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </Select>

        <Input
          type="text"
          placeholder="Search country"
          value={search}
          onChange={handleSearchChange}
        />
      </Filters>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {filteredCountries.map((country) => (
            <CountryItem key={country.cca3}>
              <Flag
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
              />
              {country.name.common} – {country.region} –{" "}
              {country.population.toLocaleString()}
            </CountryItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default CountryList;

//Improvements
// Search	Case-sensitive	Case-insensitive
// Key	name.common (unstable)	cca3 (stable)
// Accessibility	No alt on flag	Proper descriptive alt text
// Styling/Layout	Unstyled layout	Styled-components, grouped filters
// Performance	No memoization	useCallback, useMemo used
// Maintainability	Hardcoded options, inline styles	Constants + scoped components
