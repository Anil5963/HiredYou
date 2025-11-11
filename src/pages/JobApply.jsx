import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveJob } from '../features/job.features'

function JobApply() {

    const [salary, setSalary] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [proposalLetter, setProposalLetter] = useState("")
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    // Handle file input
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const uploadImage = () => {
        document.getElementById('fileInput').click()
    }

    return (
        <div className='bg-black'>
            <div className='flex flex-col gap-3 p-3 sm:gap-6 sm:p-5 lg:gap-8 lg:p-10'>
                {/* salary  */}
                <div>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Expection Salary</p>
                    <input 
                    type="text" 
                    placeholder='Expection Salary Per Year' 
                    value= {salary}
                    onChange= {(e) => setSalary(e.target.value)}
                    className="h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500 text-white" />
                </div>

                {/* project  */}
                <div className='flex flex-col gap-1 sm:gap-2 lg:gap-3'>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Attach Projects</p>

                    <div className='flex flex-col gap-1 sm:gap-2 lg:gap-3'>
                        <div className='h-32 sm:h-40 lg:h-60 w-32 sm:w-40 lg:w-60'>
                            <img src={image} className='h-full w-full outline-none object-cover border-2  lg:border-3 border-gray-500 hover:border-green-500' />
                        </div>
                        <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            className='hidden'
                            onChange={handleFileChange}
                        />
                        <button className='w-24 sm:w-28 lg:w-32 text-xs px-2 py-1 sm:text-sm sm:px-2 sm:py-1 lg:text-base  rounded-2xl bg-green-500 hover:bg-green-700 pointer-coarse: text-white' onClick={uploadImage}>Upload File</button>
                    </div>

                    <textarea 
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className='h-32 p-1.5 text-xs w-full bg-black outline-none sm:p-2 sm:text-base lg:p-4 lg:text-lg border-2 border-white hover:border-green-500 focus:border-2 focus:border-green-500 text-white' placeholder='Project Description...'></textarea>

                </div>


                {/* job description  */}
                <div className='flex flex-col gap-1 sm:gap-2 lg:gap-3'>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white'>Purposal Letter</p>
                    <textarea 
                    value={proposalLetter}
                    onChange={(e) => setProposalLetter(e.target.value)}
                    className='h-80 w-full p-1.5 text-xs bg-black outline-none sm:p-2 sm:text-base lg:p-4 lg:text-lg border-2 border-white hover:border-green-500 focus:border-green-500 text-white' placeholder='Purposal Letter...'></textarea>
                </div>

                {/* submit  */}
                <NavLink to='/appliedjob'>
                    <div>
                        <button 
                        className='w-24 text-base font-semibold px-1.5 py-1  sm:text-lg sm:font-semibold sm:w-28 lg:text-xl lg:font-bold lg:px-2.5 lg:py-2 lg:w-32 rounded-2xl bg-green-500 hover:bg-green-700 pointer-coarse: text-white' 
                        onClick={() => dispatch(saveJob({salary, image, projectDescription, proposalLetter}))}
                        >Submit</button>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default JobApply