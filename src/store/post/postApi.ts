import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../models/products";


export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/api" }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: () => ({
        url: '/post',     
      }),
      providesTags: result => ['Post']
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: 'post',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/post/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `post/${post._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  })
})

export const {useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation} = postApi;