import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Iauth } from "../../../models";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/api" }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    getAuths: build.query<Iauth[], null>({
      query: () => "auth",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ password }) => ({
                type: "Auth" as const,
                password,
              })),
              { type: "Auth", id: "LIST" },
            ]
          : [{ type: "Auth", id: "LIST" }],
    }),

    getOneAuth: build.query<Iauth, Iauth>({
      query: (params) => `auth/${params._id}`,
    }),

    createAuth: build.mutation<Iauth, Iauth>({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    authorization: build.mutation<Iauth, Iauth>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    updateAuth: build.mutation<Iauth, Iauth>({
      query: (auth) => ({
        url: `auth/${auth._id}`,
        method: "PUT",
        body: auth,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    deleteAuth: build.mutation<Iauth, Iauth>({
      query: (auth) => ({
        url: `auth/${auth._id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
  }),
});


export const {
  useAuthorizationMutation,
  useCreateAuthMutation,
  useDeleteAuthMutation,
  useGetOneAuthQuery,
  useUpdateAuthMutation,
  useGetAuthsQuery,
} = authApi;
