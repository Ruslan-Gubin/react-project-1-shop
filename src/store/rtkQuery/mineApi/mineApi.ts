import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "constants/root";
import {  MineUpdateLevelBody } from "models/GameType";

const mineApi = createApi({
  reducerPath: 'mineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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