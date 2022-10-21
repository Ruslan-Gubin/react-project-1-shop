import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../../models/products";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/api" }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: () => "post",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Auth" as const, _id })),
              { type: "Auth", id: "LIST" },
            ]
          : [{ type: "Auth", id: "LIST" }],
    }),

    getTags: build.query({
      query: () => 'tags',
    }),

    getOnePost: build.query<IPost, IPost>({
      query: (post) => `post/${post.id}`,
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (body) => ({
        url: "post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `post/${post._id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `post/${post._id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetOnePostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetTagsQuery,
} = postApi;
