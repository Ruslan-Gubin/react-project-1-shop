import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../../models/products";


export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/api" }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: () => 'post',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
      createPost: build.mutation<IPost, IPost>({
        query: (body) => ({
          url: 'post',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `post/${post._id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `post/${post._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  })
})

export const {useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation} = postApi;