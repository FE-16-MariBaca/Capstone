import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getPostHistory = createAsyncThunk("postHistory/getPostHistory", async() => {
    try {
        const response = await axios.get('https://6475ca44e607ba4797dc9d4d.mockapi.io/MysteryBookList')
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

const postsHistorySlice = createSlice({
    name:"postsHistory",
    initialState:{
        postsHistory:[],
        loading:false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(getPostHistory.pending, (state) => {
            state.loading = true
         })
         .addCase(getPostHistory.fulfilled, (state, action) => {
            state.loading = false
            state.postsHistory = action.payload
         })
         .addCase(getPostHistory.rejected, (state) => {
            state.loading = false
         })
    }
})

export default postsHistorySlice.reducer