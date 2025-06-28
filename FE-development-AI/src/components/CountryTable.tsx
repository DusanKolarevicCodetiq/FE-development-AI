import { useState } from "react";
import type { Country } from "../types";
import {
  TableContainer,
  TableScrollContainer,
  StyledTable,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  FlagImage,
  CountryNameCell,
  CountryName,
  CountryOfficialName,
  PaginationContainer,
  PaginationButton,
  PageInfo,
  PageSizeSelector,
  PageSizeSelect,
  PaginationControls,
} from "./CountryTable.styles";

interface CountryTableProps {
  countries: Country[];
  itemsPerPage?: number;
}

export const CountryTable = ({ countries, itemsPerPage = 10 }: CountryTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage);

  const totalPages = Math.ceil(countries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCountries = countries.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const formatPopulation = (population: number) => {
    return population.toLocaleString();
  };

  return (
    <TableContainer>
      <TableScrollContainer>
        <StyledTable>
          <TableHeader>
            <tr>
              <TableHeaderCell scope="col">Flag</TableHeaderCell>
              <TableHeaderCell scope="col">Name</TableHeaderCell>
              <TableHeaderCell scope="col">Capital</TableHeaderCell>
              <TableHeaderCell scope="col">Region</TableHeaderCell>
              <TableHeaderCell scope="col">Population</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            {currentCountries.map((country) => (
              <TableRow key={country.cca3}>
                <TableCell>
                  <FlagImage
                    src={country.flags.png}
                    alt={country.flags.alt || `${country.name.common} flag`}
                    loading="lazy"
                  />
                </TableCell>
                <CountryNameCell>
                  <CountryName>{country.name.common}</CountryName>
                  <CountryOfficialName>{country.name.official}</CountryOfficialName>
                </CountryNameCell>
                <TableCell>
                  {country.capital?.join(", ") || "N/A"}
                </TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>{formatPopulation(country.population)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableScrollContainer>

      <PaginationContainer>
        <PaginationControls>
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            Previous
          </PaginationButton>
          
          <PageInfo>
            Page {currentPage} of {totalPages} ({countries.length} total countries)
          </PageInfo>
          
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            Next
          </PaginationButton>
        </PaginationControls>

        <PageSizeSelector>
          <label htmlFor="page-size">Show:</label>
          <PageSizeSelect
            id="page-size"
            value={pageSize}
            onChange={handlePageSizeChange}
            aria-label="Select number of countries per page"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </PageSizeSelect>
          <span>per page</span>
        </PageSizeSelector>
      </PaginationContainer>
    </TableContainer>
  );
}; 