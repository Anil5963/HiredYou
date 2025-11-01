import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function EditProfile() {

    const [image, setImage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [completedProject, setComplitedProject] = useState("")
    const [ongoingProject, setOngoingProject] = useState("")
    const [education, setEducation] = useState("")
    const [experience, setExperience] = useState("")
    const [project, setProject] = useState("")

    const dispatch = useDispatch()

    return (
        <div className=' w-full bg-black'>
            <div className='p-10'>

                {/* profile image  */}
                <div className='flex flex-col gap-2'>
                    <div className='h-60 w-60'>
                        <img 
                        src={image}
                        onChange={(e) => setImage(e.target.value)}
                        className='h-full w-full outline-none object-cover border-3 border-gray-500 hover:border-green-500' />
                    </div>

                    <input 
                    type="file"
                    id="fileinput"
                    accept='image/*'
                    className='hidden'
                    onChange={handleFileChange}
                    />

                    <button className='w-32 text-sm px-3 py-2 rounded-2xl bg-green-500 hover:bg-green-700 cursor-pointer' onClick={uploadImage}>Upload File</button>
                </div>


                {/* name  */}
                <div className='pt-8 flex flex-col gap-2'>
                    <p className='text-2xl font-bold'>Name</p>
                    <div className='flex gap-10'>
                        <input 
                        type="text" 
                        placeholder='Enter your First Name'
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        
                        <input 
                        type="text" 
                        placeholder='Enter your Last Name' 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                    </div>
                </div>



                {/* project  */}
                <div className='flex flex-col pt-8 gap-2'>
                    <p className='text-2xl font-bold'>Project Overview</p>
                    <div className='flex flex-col gap-2'>

                        <div className='flex gap-2'>
                            <p className='text-xl font-semibold'>Completed Project: </p>
                            <input 
                            type="text" 
                            placeholder='Completed Project' 
                            value={completedProject}
                            onChange={(e) => setComplitedProject(e.target.value)}
                            className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>

                        <div className='flex gap-2'>
                            <p className='text-xl font-semibold'>Ongoing Project: </p>
                            <input 
                            type="text" 
                            placeholder='Ongoing Project'
                            value={ongoingProject}
                            onChange={(e) => setOngoingProject(e.target.value)}
                            className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>

                    </div>
                </div>


                {/* Education Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Education</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input 
                            type="text" 
                            placeholder='Education Background' 
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500 hover:bg-green-700 cursor-pointer'>Add</button>
                    </div>

                </div>

                {/* Experience Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Experience</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input 
                            type="text" 
                            placeholder='Your Experience' 
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500 hover:bg-green-700 cursor-pointer'>Add</button>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Projects</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input 
                            type="text" 
                            placeholder='Your Projects' 
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500 hover:bg-green-700 cursor-pointer'>Add</button>
                    </div>
                </div>

                <NavLink to='/profile'>
                <button className='text-lg px-4 py-1 rounded-xl bg-green-500 mt-10 hover:bg-green-700 cursor-pointer' onClick={() => dispatch(edits({image, firstName, lastName, completedProject, ongoingProject, education, experience, project}))}>Save</button>
                </NavLink>

            </div>
        </div>
    )
}

export default EditProfile