import React, { useState } from "react";
import { Country } from "../types";
import {
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  FlagImage,
  PaginationContainer,
  PaginationInfo,
  PaginationControls,
  PaginationButton,
  PageNumbers,
  PageNumber,
} from "./CountryTable.styles";

interface CountryTableProps {
  countries: Country[];
}

const ITEMS_PER_PAGE = 10;

export const CountryTable: React.FC<CountryTableProps> = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCountries = countries.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <>
      <TableWrapper>
        <Table role="table" aria-label="Countries table">
          <TableHead>
            <TableRow>
              <TableHeader scope="col">Flag</TableHeader>
              <TableHeader scope="col">Name</TableHeader>
              <TableHeader scope="col">Capital</TableHeader>
              <TableHeader scope="col">Region</TableHeader>
              <TableHeader scope="col">Population</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCountries.map((country) => (
              <TableRow key={country.cca3}>
                <TableCell>
                  <FlagImage
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    loading="lazy"
                  />
                </TableCell>
                <TableCell>{country.name.common}</TableCell>
                <TableCell>{country.capital?.join(", ") || "N/A"}</TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>{country.population.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      <PaginationContainer>
        <PaginationInfo>
          Showing {startIndex + 1}-{Math.min(endIndex, countries.length)} of{" "}
          {countries.length} countries
        </PaginationInfo>

        <PaginationControls>
          <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            Previous
          </PaginationButton>

          <PageNumbers>
            {getPageNumbers().map((pageNumber) => (
              <PageNumber
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                $active={pageNumber === currentPage}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </PageNumber>
            ))}
          </PageNumbers>

          <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            Next
          </PaginationButton>
        </PaginationControls>
      </PaginationContainer>
    </>
  );
};
