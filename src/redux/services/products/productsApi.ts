import { CreateProductType,ProductType, UpdateProductType } from "@/types/productType";
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

    getProductsById: builder.query<ProductType, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{type: "Product", id}]
    }),

    createProduct: builder.mutation<ProductType, Partial<CreateProductType>>({
      query: (product) => ({
                url: "products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation<ProductType, { id: number; data: Partial<UpdateProductType> }>({
            query: ({ id, data }) => ({
                url: `products/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Product"]
        }),
  }),
});

export const { 
  useGetAllProductsQuery, 
  useGetProductsByIdQuery, 
  useCreateProductMutation, 
  useDeleteProductMutation,
  useUpdateProductMutation
} = productsApi;
