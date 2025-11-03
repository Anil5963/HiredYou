import React, { useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs, selectJob, } from '../features/job.features.js';


function JobList() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (job) => {
        dispatch(selectJob(job))
        navigate(`/jobdetails/${job.id}`)
    }

    const handlePost = (post) => {
        navigate(`/jobdetails/${post.id}`)
    }

    const { jobs, status, error } = useSelector((state) => state.jobData)
    const posted = useSelector((state) => state.jobData.postJob)
    const valued = useSelector((state) => state.jobData.inputValue)

    // const filteredJobs = jobs.filter((job) => {
    //     const titleMatch =
    //         !valued.inputTitle ||
    //         job.jobTitle.toLowerCase().includes(valued.inputTitle.toLowerCase())

    //     const locationMatch =
    //         !valued.inputLocation ||
    //         job.location.toLowerCase().includes(valued.inputLocation.toLowerCase());

    //     // show job if both match
    //     return titleMatch && locationMatch;
    // });


    const filteredJobs = (() => {
        const hasTitle = valued.inputTitle.trim() !== "";
        const hasLocation = valued.inputLocation.trim() !== "";

        // if both empty → show all jobs
        if (!hasTitle && !hasLocation) return jobs;

        // filter jobs that match
        const matches = jobs.filter((job) => {
            const titleMatch = job.jobTitle.toLowerCase().includes(valued.inputTitle.toLowerCase());
            const locationMatch = job.location.toLowerCase().includes(valued.inputLocation.toLowerCase());

            // if both filled → both must match
            if (hasTitle && hasLocation) return titleMatch && locationMatch;

            // if only one filled → match that one
            if (hasTitle) return titleMatch;
            if (hasLocation) return locationMatch;
        });

        // if both fields filled but no match → show all
        if (hasTitle && hasLocation && matches.length === 0) return jobs;

        return matches;
    })();


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchJobs())
        }
    }, [dispatch, status])

    if (status === 'loading') return <p className='text-white'>Loading jobs...</p>;
    if (status === 'failed') return <p className='text-red-500'>{error}</p>;


    return (
        <div className=' w-full bg-black'>

            {filteredJobs.map((job) => (
                <div className='flex flex-col gap-24' key={job.id}>
                    <div className='border-2 border-green-500 rounded-2xl m-10 p-5 pointer-coarse:' onClick={() => handleClick(job)}>
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


            {posted.map((post) => (
                <div className='flex flex-col gap-24' key={post.id}>
                    <div className='border-2 border-green-500 rounded-2xl m-10 p-5 pointer-coarse:' onClick={() => handlePost(post)}>
                        <div className=''>
                            <h1 className='text-green-500 text-2xl font-bold'> {post.jobTitle}</h1>
                        </div>
                        <div className='flex gap-6 font-bold text-white pt-4 '>
                            <p className='text-xl font-bold'>{post.companyName} </p>
                            <p className='text-xl font-bold'> {post.location} </p>
                            <div className='flex items-center gap-0.5'>
                                <p className='text-xl font-bold'> {post.stars} </p>
                                <span className='text-gold'>
                                    <StarIcon sx={{ fontSize: 24, color: "#22c55e" }} />
                                </span>
                            </div>

                        </div>
                        <div className='pt-3'>
                            <p className='text-lg font-semibold'> {post.jobDescription} </p>
                        </div>
                        <div className='flex pt-3 gap-20'>
                            <p className='text-green-500 font-semibold text-xl'> {post.salary} </p>
                            <p className='text-xl font-semibold'> {post.postTime} </p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default JobList