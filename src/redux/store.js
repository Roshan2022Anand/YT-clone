"use client"
import { configureStore } from '@reduxjs/toolkit'
import videosReducer from './slices/videos'
export const store = configureStore({
    reducer: {
        videos : videosReducer
    },
})