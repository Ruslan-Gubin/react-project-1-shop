import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../../models/products";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pr1-backend.herokuapp.com/api",
  }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], null>({
      query: () => "products",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Products" as const, _id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    getOneProduct: build.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),

    createProducts: build.mutation<IProduct, IProduct>({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    removeProduct: build.mutation<IProduct, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export { productsApi };
