import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, getJobs } from "./jobAPI"

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


export const createJob = createAsyncThunk(
    'jobs/createJob',
    async (data) => {
        const job = await addJob(data)
        return job


    }
);


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
            .addCase(createJob.pending, (state) => {
                state.isError = false
                state.isLoading = true

            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.jobs.push(action.payload)

            })
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message


            })

    }




})

export default jobSlice.reducer