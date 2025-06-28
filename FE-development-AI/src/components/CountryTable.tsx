// src/components/CountryTable.tsx

import React, { useState } from "react";
import { Country } from "../types";
import {
  TableContainer,
  StyledTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FlagImage,
  Pagination,
  PageButton,
} from "./CountryTable.styles";

type CountryTableProps = {
  countries: Country[];
};

const CountryTable: React.FC<CountryTableProps> = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(countries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentCountries = countries.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (direction: "next" | "prev") => {
    setCurrentPage((prev) =>
      direction === "next"
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  return (
    <TableContainer>
      <StyledTable role="table">
        <Thead>
          <Tr>
            <Th>Flag</Th>
            <Th>Name</Th>
            <Th>Capital</Th>
            <Th>Region</Th>
            <Th>Population</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentCountries.map((country) => (
            <Tr key={country.cca3} tabIndex={0}>
              <Td>
                <FlagImage
                  src={country.flags.png}
                  alt={country.flags.alt || `${country.name.common} flag`}
                />
              </Td>
              <Td>{country.name.common}</Td>
              <Td>{country.capital?.join(", ") || "N/A"}</Td>
              <Td>{country.region}</Td>
              <Td>{country.population.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </StyledTable>

      <Pagination>
        <PageButton
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <PageButton
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </Pagination>
    </TableContainer>
  );
};

export default CountryTable;
