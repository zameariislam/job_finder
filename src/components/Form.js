import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeJob, createJob, editInActive } from '../features/jobs/jobSlice';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { editing } = useSelector((state) => state.job)

    const [job, setJob] = useState(' ')
    const [jobType, setJobType] = useState(' ')
    const [salary, setSalary] = useState(' ')
    const [deadLine, setDeadLine] = useState(' ')
    const [editMode, setEditMode] = useState(false)


    useEffect(() => {
        if (editing?.id) {
            const { title, type, salary, deadLine } = editing

            setJob(title)
            console.log('job..', job)
            setJobType(type)
            setSalary(salary)
            setDeadLine(deadLine)
            setEditMode(true)

        }
        else {
            setJob(' ')
            setJobType(' ')
            setSalary(' ')
            setDeadLine(' ')
            setEditMode(false)

        }

    }, [editing?.id])
    console.log(editMode)




    const handleSubmit = (e) => {
        e.preventDefault()

        const jobDetail = {

            title: job,
            type: jobType,
            salary,
            deadLine
        }
        console.log(jobDetail)

        dispatch(createJob(jobDetail))

        navigate('/')

    }

    const handleEdit = (e) => {
        e.preventDefault()
        console.log('edit')

        const jobDetail = {
            id: editing?.id,

            data: {
                title: job,
                type: jobType,
                salary,
                deadLine
            }
        }
        console.log(jobDetail)

        dispatch(changeJob(jobDetail))
        dispatch(editInActive())



        navigate('/')

    }

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={editMode ? handleEdit : handleSubmit} className="space-y-6">
                <div className="fieldContainer">
                    <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                    <select id="lws-JobTitle"


                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        name="lwsJobTitle" required>
                        <option hidden selected>Select Job</option>

                        <option value={'Software Devoloper'} >Software Devoloper</option>
                        <option value={'Full Stack Developer'}  >Full Stack Developer</option>
                        <option value={'MERN Stack Developer'}  >MERN Stack Developer</option>
                        <option value={'DevOps Engineer'} >DevOps Engineer</option>


                        <option value={'Frontend Engineer'}>Frontend Engineer</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label for="lws-JobType">Job Type</label>
                    <select id="lws-JobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        name="lwsJobType" required>
                        <option value=" " hidden selected>Select Job Type</option>
                        <option value={'Full Time'}  >Full Time</option>
                        <option value={'Internship'} >Internship</option>
                        <option value={'Remote'}>Remote</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label for="lws-JobSalary">Salary</label>
                    <div className="flex border rounded-md shadow-sm border-slate-600">
                        <span className="input-tag">BDT</span>
                        <input type="number" name="lwsJobSalary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            id="lws-JobSalary" required class="!rounded-l-none !border-0"
                            placeholder="20,00,000" />
                    </div>
                </div>

                <div class="fieldContainer">
                    <label for="lws-JobDeadline">Deadline</label>
                    <input type="date"
                        name="lwsJobDeadline"
                        id="lws-JobDeadline"
                        value={deadLine}
                        onChange={(e) => setDeadLine(e.target.value)}
                        required />
                </div>

                <div className="text-right">
                    <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;