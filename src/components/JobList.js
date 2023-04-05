

import React from 'react';
import { Link } from 'react-router-dom';
import { editActive, removeJob } from '../features/jobs/jobSlice';
import { useDispatch } from 'react-redux';

//  mapping job type to color 

const colors = {
    Fulltime: "#FF8A00",

    Internship: "#FF5757",
    Remote: "#56E5C4"


}

const JobList = ({ job }) => {
    const { id, title, type, salary, deadLine } = job
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeJob(id))
    }

    const handleEdit = () => {
        dispatch(editActive(job))
        console.log(job)

    }

    return (
        <div class="jobs-list">
            {/* Single Job 1 */}
            <div class="lws-single-job">
                <div class="flex-1 min-w-0">
                    <h2 class="lws-title">{title}</h2>
                    <div class="job-footers">
                        <div class="lws-type">



                            <i class={`fa-solid fa-stop  !text-[${colors[type]}]      text-lg mr-1.5`}></i>
                            {type}
                        </div>
                        <div class="lws-salary">
                            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                            BDT {salary}
                        </div>
                        <div class="lws-deadline">
                            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                            Closing on {deadLine}
                        </div>
                    </div>
                </div>
                <div onClick={handleEdit} class="mt-5 flex lg:mt-0 lg:ml-4">
                    <Link to={'/editJob'} >
                        <span class="hidden sm:block">
                            <button type="button" class="lws-edit btn btn-primary">
                                <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                                Edit
                            </button>
                        </span>
                    </Link>


                    <span onClick={() => handleDelete(id)} class="sm:ml-3">
                        <button type="button" class="lws-delete btn btn-danger ">
                            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                            Delete
                        </button>
                    </span>
                </div>
            </div>
            {/* Single Job 1 */}
        </div>
    );
};

export default JobList;