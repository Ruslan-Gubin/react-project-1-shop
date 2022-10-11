import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../../models/products";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/api'}),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], IProduct>({
            query: () => 'products',
            providesTags: (result) => 
            result
            ? [
                ...result.map(({_id}) => ({ type: 'Products' as const, _id})),
                {type: 'Products', id: 'LIST'},
            ]
             : [{ type: 'Products' , id: 'LIST'}],   
        }),
        createProducts: build.mutation<IProduct[], unknown>({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST' }],
        }),

        removeProduct: build.mutation<IProduct[], IProduct>({
            query: (stationery) => ({
                url: `products/${stationery._id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        }),

    })
})

export const { useGetProductsQuery, useCreateProductsMutation, useRemoveProductMutation } = productsApi