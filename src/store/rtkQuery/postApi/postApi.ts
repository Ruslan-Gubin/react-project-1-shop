import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../../models/products";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-project-1-backend.herokuapp.com/api',
  prepareHeaders: (headers, {getState}) => {
    const token = window.localStorage.getItem('token')
    if (token) headers.set('authorization', token)  
    return headers
  }
}),
  tagTypes: ["Post"],
  endpoints: (build) => ({

    getPosts: build.query<IPost[], number>({
      query: () => "post",
      providesTags: (result) =>
        result
            ? [...result.map(({ _id }) => ({ type: "Post" as const, _id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    getTags: build.query({
      query: () => 'tags',
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ _id }) => ({ type: "Post" as const, _id })),
      //         { type: "Post", id: "LIST" },
      //       ]
      //     : [{ type: "Post", id: "LIST" }],
    }),
    
    getOnePost: build.query<IPost, number>({
      query: (post) => `post/${post.id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id: "LIST"  }],
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (body) => ({
        url: "post",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (body) => ({
        url: `post/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    setImagUpload: build.mutation<File, any>({
      query: (body) => ({
        url: 'upload',
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

  }),
});

export const {
  useSetImagUploadMutation,
  useGetPostsQuery,
  useGetOnePostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetTagsQuery,
} = postApi;
