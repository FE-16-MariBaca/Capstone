import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostPhilosophy = createAsyncThunk(
  "postPhilosophy/getPostPhilosophy",
  async () => {
    try {
      const response = await axios.get(
        "https://647ad0d0d2e5b6101db08cbd.mockapi.io/philosophy"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);


const postsPhilosophySlice = createSlice({
  name: "postsPhilosophy",
  initialState: {
    postsPhilosophy: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostPhilosophy.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostPhilosophy.fulfilled, (state, action) => {
        state.loading = false;
        state.postsPhilosophy = action.payload;
      })
      .addCase(getPostPhilosophy.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsPhilosophySlice.reducer;
