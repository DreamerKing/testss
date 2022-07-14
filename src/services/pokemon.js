import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mock.apifox.cn/m1/1270126-0-default'
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `/${name}`
    })
  })
});

export const { useGetPokemonByNameQuery } = pokemonApi;