import {configureStore } from '@reduxjs/toolkit'
import  jobReducer  from '../features/job.features.js'

export const store = configureStore({
    reducer: {
        jobData: jobReducer,
    }
})