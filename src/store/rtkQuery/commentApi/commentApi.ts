import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Icomments } from "models/comments";
import { IUpdateComments } from "pages/Home/Home";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://pr1-backend.herokuapp.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Comments"],
  endpoints: (build) => ({

    getComments: build.query<Icomments[], string>({
      query: () => "comments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Comments" as const, _id })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),

    // getOneComment: build.query<Icomments, {id: string}>({
    //   query: (post) => `comment/${post.id}`,
    //   providesTags: () => [{ type: "Comments", id: "LIST" }],
    // }),

    createComment: build.mutation<Icomments, Partial<Icomments>>({
      query: (body) => ({
        url: "comments",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    updateComment: build.mutation<IUpdateComments, Partial<IUpdateComments>>({
      query: (body) => ({
        url: `comment-update`,
        method: "PATCH",
        params: {
        id: body.updateId,
      },
      body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    deleteComment: build.mutation<{success: boolean}, string>({
      query: (id) => ({
        url: `comments-remove`,
        params: {
          id,
        },
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    
  }),
});

export { commentApi };
