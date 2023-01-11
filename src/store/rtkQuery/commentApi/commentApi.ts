import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "constants/root";
import { IuseToggle } from "hooks/useToggle";
import { IComments } from "models";

interface IUpdateComments extends IComments {
  updateId: string;
}

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Comments"],
  endpoints: (build) => ({

    getComments: build.query<IComments[], string[]>({
      query: (body) => ({
        url: "comments",
        params: {
          body,
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Comments" as const, _id })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),

    getCommenstUsers: build.query<IComments[], {limit: IuseToggle,userId: string | undefined }>({
      query: (body) => ({
        url: 'comments-user',
        params: {
          ...body,
        }
      }),
      providesTags: () => [{ type: "Comments", id: "LIST" }],
    }),

    getOneComment: build.query<IComments, {id: string}>({
      query: (post) => `comment/${post.id}`,
      providesTags: () => [{ type: "Comments", id: "LIST" }],
    }),

    createComment: build.mutation<IComments, Partial<IComments>>({
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
      body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    setAddLike: build.mutation<{success: boolean}, IComments> ({
      query: (body) => ({
        url: `comment-like`,
        method: "PATCH",
        body: {
          _id: body._id,
          likes: body.likes,
        }
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    setAddDislike: build.mutation<{success: boolean}, IComments> ({
      query: (body) => ({
        url: `comment-dislike`,
        method: "PATCH",
        body: {
          _id: body._id,
          dislikes: body.dislikes,
        }
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
