import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/products";




export const stationeryApi = createApi({
    reducerPath: "stationeryApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/api'}),
    tagTypes: ['Stationery'],
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], number>({
            query: () => 'stationery',
            providesTags: (result) => 
            result
            ? [
                ...result.map(({id}) => ({ type: 'Stationery' as const, id})),
                {type: 'Stationery', id: 'LIST'},
            ]
             : [{ type: 'Stationery' , id: 'LIST'}],   
        }),
        createProducts: build.mutation<IProduct, number>({
            query: (body) => ({
                url: 'stationery',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Stationery', id: 'LIST' }],
        }),

        removeProduct: build.mutation<IProduct, string>({
            query: (stationery) => ({
                url: `stationery/${stationery._id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Stationery', id: 'LIST'}],
        }),

    })
})

export const { useGetProductsQuery, useCreateProductsMutation, useRemoveProductMutation } = stationeryApi