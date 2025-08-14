import { CategoryType } from "@/types/categoryType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], void>({
      query: () => `/categories`,
      providesTags: ["Category"],
    }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi
