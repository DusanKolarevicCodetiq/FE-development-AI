import { Country } from '../../types';
import { CountryCard } from '../CountryCard';
import { CardsGrid, CardsContainer } from './CardsView.styles';

interface CardsViewProps {
  countries: Country[];
  isLoading?: boolean;
}

export const CardsView = ({ countries, isLoading }: CardsViewProps) => {
  if (isLoading) {
    return (
      <CardsContainer>
        <CardsGrid>
          {[...Array(8)].map((_, index) => (
            <CountryCard key={`skeleton-${index}`} isLoading />
          ))}
        </CardsGrid>
      </CardsContainer>
    );
  }

  if (countries.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        color: '#718096',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        No countries found
      </div>
    );
  }

  return (
    <CardsContainer>
      <CardsGrid>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </CardsGrid>
    </CardsContainer>
  );
};

export default CardsView;
