import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IuseToggle } from "hooks/useToggle";
import {  IUser } from "../../../models";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    // baseUrl: "http://localhost:4444/api",
    baseUrl: "https://project1-pkez.onrender.com/api",
  prepareHeaders: (headers) => {
    const token = window.localStorage.getItem('token')
    if (token) headers.set('authorization', token)  
    return headers
  }
}),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    
    getAuths: build.query<IUser[], {userFullName:string}>({
      query: ({userFullName}) => ({
        url: `auth-all`,
        params: {
          userFullName, 
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Auth" as const, id })),
              { type: "Auth", id: "LIST" }, 
            ]
          : [{ type: "Auth", id: "LIST" }],
    }),

    getUsersLikes: build.query<IUser[], string[]>({
      query: (usersIdArr) => ({
        url: `auth-likes`,
        params: {
          usersIdArr,
        },
      }),
    }),

    getOneAuth: build.query<IUser, string>({
      query: () => ({
        url: `auth`,
      }),
      providesTags: () =>  [{ type: "Auth", id: "LIST" }],
    }),

    getUserSinglPage: build.query<IUser, string | undefined>({
      query: (id) => ({
        url: `auth/${id}`,
      }),
      providesTags: () =>  [{ type: "Auth", id: "LIST" }],    
    }),

    getFriendRequest: build.mutation<IUser, {user: IUser, guest: string | undefined}>({
      query: (body) => ({
        url: `auth-friend-request`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setRemoveUserFriendRequest: build.mutation<{success: boolean}, {removeId: string, userId: string, usersArrId: string[]} >({
      query: (body) => ({
        url: `auth-remove-friend-request`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setAddFriend: build.mutation<{success: boolean}, {userId: string, targetId: string} >({
      query: (body) => ({
        url: `auth-add-friend`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setDeleteFriend: build.mutation<{success: boolean}, {userId: string , guest: string } >({ 
      query: (body) => ({
        url: `auth-delete-friend`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setAddDialog: build.mutation<{success: boolean}, {userOneId: string , userTwoId: string , dialogId: string} >({ 
      query: (body) => ({
        url: `auth-add-dialog`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setOnline: build.mutation<{success: boolean}, {status: boolean}>({ 
      query: (body) => ({
        url: `auth-online`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    setOfline: build.mutation<{success: boolean}, unknown>({ 
      query: () => ({
        url: `auth-ofline`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    getUsersArray: build.query<IUser[], {arr: string[], limit: IuseToggle}>({
      query: (params) => ({
        url: `auth-users-array`,
        method: 'GET',
        params: {
          arr: params.arr,
          limit: params.limit
        }
      }),
      providesTags: () => [{ type: "Auth", id: "LIST" }]
    }),

    createAuth: build.mutation<IUser, string>({
      query: (body) => {
        return {
          url: `register`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    authorization: build.mutation<IUser, {email: string | number, password: string | number}>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    updateAuth: build.mutation<{success: boolean}, IUser>({
      query: (body) => ({
        url: `auth-update`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),

    getEmails: build.query<string[], null>({
      query: () => `auths-email`,
      providesTags: () =>  [{ type: "Auth", id: "LIST" }],
    }),

    deleteAuth: build.mutation<Object[], string | undefined>({
      query: (id) => ({
        url: `auth-remove`,
        method: "DELETE",
        params: {
          id,
        }
      }),
      invalidatesTags: () => [{ type: "Auth", id: "LIST" }],
    }),
  }),
});

export const  {useGetOneAuthQuery} = authApi

export {authApi}
