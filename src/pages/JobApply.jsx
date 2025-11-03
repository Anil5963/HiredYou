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
            <div className='flex flex-col gap-8 p-10'>
                {/* salary  */}
                <div>
                    <p className='text-2xl'>Expection Salary</p>
                    <input 
                    type="text" 
                    placeholder='Expection Salary Per Year' 
                    value= {salary}
                    onChange= {(e) => setSalary(e.target.value)}
                    className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* project  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Attach Projects</p>

                    <div className='flex flex-col gap-3'>
                        <div className='h-60 w-60'>
                            <img src={image} className='h-full w-full outline-none object-cover border-3 border-gray-500 hover:border-green-500' />
                        </div>
                        <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            className='hidden'
                            onChange={handleFileChange}
                        />
                        <button className='w-32 text-sm px-3 py-2 rounded-2xl bg-green-500 pointer-coarse:' onClick={uploadImage}>Upload File</button>
                    </div>

                    <textarea 
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className='h-32 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Project Description...'></textarea>

                </div>


                {/* job description  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Purposal Letter</p>
                    <textarea 
                    value={proposalLetter}
                    onChange={(e) => setProposalLetter(e.target.value)}
                    className='h-80 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Purposal Letter...'></textarea>
                </div>

                {/* submit  */}
                <NavLink to='/appliedjob'>
                    <div>
                        <button 
                        className='w-32 text-xl font-bold px-2.5 py-2 rounded-2xl bg-green-500 hover:bg-green-700 pointer-coarse:' 
                        onClick={() => dispatch(saveJob({salary, image, projectDescription, proposalLetter}))}
                        >Submit</button>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default JobApply