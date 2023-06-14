import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getHistoryDetail = createAsyncThunk(
    "historyDetail/getHistoryDetail",
    async (bookId) => {
      try {
        const response = await axios.get(
          `https://647ad0d0d2e5b6101db08cbd.mockapi.io/history/${bookId}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


const historyDetailSlice = createSlice({
    name: "historyDetail",
    initialState:{
        data: [],
        isLoading: true,
    },
    extraReducers: (builder) => {
        builder
      .addCase(getHistoryDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHistoryDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
    },
});


export default historyDetailSlice.reducer