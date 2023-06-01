import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getPostPhilosophy = createAsyncThunk("postPhilosophy/getPostPhilosophy", async () => {
    try {
        const response = await axios.get("https://6475ca44e607ba4797dc9d4d.mockapi.io/MysteryBookList") // data nya masih belum ada. API sementera biar bisa terlihat
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

const postsPhilosophySlice = createSlice({
    name:"postsPhilosophy",
    initialState: {
        postsPhilosophy: [],
        loading:false,

    },
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(getPostPhilosophy.pending, (state) => {
            state.loading = true
         })
         .addCase(getPostPhilosophy.fulfilled, (state, action) => {
            state.loading = false
            state.postsPhilosophy =action.payload
         })
         .addCase(getPostPhilosophy.rejected, (state) => {
            state.loading = false
         })
    }
})



export default postsPhilosophySlice.reducer