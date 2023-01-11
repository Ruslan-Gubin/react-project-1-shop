import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IinitialStatePosts } from "store/slice/postSlice/types";
import type { IPost } from "models";
import { providesList } from "utils";
import { BASE_URL } from "constants/root";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Posts", "Tags", "Length"],
  endpoints: (build) => ({

    getPosts: build.query<IPost[], { searchPost: string }>({
      query: (options) => ({
        method: "GET",
        url: "post",
        params: {
          searchPost: options.searchPost,
        },
      }),
      providesTags: (result) => providesList(result, 'Posts'),
    }),

    getUserPost: build.query<IPost[], IinitialStatePosts>({
      query: (options) => ({
        url: "user-posts",
        params: {
          categor: options.category?.value,
          ...options,
        },
      }),
      providesTags: (result) => providesList(result, 'Posts'),
    }),

    getOnePost: build.query<IPost, { id: string | undefined }>({
      query: ({ id }) => `post/${id}`,
      providesTags: () => [{ type: "Posts", id: "LIST" }],
    }),

    getUserPostLength: build.query<number, IinitialStatePosts>({
      query: (id) => ({
        url: `user-post-length`,
        params: {
          ...id,
        },
      }),
      providesTags: () => ["Length"],
    }),

    getlength: build.query<number, IinitialStatePosts>({
      query: () => ({
        url: `lenght`,
      }),
      providesTags: () => ["Length"],
    }),

    getTags: build.query({
      query: (params) => ({
        url: `tags`,
        params: {
          ...params,
        },
      }),
      providesTags: () => ["Tags"],
    }),

    createPost: build.mutation<IPost, IPost | { image: string; tags: string }>({
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

    updatePost: build.mutation<
      IPost,
      IPost | { image: string; id: string; tags: string }
    >({
      query: (body) => ({
        url: `post/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }, { type: "Tags" }],
    }),

    setAddLike: build.mutation<{ success: boolean }, IPost>({
      query: (body) => ({
        url: `post-set-like`,
        method: "PATCH",
        body: {
          id: body._id,
          likes: body.likes
        }
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }, { type: "Tags" }],
    }),

    setAddDislike: build.mutation<{ success: boolean }, IPost>({
      query: (body) => ({
        url: `post-set-dislike`,
        method: "PATCH",
        body: {
          id: body._id,
          dislikes: body.dislikes
        }
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }, { type: "Tags" }],
    }),

    addCommentUpdate: build.mutation<IPost,{ targetId: string; commentId: string }>({
      query: (body) => ({
        url: `post-add-comment`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),

    removeCommentUpdate: build.mutation<IPost,{ targetId: string; commentId: string }>({
      query: (body) => ({
        url: `post-remove-comment`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),

    deletePost: build.mutation<IPost, string>({
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
