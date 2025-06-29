import { useState, useMemo, useCallback, KeyboardEvent } from 'react';
import { Country } from '../../types';
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  CountryNameCell,
  Pagination,
  PageInfo,
  PageButton,
  FlagImage,
  PaginationControls,
  PageNumberButton,
  PaginationArrowButton
} from './TableView.styles';

const ROWS_PER_PAGE = 10;
const PAGE_RANGE_DISPLAYED = 3;

interface TableViewProps {
  countries: Country[];
}

export const TableView = ({ countries }: TableViewProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(countries.length / ROWS_PER_PAGE);

  const currentCountries = useMemo(() => {
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    return countries.slice(startIndex, startIndex + ROWS_PER_PAGE);
  }, [countries, currentPage]);

  const formatNumber = useCallback((num: number) => {
    return new Intl.NumberFormat().format(num);
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  }, [totalPages]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLTableRowElement>, country: Country) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Handle row click if needed (e.g., navigate to country detail)
      console.log('Selected country:', country.name.common);
    }
  }, []);

  const getPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const leftSide = Math.floor(PAGE_RANGE_DISPLAYED / 2);
    let startPage = Math.max(1, currentPage - leftSide);
    let endPage = startPage + PAGE_RANGE_DISPLAYED - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - PAGE_RANGE_DISPLAYED + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

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
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>Flag</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Capital</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Population</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {currentCountries.map((country) => (
            <TableRow 
              key={country.cca3}
              tabIndex={0}
              onClick={() => console.log('Selected:', country.name.common)}
              onKeyDown={(e) => handleKeyDown(e, country)}
              role="button"
              aria-label={`View details for ${country.name.common}`}
            >
              <TableCell data-label="Flag">
                <FlagImage 
                  src={country.flags.png} 
                  alt={country.flags.alt || `Flag of ${country.name.common}`}
                  loading="lazy"
                  width={40}
                  height={30}
                  draggable="false"
                />
              </TableCell>
              <CountryNameCell data-label="Name">{country.name.common}</CountryNameCell>
              <TableCell data-label="Capital">{country.capital?.[0] || 'N/A'}</TableCell>
              <TableCell data-label="Region">{country.region}</TableCell>
              <TableCell data-label="Population">{formatNumber(country.population)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      
      {totalPages > 1 && (
        <Pagination>
          <PaginationControls>
            <PaginationArrowButton 
              onClick={() => goToPage(1)} 
              disabled={currentPage === 1}
              aria-label="First page"
            >
              «
            </PaginationArrowButton>
            <PaginationArrowButton 
              onClick={() => goToPage(currentPage - 1)} 
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ‹
            </PaginationArrowButton>
          </PaginationControls>
          
          <div>
            {getPageNumbers().map((pageNumber) => (
              <PageNumberButton
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                $isActive={pageNumber === currentPage}
                aria-label={`Page ${pageNumber}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </PageNumberButton>
            ))}
          </div>
          
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          
          <PaginationControls>
            <PaginationArrowButton 
              onClick={() => goToPage(currentPage + 1)} 
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              ›
            </PaginationArrowButton>
            <PaginationArrowButton 
              onClick={() => goToPage(totalPages)} 
              disabled={currentPage === totalPages}
              aria-label="Last page"
            >
              »
            </PaginationArrowButton>
          </PaginationControls>
        </Pagination>
      )}
    </TableContainer>
  );
};

export default TableView;
