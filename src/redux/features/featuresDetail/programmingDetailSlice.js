import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//detail book
export const getProgrammingDetail = createAsyncThunk(
  "programmingDetail/getProgrammingDetail",
  async (bookId) => {
    try {
      const response = await axios.get(
        `https://64715cc66a9370d5a41a53d8.mockapi.io/programming/${bookId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const programmingDetailSlice = createSlice({
  name: "programmingDetail",
  initialState: {
    data: [],
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProgrammingDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProgrammingDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export default programmingDetailSlice.reducer;
