// src/services/api.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Country } from "../types";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => "all?fields=name,region,population,flags,capital,cca3",
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
