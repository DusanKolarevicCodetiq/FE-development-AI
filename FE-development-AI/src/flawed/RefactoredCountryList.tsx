import { useEffect, useState, useMemo } from "react";

type Country = {
  cca3: string; // Added unique identifier for keys
  name: { common: string };
  region: string;
  population: number;
  flags: { svg: string };
  capital?: string[]; // Added since it's in the API response
};

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null); // Reset error state

      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch countries";
        console.error("Failed to fetch countries:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesRegion = region === "All" || country.region === region;
      // Fixed case-insensitive search
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [countries, region, search]);

  const formatPopulation = (population: number): string => {
    return population.toLocaleString();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h2>Country List</h2>

      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={region} // Added controlled value
          onChange={(e) => setRegion(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <input
          type="text"
          placeholder="Search country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minWidth: "200px",
          }}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "12px" }}>
            Showing {filteredCountries.length} countries
          </p>

          <ul
            style={{
              flex: 1,
              overflowY: "auto",
              listStyle: "none",
              padding: 0,
              maxHeight: "400px",
              border: "1px solid #eee",
              borderRadius: "4px",
            }}
          >
            {filteredCountries.length === 0 ? (
              <li
                style={{ padding: "20px", textAlign: "center", color: "#666" }}
              >
                No countries found matching your criteria
              </li>
            ) : (
              filteredCountries.map((country) => (
                <li
                  key={country.cca3} // Fixed: using unique cca3 instead of name
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`} // Added alt text for accessibility
                    width={32}
                    height={20}
                    style={{
                      objectFit: "cover",
                      borderRadius: "2px",
                      border: "1px solid #ddd",
                    }}
                    onError={(e) => {
                      // Handle broken flag images
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div>
                    <strong>{country.name.common}</strong>
                    <div style={{ fontSize: "14px", color: "#666" }}>
                      {country.region} • Population:{" "}
                      {formatPopulation(country.population)}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default CountryList;

// 1. Key Prop Issue (Critical Bug)

// Problem: Using country.name.common as key, which can have duplicates
// Fix: Added cca3 to type and used country.cca3 as unique key

// 2. Type Safety Issues

// Problem: Missing cca3 field in type but used in API call
// Fix: Added proper type definition with cca3 and optional capital

// 3. Case-Sensitive Search (Bug)

// Problem: Search was case-sensitive: c.name.common.includes(search)
// Fix: Made it case-insensitive with .toLowerCase() on both strings

// 4. Uncontrolled Select Element

// Problem: Select missing value prop, making it uncontrolled
// Fix: Added value={region} to make it controlled

// 5. Poor Error Handling

// Problem: Only console.error, no user feedback
// Fix: Added error state and proper error display

// 6. Missing Error State Management

// Problem: No way to reset error state on retry
// Fix: Reset error state before new fetch attempts

// 7. Accessibility Issues

// Problem: Images missing alt text
// Fix: Added descriptive alt text for flag images

// 8. Poor User Experience

// Problem: No feedback when no results found
// Fix: Added empty state message and result count

// 9. Image Error Handling

// Problem: Broken flag URLs would show broken image icons
// Fix: Added onError handler to hide broken images

// 10. Async/Await Best Practice

// Problem: Using .then() chains in modern React
// Fix: Converted to async/await with proper try/catch

// 11. Loading State Issues

// Problem: Loading state not properly managed
// Fix: Use finally block to ensure loading is always set to false

// 12. Population Formatting

// Problem: Raw numbers hard to read (e.g., 1000000)
// Fix: Added toLocaleString() formatting

// 13. Layout and Styling Improvements

// Problem: Poor visual hierarchy and spacing
// Fix: Added proper spacing, borders, and layout structure

// 14. HTTP Error Handling

// Problem: Not checking if HTTP request was successful
// Fix: Added response.ok check and proper error throwing
