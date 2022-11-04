import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  IUser } from "../../../models";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:4444/api",
    // baseUrl: 'https://pr1-backend.herokuapp.com/api',
  prepareHeaders: (headers) => {
    const token = window.localStorage.getItem('token')
    if (token) headers.set('authorization', token)  
    return headers
  }
}),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    
    getAuths: build.query<IUser[], null>({
      query: () => ({
        url: `auth-all`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Auth" as const, id })),
              { type: "Auth", id: "LIST" }, 
            ]
          : [{ type: "Auth", id: "LIST" }],
    }),

    getOneAuth: build.query<IUser, null>({
      query: () => ({
        url: `auth`,
      }),
      providesTags: (result) =>  [{ type: "Auth", id: "LIST" }],
    }),

    createAuth: build.mutation<IUser, string>({
      query: (body) => {
        return {
          url: `register`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result) => [{ type: "Auth", id: "LIST" }],
    }),

    authorization: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result) => [{ type: "Auth", id: "LIST" }],
    }),

    updateAuth: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: `auth-update`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result) => [{ type: "Auth", id: "LIST" }],
    }),

    getEmails: build.query<string[], null>({
      query: () => `auths-email`,
      providesTags: (result) =>  [{ type: "Auth", id: "LIST" }],
    }),

    deleteAuth: build.mutation<Object[], string | undefined>({
      query: (id) => ({
        url: `auth-remove`,
        method: "DELETE",
        params: {
          id,
        }
      }),
      invalidatesTags: (result) => [{ type: "Auth", id: "LIST" }],
    }),
  }),
});

export const  {useGetOneAuthQuery} = authApi

export {authApi}
