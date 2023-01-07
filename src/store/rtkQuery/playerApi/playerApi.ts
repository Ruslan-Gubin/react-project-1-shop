import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MineUpdatedOptionsType } from "data/mineUpdateObjOptions";
import { InventoryPlayerType, IPlayerType, MineUpdateLevelBody } from "models/GameType";
import { ResourceBarType } from "store/slice/playerSlice/types";


const playerApi = createApi({
  reducerPath: 'resourceGame',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api",
    // baseUrl: "https://project1-pkez.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  
  tagTypes: ['Resource', 'Mines'],
  endpoints: (build) => ({

    getPlayer: build.query<IPlayerType, {id: string}>({
      query: ({id}) => ({
        method: 'GET',
        url: 'player-get',
        params: { 
          id,
        },
      }),
      providesTags: () => [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}],
    }),

    createPlayer: build.mutation<IPlayerType, {nameSity: string, userId: string}>({
      query(body) {
        return {
          url: `player-create`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Resource", id: "LIST" }],
    }),

    removePlayer: build.mutation<{userId: string}, any>({
      query(body) {
        return {
          url: `player-remove`,
          method: "DELETE",
          params: {
            ...body,
          }
        };
      },
      invalidatesTags: [{ type: "Resource", id: "LIST" }],
    }),

    updatePlayer: build.mutation<IPlayerType, {text: string, userId: string}>({
      query(body) {
        return {
          url: `player-update`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [{ type: "Resource", id: "LIST" }],
    }),

    updateLevelMine: build.mutation<{success: boolean}, MineUpdatedOptionsType>({
      query: (body) => ({
        method: 'PATCH',
        url: 'mine-update-level',
        body,
      }),
      invalidatesTags:  [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}], 
    }),

    updateLevelMineFull: build.mutation<unknown,unknown>({
      query: () => ({
        method: 'PATCH',
        url: 'mine-update-full',
      }),
      invalidatesTags:  [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}], 
    }),

    setInventoryUpdate: build.mutation<InventoryPlayerType[], {inventoryUpdate: InventoryPlayerType[], playerId: string,resourceBar: ResourceBarType } >({
      query: (body) => ({
        method: 'PATCH',
        url: 'inventory-order-update',
        body,
      }),
      invalidatesTags:  [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}],
    }),

    activeInventory: build.mutation<{success: boolean}, {inventoryUpdate: InventoryPlayerType[], playerId: string,resourceBar: ResourceBarType}>({ 
      query: (body) => ({
        method: 'PATCH',
        url: 'inventory-active',
        body,
      }),
      invalidatesTags:  [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}],
    }),

    activeAdventure: build.mutation<{success: boolean}, {compasCost: number, timeMs: number, resourceBar: ResourceBarType}>({
      query: (body) => ({
        method: 'PATCH',
        url: 'adventure-active',
        body,
      }),
      invalidatesTags:  [{type: 'Resource', id: 'LIST'},{type: 'Mines', id: 'LIST'}],
    }),

    


  })
})

export {playerApi}