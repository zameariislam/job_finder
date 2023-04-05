

import axios from "../../utilis/axios"

export const getJobs = async () => {
    const response = await axios.get('/jobs')
    return response.data


}
export const addJob = async (data) => {

    const response = await axios.post('/jobs', data)
    return response.data

}

export const deleteTJob = async (id) => {

    const response = await axios.delete(`/jobs/${id}`)
    return response.data

}

export const editJob = async ({ id, data }) => {

    const response = await axios.put(`/jobss/${id}`, data)
    return response.data

}

