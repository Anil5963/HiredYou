import React from 'react'
import ProfilePicture from '../assets/owl-head-logo.jpg'
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profle() {

  const editinfo = useSelector((state) => state.jobData.editProfile)
  const jobs = useSelector((state) => state.jobData.savedJobs);


  return (
    <div className=' w-full bg-black'>

      <div className='p-3 sm:p-5 lg:p-10' >

        {/* profile image  */}
        <div className='h-20 w-20 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-green-500'>
          <img src={editinfo?.image || ProfilePicture} className='h-full w-full object-cover' />
        </div>

        <div className='flex justify-between'>
          <div className='pt-5 flex flex-col gap-2 sm:gap-4 lg:gap-5'>
            {/* status  */}
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Status: Active</p>

            {/* name  */}
            <div className='flex gap-2'>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{editinfo?.firstName || "Nil"}</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{editinfo?.lastName || "Nil"}</p>
            </div>

            {/* reviews  */}
            <div className='flex items-center'>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Reviews: 4.2</p>
              <StarIcon
                sx={{
                  fontSize: {
                    xxs: 12,
                    xs: 12,
                    sm: 14,
                    md: 16,
                    lg: 18,
                    xl: 20,
                  }
                }}
                className='mt-1.5 text-green-500' />
            </div>
          </div>

          {/* edit button  */}
          <NavLink to="/editprofile">
            <div className='pt-5'>
              <button 
             className='text-white text-sm sm:text-base lg:text-lg px-3 sm:px-3 lg:px-4 py-1 rounded-xl bg-green-500 mt-10 hover:bg-green-700 cursor-pointer'>
                Edit
              </button>
            </div>
          </NavLink>
        </div>


        {/* project  */}
        <div className='flex flex-col pt-8 gap-2'>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Project Overview</p>
          <div className='flex flex-col gap-1'>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">Completed Project: {editinfo?.completedProject || 5}</p>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">Ongoing Project: {editinfo?.OngoingProject || 1}</p>

            <NavLink to="/appliedjob">
              <div className='flex text-green-500 hover:text-green-700 gap-1 cursor-pointer w-48'>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">Applied Job: </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">{jobs?.length || 0}</p>
              </div>
            </NavLink>

          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col pt-8 gap-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Education</p>
          <div className="flex flex-col gap-1">
            <p className="text-white text-base sm:text-lg lg:text-xl font-semibold">{editinfo?.education || "+2 in Computer Science"}</p>
            <p className="text-white text-base sm:text-lg lg:text-xl font-semibold">{editinfo?.education || "Bachelor's in Computer Science"}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col pt-8 gap-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Experience</p>
          <div className="flex flex-col gap-1">
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">{editinfo?.experience || "1 year as Frontend Developer at Sipalaya Info Tech"}</p>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">{editinfo?.experience || "2 years remote experience as Frontend Developer"}</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col pt-8 gap-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Projects</p>
          <div className="flex flex-col gap-1">
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">{editinfo?.project || "Amazon UI Clone (React.js + Tailwind CSS)"}</p>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">{editinfo?.project || "Job Portal Website"}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Profle