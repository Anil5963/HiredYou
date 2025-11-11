import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { postedJob } from '../features/job.features'

function PostJob() {

    const [jobTitle, setJobTitle] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("")
    const [jobDescription, setJobDescription] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    return (
        <div className='bg-black w-full'>
            <div className='flex flex-col p-3 sm:p-6 lg:p-10 gap-2 sm:gap-3 lg:gap-5'>

                {/* job title  */}
                <div>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Job Titles</p>
                    <input
                        type="text"
                        value={jobTitle}
                        placeholder='Job titles'
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500 text-white" />
                </div>

                {/* company name  */}
                <div>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Company Name</p>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder='Company Name'
                        className="text-white h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* location  */}
                <div>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Location</p>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder='Location'
                        className="text-white h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* salary  */}
                <div>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Salary</p>
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder='Salary'
                        className="text-white h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-56 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* job description  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Job Description</p>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className='text-white h-80 w-full p-1.5 text-xs bg-black outline-none sm:p-2 sm:text-base lg:p-4 lg:text-lg border-2 border-white hover:border-green-500 focus:border-2 focus:border-green-500' placeholder='Job description...'></textarea>
                </div>

                <NavLink to="/">
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={() => {
                                const stars = Math.max(3, Math.random() * 5)
                                const postTime = Date.now()
                                const id = Date.now().toString()
                                dispatch(postedJob({ jobTitle, companyName, location, salary, jobDescription, stars, postTime, id }))
                                navigate("/")
                            }
                            }
                            className='text-white w-24 text-base font-semibold px-1.5 py-1  sm:text-lg sm:font-semibold sm:w-28 lg:text-xl lg:font-bold lg:px-2.5 lg:py-2 lg:w-32 rounded-2xl bg-green-500 hover:bg-green-700 pointer-coarse:' >Post Now</button>
                    </div>
                </NavLink>

            </div>

        </div>
    )
}

export default PostJob