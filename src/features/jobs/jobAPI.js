

import axios from "../../utilis/axios"

export const getJobs = async () => {
    const response = await axios.get('/jobs')
    return response.data


}