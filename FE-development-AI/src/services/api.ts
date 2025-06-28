import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Country } from "../types";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => "all?fields=name,region,population,flags,capital,cca3",
    }),
  }),
});

// Export auto-generated hook for usage in functional components
export const { useGetCountriesQuery } = apiSlice;
