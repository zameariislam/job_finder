import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getJobs } from "./jobAPI"

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ' '
}



export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async () => {
        const jobs = await getJobs()

        return jobs

    }
)


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.isError = false
            state.isLoading = true



        })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false

                state.jobs = action.payload

            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.error = action?.error?.message
                state.jobs = []

            })

    }




})

export default jobSlice.reducer