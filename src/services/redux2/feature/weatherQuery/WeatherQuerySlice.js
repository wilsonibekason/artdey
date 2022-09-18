import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/// define the creatApi as the weather api constant
export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  tagTypes: ["weather", "weatherAPI"],
  endpoints: (builder) => ({
    getWeathers: builder.query({
      query: () => "weather",
      providesTags: ["weather"],
    }),
    getWeatherByName: builder.query({
      query: (name) => `weather/${name}`,
      providesTags: ["weather"],
    }),
    getWeatherById: builder.query({
      query: (id) => `weather/${id}`,
      providesTags: ["weather"],
    }),
    addWeather: builder.mutation({
      query: (weather) => ({
        url: "/weather",
        method: "POST",
        body: weather,
      }),
      invalidatesTags: ["weather"],
    }),
    updateWeather: builder.mutation({
      query: ({ id, ...updatedBody }) => ({
        url: `/pokemon/${id}`,
        method: "PUT",
        body: updatedBody,
      }),
      invalidatesTags: ["weatherAPI"],
    }),
    deleteWeather: builder.mutation({
      query: ({ id }) => ({
        url: `/weather/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWeatherByNameQuery,
  useGetWeathersQuery,
  useAddWeatherMutation,
  useDeleteWeatherMutation,
  useGetWeatherByIdQuery,
} = weatherApi;
