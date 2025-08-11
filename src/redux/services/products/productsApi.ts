import { ProductDetailType, ProductType } from "@/types/productType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => `/products`,
      providesTags: ["Product"],
    }),

    getProductsById: builder.query<ProductDetailType, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{type: "Product", id}]
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = productsApi;
