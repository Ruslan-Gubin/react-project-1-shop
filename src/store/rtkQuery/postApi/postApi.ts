import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IinitialStatePosts } from "store/slice/postSlice/types";
import type { IPost } from "models";


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
              ...result.map(({ _id }) => ({ type: "Posts" as const, _id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getOnePost: build.query<IPost, { id: string | undefined}>({
      query: ({ id }) => `post/${id}`,
      providesTags: () => [{ type: "Posts", id: "LIST" }],
    }),

    getlength: build.query<number, null>({
      query: () => `lenght`,
      providesTags: () => ["Length"],
    }),

    getTags: build.query({
      query: (limit) => ({
        url: `tags`,
        params: {
          limit,
        },
      }),
      providesTags: () => ["Tags"],
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
        url: `post/${body._id}`,
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

  }),
});

export { postApi };
