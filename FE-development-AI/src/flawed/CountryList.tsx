import { useEffect, useState, useMemo } from "react";

type Country = {
  name: { common: string };
  region: string;
  population: number;
  flags: { svg: string };
};

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

  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      const matchesRegion = region === "All" || c.region === region;
      const matchesSearch = c.name.common.includes(search);
      return matchesRegion && matchesSearch;
    });
  }, [countries, region, search]);

  return (
    <div>
      <h2>Country List</h2>

      <select onChange={(e) => setRegion(e.target.value)}>
        <option>All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>

      <input
        type="text"
        placeholder="Search country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            <img src={country.flags.svg} width={24} />
            {country.name.common} – {country.region} – {country.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
