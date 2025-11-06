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
                <div className='flex flex-col xl:gap-24 2xl:gap-24' key={job.id}>
                    <div className='border-1 xs:border-1 sm:border-1 md:border-2 border-green-500 rounded-2xl m-3 p-3 gap-1 xs:m-3 xs:p-3 xs:gap-2 sm:m-4 sm:p-4 sm:gap-4 md:m-4 md:p-4 md:gap-4 lg:m-10 lg:p-5 pointer-coarse:' onClick={() => handleClick(job)}>
                        <div className='pb-1'>
                            <h1 className='text-green-500 text-md font-semibold xs:text-lg xs:font-semibold sm:text-xl sm:font-bold md:text-xl md:font-bold lg:text-2xl lg:font-bold xl:text-2xl xl:font-bold 2xl:text-2xl 2xl:font-bold'> {job.jobTitle}</h1>
                        </div>

                        <div className='flex flex-col gap-0.5 xs:gap-2 sm:flex-row sm:gap-4 md:flex-row md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 text-white lg:pt-2 xl:pt-3 2xl:pt-4 '>
                            <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'>{job.companyName} </p>
                            <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'> {job.location} </p>
                            <div className='flex items-center gap-0.5'>
                                <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'> {job.stars} </p>
                                <span className='text-gold'>
                                    <StarIcon
                                        sx={{
                                            fontSize: {
                                                xxs: 10,
                                                xs: 12,
                                                sm: 14,
                                                md: 16,
                                                lg: 18,
                                                xl: 20,
                                            },
                                            color: "#22c55e",
                                        }}
                                    />

                                </span>
                            </div>
                        </div>

                        <div className='sm:pt-1 lg:pt-2 xl:pt-2.5 2xl:pt-3'>
                            <p className='text-xs sm:text-base md:text-base lg:text-lg  xl:text-lg  2xl:text-lg text-white'> {job.description} </p>
                        </div>
                        <div className='flex flex-col mt-1 gap-1 sm:flex-row sm:gap-4 md:gap-8 lg:gap-12 lg:pt-2 xl:pt-3 xl:gap-16 2xl:pt-3 2xl:gap-20 '>
                            <p className='text-green-500 text-sm sm:text-base md:text-lg md:font-semibold lg:text-xl lg:font-semi-bold xl:text-xl xl:font-semibold 2xl:font-semibold 2xl:text-xl'> {job.salary} </p>
                            <p className='text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white'> {job.postTime} </p>
                        </div>
                    </div>
                </div>
            ))}



            {posted.map((post) => (
                <div className='flex flex-col xl:gap-24 2xl:gap-24' key={post.id}>
                    <div className='border-1 xs:border-1 sm:border-1 md:border-2 border-green-500 rounded-2xl m-3 p-3 gap-1 xs:m-3 xs:p-3 xs:gap-2 sm:m-4 sm:p-4 sm:gap-4 md:m-4 md:p-4 md:gap-4 lg:m-10 lg:p-5 pointer-coarse:' onClick={() => handlePost(post)}>
                        <div className='pb-1'>
                            <h1 className='text-green-500 text-md font-semibold xs:text-lg xs:font-semibold sm:text-xl sm:font-bold md:text-xl md:font-bold lg:text-2xl lg:font-bold xl:text-2xl xl:font-bold 2xl:text-2xl 2xl:font-bold'> {post.jobTitle}</h1>
                        </div>

                        <div className='flex flex-col gap-0.5 xs:gap-2 sm:flex-row sm:gap-4 md:flex-row md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 text-white lg:pt-2 xl:pt-3 2xl:pt-4 '>
                            <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'>{post.companyName} </p>
                            <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'> {post.location} </p>
                            <div className='flex items-center gap-0.5'>
                                <p className='text-base xs:text-base sm:text-lg md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-xl xl:font-bold 2xl:text-xl 2xl:font-bold text-white'> {post.stars} </p>
                                <span className='text-gold'>
                                    <StarIcon
                                        sx={{
                                            fontSize: {
                                                xxs: 10,
                                                xs: 12,
                                                sm: 14,
                                                md: 16,
                                                lg: 18,
                                                xl: 20,
                                            },
                                            color: "#22c55e",
                                        }}
                                    />
                                </span>
                            </div>
                        </div>

                        <div className='lg:pt-2 xl:pt-2.5 2xl:pt-3'>
                            <p className='text-xs sm:text-base md:text-base lg:text-lg  xl:text-lg  2xl:text-lg text-white'> {post.jobDescription} </p>
                        </div>
                        <div className='flex flex-col mt-1 gap-1 sm:flex-row sm:gap-2 md:gap-4 lg:gap-8 lg:pt-2 xl:pt-3 xl:gap-12 2xl:pt-3 2xl:gap-20 '>
                            <p className='text-green-500 text-sm sm:text-base md:text-lg md:font-semibold lg:text-xl lg:font-semi-bold xl:text-xl xl:font-semibold 2xl:font-semibold 2xl:text-xl'> {post.salary} </p>
                            <p className='text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white'> {post.postTime} </p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default JobList