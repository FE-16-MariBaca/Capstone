import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhilosophyDetail = createAsyncThunk(
    "philosophyDetail/getPhilosophyDetail",
    async (bookId) => {
      try {
        const response = await axios.get(
          `https://647ad0d0d2e5b6101db08cbd.mockapi.io/philosophy/${bookId}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


const philosophyDetailSlice = createSlice({
    name: "philosophyDetail",
    initialState:{
        data: [],
        isLoading: true,
    },
    extraReducers: (builder) => {
        builder
      .addCase(getPhilosophyDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhilosophyDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
    },
});


export default philosophyDetailSlice.reducer