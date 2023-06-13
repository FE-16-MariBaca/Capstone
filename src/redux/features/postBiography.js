import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

export const getPostBiography = createAsyncThunk(
  "postBiography/getPostBiography",
  async () => {
    try {
      const response = await axios.get(
        `https://647f16c8c246f166da900eaa.mockapi.io/endpoint/Biography`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const postsBiographySlice = createSlice({
  name: "postsBiography",
  initialState: {
    postsBiography: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostBiography.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostBiography.fulfilled, (state, action) => {
        state.loading = false;
        state.postsBiography = action.payload;
      })
      .addCase(getPostBiography.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsBiographySlice.reducer;
