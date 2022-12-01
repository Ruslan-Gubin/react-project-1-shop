import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IfilterSlice } from "models";
import { IProduct } from "models/products";
import { IaddProductSlice } from "store/slice/addProductSlice/type";


const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://pr1-backend.herokuapp.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Products", 'Categories'],
  endpoints: (build) => ({
    getProducts: build.query<{data: IProduct[], length: number}, IfilterSlice>({
      query: (body) => ({
       url: "products",
       params: {
        category: body.menuValue.value,
        select: body.filterSelect?.value,
         ...body,
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({ type: "Products" as const, _id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    getOneProduct: build.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),

    getCategory: build.query<{label:string, value: string}[], {department: string | undefined}>({
      query: (body) => ({
       url: 'products-category',
        params: {
          ...body,
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map((_, index) => ({ type: "Categories" as const, index })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),

    createProducts: build.mutation<IProduct, IaddProductSlice>({
      query: (body) => ({
        url: "product-add",
        method: "POST",
        body,
      }),
      invalidatesTags: [
      { type: "Products", id: "LIST" },
      { type: "Categories", id: "LIST" }
    ],
    }),

    removeProduct: build.mutation<IProduct, IProduct>({
      query: (body) => ({
        url: 'product-remove',
        method: "DELETE",
       body,
      }),
      invalidatesTags: [
      { type: "Products", id: "LIST" },
      { type: "Categories", id: "LIST" }
      ],
    }),
  }),
});

export { productsApi };
