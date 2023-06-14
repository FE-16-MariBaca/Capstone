import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMysteryDetail = createAsyncThunk(
    "mysteryDetail/getMysteryDetail",
    async (bookId) => {
      try {
        const response = await axios.get(
          `https://6475ca44e607ba4797dc9d4d.mockapi.io/MysteryBookList/${bookId}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


const mysteryDetailSlice = createSlice({
    name: "mysteryDetail",
    initialState:{
        data: [],
        isLoading: true,
    },
    extraReducers: (builder) => {
        builder
      .addCase(getMysteryDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMysteryDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
    },
});


export default mysteryDetailSlice.reducer
