import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { Icomments } from "../../../models/comments";


const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://pr1-backend.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Comments"],
  endpoints: (build) => ({

    fetchGetComment: build.query<Icomments[], number>({
      query: () => "comments",
       
      }),


    fetchGetComments: build.query<Icomments[], number>({
      query: (limit: number = 5) => ({
        url: "comments",
        params: {
          _limit: limit
        }
        }),
        
        // providesTags: (result) =>
        // result
        // ? [
        //   ...result.map(({ _id }) => ({ type: "Comments" as const, _id })),
        //   { type: "Comments", id: "LIST" },
        // ]
        // : [{ type: "Comments", id: "LIST" }],
    }),

    // getOnePost: build.query<IPost, { id: string }>({
    //   query: (post) => `post/${post.id}`,
    //   providesTags: (result, error, id) => [{ type: "Post", id: "LIST" }],
    // }),

    // createPost: build.mutation<IPost, IPost>({
    //   query: (body) => ({
    //     url: "post",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Post", id: "LIST" }],
    // }),

    // updatePost: build.mutation<IPost, IPost>({
    //   query: (body) => ({
    //     url: `post/${body.id}`,
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Post", id: "LIST" }],
    // }),

    // deletePost: build.mutation<IPost, IPost>({
    //   query: (id) => ({
    //     url: `post/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [{ type: "Post", id: "LIST" }],
    // }),

    // setImagUpload: build.mutation<any, any>({
    //   query: (body) => ({
    //     url: "upload",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Post", id: "LIST" }],
    // }),
  })
});

export { commentsApi };
