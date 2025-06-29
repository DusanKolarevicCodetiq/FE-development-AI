import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { 
  Container,
  Header,
  Title,
  Controls,
  SearchInput,
  Select,
  CountryGrid,
  CountryCard,
  Flag,
  CountryInfo,
  CountryName,
  Detail,
  LoadingMessage,
  ErrorMessage
} from './RefactoredCountryList.styles';

interface Country {
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital?: string[];
  cca3: string;
}

const RefactoredCountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array means this effect runs once on mount

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesRegion = region === 'All' || country.region === region;
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase().trim());
      return matchesRegion && matchesSearch;
    });
  }, [countries, region, search]);

  const regions = useMemo(() => {
    const uniqueRegions = new Set(countries.map((country) => country.region));
    return ['All', ...Array.from(uniqueRegions)].filter(Boolean) as string[];
  }, [countries]);

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Countries Explorer</Title>
        <Controls>
          <SearchInput
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search countries"
          />
          <Select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            aria-label="Filter by region"
          >
            {regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </Select>
        </Controls>
      </Header>

      {loading ? (
        <LoadingMessage>Loading countries...</LoadingMessage>
      ) : (
        <CountryGrid>
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3}>
              <Flag 
                src={country.flags.png} 
                alt={country.flags.alt || `Flag of ${country.name.common}`}
                loading="lazy"
                width={264}
                height={160}
              />
              <CountryInfo>
                <CountryName>{country.name.common}</CountryName>
                <Detail>
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </Detail>
                <Detail>
                  <strong>Region:</strong> {country.region}
                </Detail>
                <Detail>
                  <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
                </Detail>
              </CountryInfo>
            </CountryCard>
          ))}
        </CountryGrid>
      )}
    </Container>
  );
};

export default RefactoredCountryList;


// RefactoredCountryList.tsx:
// Modern React functional component with TypeScript
// Proper TypeScript interfaces for all props and state
// Better error handling and loading states
// Accessible form elements
// Responsive design
// Lazy loading for images
// Proper type safety
// RefactoredCountryList.styles.ts:
// All styles using styled-components
// Responsive design with media queries
// Consistent spacing and theming
// Hover and focus states
// Proper typography and colors
// Organized and well-commented
// Key improvements over the original:

// Proper TypeScript types for all data
// Better error handling with user feedback
// Loading states
// Responsive grid layout
// Accessible form elements
// Better code organization
// Improved performance with useMemo
// Lazy loading for images
// Better styling with styled-components