import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelfImprovementDetail = createAsyncThunk(
    "philosophyDetail/getPhilosophyDetail",
    async (bookId) => {
      try {
        const response = await axios.get(
          `https://64715cc66a9370d5a41a53d8.mockapi.io/selfimprovement/${bookId}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


const selfImprovementDetailSlice = createSlice({
    name: "selfImprovementDetail",
    initialState:{
        data: [],
        isLoading: true,
    },
    extraReducers: (builder) => {
        builder
      .addCase(getSelfImprovementDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSelfImprovementDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
    },
});


export default selfImprovementDetailSlice.reducer