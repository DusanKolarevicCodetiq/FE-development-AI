import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => "/all?fields=name,region,population,flags,capital,cca3",
    }),
  }),
});

export const { useGetCountriesQuery } = apiSlice;
