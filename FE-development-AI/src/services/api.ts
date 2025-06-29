import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from '../types';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => 'all?fields=name,region,population,flags,capital,cca3',
      // Transform the response to sort countries by name
      transformResponse: (response: Country[]) => {
        return response.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetCountriesQuery } = countriesApi;
