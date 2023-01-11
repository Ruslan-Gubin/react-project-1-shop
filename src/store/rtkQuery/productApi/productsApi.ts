import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "constants/root";
import { IfilterSlice } from "models";
import { IProduct } from "models/products";
import { userDataType } from "pages/Checkout/Checkout";
import { IaddProductSlice, IOptionsBodyUpdate } from "store/slice/addProductSlice/type";


const productsApi = createApi({ 
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Products", 'Categories', 'Images'],
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
      providesTags: () => [{ type: "Products", id: "LIST" }],
    }),

    getCategory: build.query<{label:string, value: string}[], {department: string | undefined}>({
      query: (body) => ({
       url: 'products-category',
        params: {
          department: body.department,
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

    getImagesForSwiper: build.query<string[], null>({
      query: () => ({
       url: 'products-images',
      }),
      providesTags: () => [{ type: "Images", id: "LIST" }],
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

    updateProduct: build.mutation<IProduct, IOptionsBodyUpdate>({
      query: (body) => ({
        url: 'product-update',
        method: "PATCH",
       body,
      }),
      invalidatesTags: [
      { type: "Products", id: "LIST" },
      { type: "Categories", id: "LIST" }
      ],
    }),

    buyProduct: build.mutation<any,{product:{id: string | undefined, counter: number}[],buyer: userDataType}>({
      query: (body) => ({
        url: 'product-order-buy',
        method: "PATCH",
       body,
      }),
      invalidatesTags: [
      { type: "Products", id: "LIST" },
      { type: "Categories", id: "LIST" }
      ],
    }),

    createdProductComment: build.mutation<{success: boolean}, { targetId: string; commentId: string }>({
      query: (body) => ({
        url: 'product-create-comment',
        method: "PATCH",
       body,
      }),
      invalidatesTags: [
      { type: "Products", id: "LIST" },
      ],
    }),

    removeProductComment: build.mutation<{success: boolean}, IOptionsBodyUpdate>({
      query: (body) => ({
        url: 'product-remove-comment',
        method: "PATCH",
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
