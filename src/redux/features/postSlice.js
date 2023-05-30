// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { initialState } from "react-doc-viewer/build/state/reducer";

// export const getPosts = createAsyncThunk(
//   "posts/getPosts",
//   async () => {
//     return fetch(
//       "https://64715cc66a9370d5a41a53d8.mockapi.io/programming"
//     ).then((res) => res.json());
//   }
// );

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     posts: [],
//     loading: false,
//   },
//   extraReducers: {
//     [getPosts.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getPosts.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.posts = action.payload;
//     },
//     [getPosts.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },
// });

// export default postSlice.reducer


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    try {
      const response = await axios.get('https://64715cc66a9370d5a41a53d8.mockapi.io/programming');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;