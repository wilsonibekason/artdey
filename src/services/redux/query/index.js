import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  ///// name the reducerpath the same as your ainame
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    // <Pokemon, string    /** return vid if there is no endpoint*/  >
    getPokemonByName: builder.query({
      ///// query:() => "/contacts"
      query: (name) => `pokemon/${name}`,
      providesTags: ["pokemon"],
    }),
    getPokemonByiD: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
    addPokemon: builder.mutation({
      query: (pokemon) => ({
        url: "/pokemon",
        method: "POST",
        body: pokemon,
      }),
      // to prevent autmatic prefetching ue the tagsTypes and add invalidataTags to all muatatoion end poists and providetags tro all tjhe endpoints
      invalidatesTags: ["pokemon"],
    }),
    updatePokemon: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/pokemon/${id}`,
        method: "PUT",
        body: rest,
      }),
      ///
      invalidatesTags: ["pokemon"],
    }),
    deletePokemon: builder.mutation({
      query: ({ id }) => ({
        url: `/pokemon/${id}`,
        method: "DELETE",
        // body: rest,
      }),
    }),
  }),
});
export const {
  useGetPokemonByNameQuery,
  useGetPokemonByiDQuery,
  useAddPokemonMutation,
  useDeletePokemonMutation,
  useUpdatePokemonMutation,
} = pokemonApi;
//// export const {use+Get+Name+Query} = pokemonApi
//// Pokemin interface ]

/**
 *
 * export interface Pokemon {
 * "id": string,
 * "name": string,
 * "email": string
 */
