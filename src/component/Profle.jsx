import React from 'react'
import ProfilePicture from '../assets/owl-head-logo.jpg'
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profle() {

  const editinfo = useSelector((state) => state.jobData.editProfile)

  return (
    <div className=' w-full bg-black'>

          <div className='p-10' >

            {/* profile image  */}
            <div className='h-40 w-40 rounded-full overflow-hidden border-4 border-green-500'>
              <img src={editinfo?.image || ProfilePicture} className='h-full w-full object-cover' />
            </div>

            <div className='flex justify-between'>
              <div className='pt-5 flex flex-col gap-5'>
                {/* status  */}
                <p className='text-2xl font-bold'>Status: Active</p>

                {/* name  */}
                <div className='flex gap-2'>
                  <p className='text-2xl font-bold'>{editinfo?.firstName || "Nil"}</p>
                  <p className='text-2xl font-bold'>{editinfo?.lastName || "Nil"}</p>
                </div>

                {/* reviews  */}
                <div className='flex'>
                  <p className='text-2xl font-bold'>Reviews: 4.2</p>
                  <StarIcon sx={{ fontSize: 24 }} className='mt-1.5 text-green-500' />
                </div>
              </div>

              {/* edit button  */}
              <NavLink to="/editprofile">
                <div className='pt-5'>
                  <button className="font-bold text-xl px-5 py-2 bg-green-500 hover:bg-green-700 transition-all duration-200 rounded-2xl cursor-pointer">
                    Edit
                  </button>
                </div>
              </NavLink>
            </div>


            {/* project  */}
            <div className='flex flex-col pt-8 gap-2'>
              <p className='text-2xl font-bold'>Project Overview</p>
              <div className='flex flex-col gap-1'>
                <p className='text-xl font-semibold'>Completed Project: {editinfo?.completedProject || 5}</p>
                <p className='text-xl font-semibold'>Ongoing Project: {editinfo?.OngoingProject || 1}</p>

                <NavLink to="/appliedjob">
                  <div className='flex text-green-500 hover:text-green-700 gap-1 cursor-pointer w-48'>
                    <p className='text-xl font-semibold '>Applied Job: </p>
                    <p className='text-xl font-semibold'>0</p>
                  </div>
                </NavLink>

              </div>
            </div>

            {/* Education Section */}
            <div className="flex flex-col pt-8 gap-2">
              <p className="text-2xl font-bold">Education</p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">{editinfo?.education || "+2 in Computer Science"}</p>
                <p className="text-xl font-semibold">{editinfo?.education || "Bachelor's in Computer Science"}</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col pt-8 gap-2">
              <p className="text-2xl font-bold">Experience</p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">{editinfo?.experience || "1 year as Frontend Developer at Sipalaya Info Tech"}</p>
                <p className="text-xl font-semibold">{editinfo?.experience || "2 years remote experience as Frontend Developer"}</p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="flex flex-col pt-8 gap-2">
              <p className="text-2xl font-bold">Projects</p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">{editinfo?.project || "Amazon UI Clone (React.js + Tailwind CSS)"}</p>
                <p className="text-xl font-semibold">{editinfo?.project || "Job Portal Website"}</p>
              </div>
            </div>

          </div>

    </div>
  )
}

export default Profle