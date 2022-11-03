import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Icomments } from "../../../models/comments";
import { IinitialStatePosts } from "../../slice/postSlice/types";
import type { IPost } from "../../../models";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://pr1-backend.herokuapp.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Posts", "Tags", "Length"],
  endpoints: (build) => ({

    getPosts: build.query<IPost[], IinitialStatePosts>({
      query: (options) => ({
        url: "post",
        params: {
          ...options,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getOnePost: build.query<IPost, { id: string | undefined}>({
      query: ({ id }) => `post/${id}`,
      providesTags: (result) => [{ type: "Posts", id: "LIST" }],
    }),

    getlength: build.query<number, null>({
      query: () => `lenght`,
      providesTags: (result) => ["Length"],
    }),

    getTags: build.query({
      query: (limit) => ({
        url: `tags`,
        params: {
          limit,
        },
      }),
      providesTags: (result) => ["Tags"],
    }),

    createPost: build.mutation<IPost, Partial<IPost>>({
      query(body) {
        return {
          url: `post`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [
        { type: "Posts", id: "LIST" },
        { type: "Tags" },
        { type: "Length" },
      ],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (body) => ({
        url: `post/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [
        { type: "Posts", id: "LIST" },
        { type: "Tags" },
      ],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Posts", id: "LIST" },
        { type: "Tags" },
        { type: "Length" },
      ],
    }),

    fetchGetComments: build.query<Icomments[], number>({
      query: (limit: number = 5) => ({
        url: "comments",
        params: {
          limit,
        },
      }),
    }),
  }),
});

export { postApi };
