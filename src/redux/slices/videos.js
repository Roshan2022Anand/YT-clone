import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//getting api key from env
const API_KEY = process.env.YT_API_KEY;

export const fetchVideos = createAsyncThunk('fetchVideos', async () => {
    try {
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                type: 'video',
                order: 'date',
                maxResults: 10, // Number of videos to fetch
                key: API_KEY,
            }
        }
        );
        return res.data; // Return the video data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const videos = createSlice({
    name: "videos",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchVideos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchVideos.rejected,(state)=>{
            state.isError=true;
        })
    }
})


export default videos.reducer;