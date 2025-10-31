import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch jobs from local JSON file
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await fetch('/data/jobs.json');
    return response.json();
});

const jobSlice = createSlice({
    name: "jobCarts",

    initialState: {
        jobs: [],
        savedJobs: [],
        selectedJob: [],
        status: 'idle',
        error: null
    },

    reducers: {
        saveJob: (state, action) => {
            state.savedJobs.push(action.payload)
        },

        selectJob: (state, action) => {
            state.selectedJob = action.payload;
        }

    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchJobs.pending, (state) => {
                state.status = "loading"
            })

            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.jobs = action.payload
            })

            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const { saveJob, selectJob } = jobSlice.actions
export default jobSlice.reducer