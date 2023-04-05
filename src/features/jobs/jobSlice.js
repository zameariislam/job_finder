import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, deleteTJob, editJob, getJobs } from "./jobAPI"

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ' ',
    editing: {}
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


export const removeJob = createAsyncThunk(
    'jobs/removeJob',
    async (id) => {
        const job = await deleteTJob(id);
        return job


    }
);


export const changeJob = createAsyncThunk(
    'jobs/changeJob',

    async ( details ) => {
         const{id,data}=details

        
         const job = await editJob( id, data )


        return job


    }
);


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload

        },
        editInActive: (state, action) => {
            state.editing = {}

        },

    },
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
            .addCase(removeJob.pending, (state) => {
                state.isError = false
                state.isLoading = true

            })
            .addCase(removeJob.fulfilled, (state, action) => {




                state.jobs = state.jobs.filter(job => job.id !== action?.meta?.arg)

                state.isError = false
                state.isLoading = false


            })
            .addCase(removeJob, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message


            })

            .addCase(changeJob.pending, (state, action) => {
                state.isError = false
                state.isLoading = true

            })
            .addCase(changeJob.fulfilled, (state, action) => {

                const indexToUpdate = state.jobs.findIndex(t => t.id === action.payload.id)
                state.jobs[indexToUpdate] = action.payload

                state.isError = false
                state.isLoading = false


            })
            .addCase(changeJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message


            })


    }




})

export default jobSlice.reducer
export const { editActive, editInActive } = jobSlice.actions