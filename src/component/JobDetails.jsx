import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function JobDetails() {

  const job = useSelector((state) => state.jobData.selectedJob)
  return (
    <div className='h-screen w-full bg-black'>
      <div className='pt-10 px-10'>
        <h1 className='text-green-500 text-3xl font-bold'>{job.jobTitle}</h1>
      </div>
      <div className='flex flex-col gap-5 font-bold text-white pt-4 px-10'>


        <div className='flex justify-between'>

          <div className='flex flex-col gap-5'>
            {/* company logo and name  */}
            <div className='flex gap-1 items-center'>
              <BusinessIcon />
              <p className='text-xl'>{job.companyName}</p>
            </div>

            {/* location  */}
            <div className='flex items-center'>
              <LocationOnIcon />
              <p className='text-xl'>{job.location}</p>
            </div>
          </div>

          <NavLink to="/jobapply">
            <div>
              <button className='bg-green-500 px-5 py-2 rounded-xl font-bold text-xl'>Apply <OpenInNewIcon /></button>
            </div>
          </NavLink>
        </div>

        {/* Job Details  */}
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-bold'>Job Details</p>

          <div className='flex gap-1 pl-3'>
            <BusinessCenterIcon />
            <p className='text-lg'>{job.workTime}</p>
          </div>

          <p className='text-lg pl-3'>{job.salary}</p>

          <div className='flex gap-1 pl-3'>
            <AccessTimeIcon />
            <p className='text-lg'>{job.postTime}</p>
          </div>
        </div>

      </div>
      <div className='px-10 pt-5'>
        <p className='text-lg'>{job.description}</p>
      </div>

    </div>
  )
}

export default JobDetails