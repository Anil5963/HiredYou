import React, { useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs, selectJob } from '../features/job.features.js';


function JobList() {

    const navigate = useNavigate()
    const handleClick = (job) => {
        dispatch(selectJob(job))
        navigate(`/jobdetails/${job.id}`)
    }

    const dispatch = useDispatch()
    const { jobs, status, error } = useSelector((state) => state.jobData)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchJobs())
        }
    }, [dispatch, status])

    if (status === 'loading') return <p className='text-white'>Loading jobs...</p>;
    if (status === 'failed') return <p className='text-red-500'>{error}</p>;


    return (
        <div className=' w-full bg-black'>

            {jobs.map((job) => (
                <div className='flex flex-col gap-24' key={job.id}>
                    <div className='border-2 border-green-500 rounded-2xl m-10 p-5' onClick={() => handleClick(job)}>
                        <div className=''>
                            <h1 className='text-green-500 text-2xl font-bold'> {job.jobTitle}</h1>
                        </div>
                        <div className='flex gap-6 font-bold text-white pt-4 '>
                            <p className='text-xl font-bold'>{job.companyName} </p>
                            <p className='text-xl font-bold'> {job.location} </p>
                            <div className='flex items-center gap-0.5'>
                                <p className='text-xl font-bold'> {job.stars} </p>
                                <span className='text-gold'>
                                    <StarIcon sx={{ fontSize: 24, color: "#22c55e" }} />
                                </span>
                            </div>

                        </div>
                        <div className='pt-3'>
                            <p className='text-lg font-semibold'> {job.description} </p>
                        </div>
                        <div className='flex pt-3 gap-20'>
                            <p className='text-green-500 font-semibold text-xl'> {job.salary} </p>
                            <p className='text-xl font-semibold'> {job.postTime} </p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default JobList