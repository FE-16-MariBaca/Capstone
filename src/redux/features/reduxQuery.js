import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BookAPI = createApi({
  reducerPath: "listBook",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64715cc66a9370d5a41a53d8.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAllProgramming: builder.query({
      query: () => "/programming",
    }),
    getAllMystery: builder.query({
      query: () => "/history",
    }),
  }),
});

export const { useGetAllProgrammingQuery, useGetAllMysteryQuery } = BookAPI;
