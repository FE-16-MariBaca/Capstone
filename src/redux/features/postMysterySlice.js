import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { useParams } from 'react-router-dom';



export const getPostMastery = createAsyncThunk("postMystery/getPostMystery", async () => {
    try {
        const response = await axios.get(`https://6475ca44e607ba4797dc9d4d.mockapi.io/MysteryBookList`)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
})

const postsMysterySlice = createSlice({
    name:"postsMystery",
    initialState: {
        postsMystery: [],
        loading:false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(getPostMastery.pending, (state) => {
            state.loading = true
         })
         .addCase(getPostMastery.fulfilled, (state, action) => {
            state.loading = false
            state.postsMystery = action.payload
         })
         .addCase(getPostMastery.rejected, (state) => {
            state.loading = false
         })
    }
})


export default postsMysterySlice.reducer