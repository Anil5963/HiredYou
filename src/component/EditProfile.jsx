import React from 'react'
import ProfilePicture from '../assets/owl-head-logo.jpg'
import StarIcon from '@mui/icons-material/Star';

function EditProfile() {
    return (
        <div className=' w-full bg-black'>
            <div className='p-10'>

                {/* profile image  */}
                <div className='flex flex-col gap-2'>
                    <div className='h-60 w-60'>
                        <img src={ProfilePicture} className='h-full w-full outline-none object-cover border-3 border-gray-500 hover:border-green-500' />
                    </div>
                    <button className='w-32 text-sm px-3 py-2 rounded-2xl bg-green-500'>Upload File</button>
                </div>


                {/* name  */}
                <div className='pt-8 flex flex-col gap-2'>
                    <p className='text-2xl font-bold'>Name</p>
                    <div className='flex gap-10'>
                        <input type="text" placeholder='Enter your First Name' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        <input type="text" placeholder='Enter your Last Name' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                    </div>
                </div>



                {/* project  */}
                <div className='flex flex-col pt-8 gap-2'>
                    <p className='text-2xl font-bold'>Project Overview</p>
                    <div className='flex flex-col gap-2'>

                        <div className='flex gap-2'>
                            <p className='text-xl font-semibold'>Completed Project: </p>
                            <input type="text" placeholder='Completed Project' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>

                        <div className='flex gap-2'>
                            <p className='text-xl font-semibold'>Ongoing Project: </p>
                            <input type="text" placeholder='Ongoing Project' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>

                    </div>
                </div>


                {/* Education Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Education</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder='Education Background' className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500'>Add</button>
                    </div>

                </div>

                {/* Experience Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Experience</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder='Your Experience' className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500'>Add</button>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-2xl font-bold">Projects</p>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder='Your Projects' className="h-8 w-80 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                        </div>
                        <button className='text-sm px-4 py-1 rounded-xl bg-green-500'>Add</button>
                    </div>
                </div>

                <button className='text-lg px-4 py-1 rounded-xl bg-green-500 mt-10'>Save</button>

            </div>
        </div>
    )
}

export default EditProfile