import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {  IDialog, IUser } from "models";


const dialogApi = createApi({
  reducerPath: "dialogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://project1-pkez.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Dialog"],
  endpoints: (build) => ({
    
    createDialog: build.mutation<IDialog, {userOne: IUser, userTwo: IUser}>({
      query(body) {
        return {
          url: `dialog-create`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{type: 'Dialog', id: 'LIST'}],
    }),
    
    getOneDialog: build.query< IDialog , { id: string | undefined}>({
      query: ({ id }) => `dialog/${id}`,
      providesTags: () => [{type: 'Dialog', id: 'LIST'}],
    }),
    
    addCommentUpdate: build.mutation<IDialog, {targetId: string, commentId:string}>({
        query: (body) => ({
          url: `dialog-add-comment`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: [
          { type: "Dialog", id: "LIST" },
        ],
      }),
      
      removeCommentUpdate: build.mutation<IDialog, {targetId: string, commentId:string}>({
        query: (body) => ({
          url: `dialog-remove-comment`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: [ { type: "Dialog", id: "LIST" }, ], 
      }),

      deleteDialog: build.mutation<{success: true}, any>({
        query: (body) => ({
          url: `dialog-delete`,
          method: "DELETE",
          body,
        }),
        invalidatesTags: [ { type: "Dialog", id: "LIST" } ],
      }),
      
      
      
      // getUserPost: build.query<IPost[], IinitialStatePosts>({
        //   query: (options) => ({
          //     url: "user-posts",
          //     params: {
    //       ...options,
    //     },
    //   }),
    //   providesTags: (result) =>
    //     result
    //       ? [
      //           ...result.map(({ _id }) => ({ type: "Posts" as const, _id })),
      //           { type: "Posts", id: "LIST" },
      //         ]
      //       : [{ type: "Posts", id: "LIST" }],
      // }),
      
        
        // getUserPostLength: build.query<number, IinitialStatePosts>({
    //   query: (id) => ({
    //     url: `user-post-length`,
    //     params: {
    //        ...id,
    //     }
    //   }),
    //   providesTags: () => ["Length"],
    // }),

    // getlength: build.query<number, IinitialStatePosts>({
    //   query: () => ({
    //     url: `lenght`,
    //   }),
    //   providesTags: () => ["Length"],
    // }),

    // getTags: build.query({
    //   query: (params) => ({
    //     url: `tags`,
    //     params: {
    //       ...params,
    //     },
    //   }),
    //   providesTags: () => ["Tags"],
    // }),


    // updatePost: build.mutation<IPost, IPost | {image:string, id: string, tags: string}>({
    //   query: (body) => ({
    //     url: `post/${body.id}`,
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: [
    //     { type: "Posts", id: "LIST" },
    //     { type: "Tags" },
    //   ],
    // }),

    // setAddLike: build.mutation<{success: boolean}, IPost>({
    //   query: (body) => ({
    //     url: `post-set-like`,
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: [
    //     { type: "Posts", id: "LIST" },
    //     { type: "Tags" },
    //   ],
    // }),

    // setAddDislike: build.mutation<{success: boolean}, IPost>({
    //   query: (body) => ({
    //     url: `post-set-dislike`,
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: [
    //     { type: "Posts", id: "LIST" },
    //     { type: "Tags" },
    //   ],
    // }),

    



  }),
});

export { dialogApi };