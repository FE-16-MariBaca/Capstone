import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getGenre = createAsyncThunk("genre/getGenre", async () => {
    try {
        const response = await axios.get("https://6475ca44e607ba4797dc9d4d.mockapi.io/genre")
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
})






const genreSlice = createSlice({
    name: "genre",
    initialState: {
        genre: [],
        loading: false,
        searchGenre:"",
            
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(getGenre.pending, (state) => {
            state.loading = true
         })
         .addCase(getGenre.fulfilled, (state, action) => {
            state.loading = false
            state.genre = action.payload
         })
         .addCase(getGenre.rejected, (state) => {
            state.loading = false
         })
        //  .addCase(handleSearch, (state, action) => {
        //     state.searchGenre = action.payload
        //  })
    }

})

export default genreSlice.reducer