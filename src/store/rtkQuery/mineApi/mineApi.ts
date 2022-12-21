import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPlayerType, MineUpdateLevelBody } from "models/GameType";

const mineApi = createApi({
  reducerPath: 'mineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://project1-pkez.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  tagTypes: ['Mines','Resource'],
  endpoints: (build) => ({

    updateLevelMine: build.mutation<{success: boolean}, MineUpdateLevelBody>({
      query: (body) => ({
        method: 'PATCH',
        url: 'mine-update-level',
        body,
      }),
      invalidatesTags: () => [{type: 'Resource', id: 'LIST'}], 
    }),

  })
})


export {mineApi}