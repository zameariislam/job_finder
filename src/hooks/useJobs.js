import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobs } from "../features/jobs/jobSlice"

export const useJobs = () => {
    const dispatch = useDispatch()
    const { jobs, ...rest } = useSelector(state => state.job)



    useEffect(() => {
        if (!jobs.length) dispatch(fetchJobs())



    }, [dispatch, jobs.length])

    return { jobs, ...rest }
}

