import { Country } from '../../types';
import { 
  Card as StyledCard, 
  FlagImage, 
  CardContent, 
  CountryName, 
  DetailItem,
  SkeletonLine,
  SkeletonImage 
} from './CountryCard.styles';

export interface CountryCardProps {
  country?: Country;
  isLoading?: boolean;
}

export const CountryCard = ({ country, isLoading = false }: CountryCardProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  if (isLoading) {
    return (
      <StyledCard aria-hidden="true">
        <SkeletonImage />
        <CardContent>
          <SkeletonLine style={{ width: '80%', height: '1.5rem', marginBottom: '1rem' }} />
          <SkeletonLine style={{ width: '60%' }} />
          <SkeletonLine style={{ width: '70%' }} />
          <SkeletonLine style={{ width: '50%' }} />
        </CardContent>
      </StyledCard>
    );
  }

  if (!country) return null;

  return (
    <StyledCard tabIndex={0}>
      <FlagImage
        src={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        loading="lazy"
        width={320}
        height={160}
      />
      <CardContent>
        <CountryName>{country.name.common}</CountryName>
        <DetailItem>
          <strong>Population:</strong> {formatNumber(country.population)}
        </DetailItem>
        <DetailItem>
          <strong>Region:</strong> {country.region}
        </DetailItem>
        <DetailItem>
          <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
        </DetailItem>
      </CardContent>
    </StyledCard>
  );
};

export default CountryCard;
