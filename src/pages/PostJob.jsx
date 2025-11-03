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
            <div className='flex flex-col p-10 gap-5'>

                {/* job title  */}
                <div>
                    <p className='text-2xl'>Job Titles</p>
                    <input
                        type="text"
                        value={jobTitle}
                        placeholder='Job titles'
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* company name  */}
                <div>
                    <p className='text-2xl'>Company Name</p>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder='Company Name'
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* location  */}
                <div>
                    <p className='text-2xl'>Location</p>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder='Location'
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* salary  */}
                <div>
                    <p className='text-2xl'>Salary</p>
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder='Salary'
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* job description  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Job Description</p>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className='h-80 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Job description...'></textarea>
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
                            className='flex justify-center items-center text-lg font-bold px-4 py-2 bg-green-500 hover:bg-green-700 rounded-xl cursor-pointer'>Post Now</button>
                    </div>
                </NavLink>

            </div>

        </div>
    )
}

export default PostJob