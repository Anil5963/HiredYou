import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppliedJob() {

  const applyJob = useSelector((state) => state.jobData.selectedJob)
  const jobs = useSelector((state) => state.jobData.savedJobs)

  return (
    <div className='bg-black w-full h-full p-10'>
      <div className='flex flex-col gap-20'>

        <div className='flex flex-col gap-10 border-4 border-green-500 rounded-4xl'>
          <div className='w-full'>
            <div className='pt-10 px-10'>
              <h1 className='text-green-500 text-3xl font-bold'>{applyJob.jobTitle}</h1>
            </div>
            <div className='flex flex-col gap-5 font-bold text-white pt-4 px-10'>

              <div className='flex flex-col gap-5'>
                {/* company logo and name  */}
                <div className='flex gap-1 items-center'>
                  <BusinessIcon />
                  <p className='text-xl'>{applyJob.companyName}</p>
                </div>

                {/* location  */}
                <div className='flex items-center'>
                  <LocationOnIcon />
                  <p className='text-xl'>{applyJob.location}</p>
                </div>
              </div>


              {/* Job Details  */}
              <div className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>Job Details</p>

                <div className='flex gap-1 pl-3'>
                  <BusinessCenterIcon />
                  <p className='text-lg'>{applyJob.workTime}</p>
                </div>

                <p className='text-lg pl-3'>{applyJob.salary}</p>

                <div className='flex gap-1 pl-3'>
                  <AccessTimeIcon />
                  <p className='text-lg'>{applyJob.postTime}</p>
                </div>
              </div>

            </div>
            <div className='px-10 pt-5'>
              <p className='text-lg'>{applyJob.description}</p>
            </div>

          </div>

          {jobs.length === 0 ? (
            <p>No jobs applied yet!</p>
          ) : (
            jobs.map((job, index) => (


              <div className='bg-green-50 m-5 rounded-4xl'>
                <div className='flex flex-col gap-8 p-10'>

                  <div className='flex flex-col gap-2'>
                    {/* sending  */}
                    <div className='flex gap-1'>
                      <p className='text-xl font-bold'>to:</p>
                      <p className='text-xl font-bold'>{applyJob.shortName}</p>
                    </div>

                    {/* status  */}
                    <div className='flex gap-1'>
                      <p className='text-xl font-bold'>Status:</p>
                      <p className='text-xl font-bold text-green-500'>Pending</p>
                    </div>

                    {/* salary  */}
                    <div className='flex gap-2 items-center'>
                      <p className='text-xl font-bold'>Expection Salary:</p>
                      <p className='text-xl font-bold'>{job.salary}</p>
                    </div>
                  </div>

                  {/* project  */}
                  <div className='flex flex-col gap-3'>
                    <p className='text-xl font-bold'>Attach Projects</p>

                    <div className='w-full flex gap-4'>
                      <div className='h-60 w-60 flex-shrink-0'>
                        <img src={job.image} className='h-full w-full outline-none object-cover border-3 border-white hover:border-green-500' />
                      </div >
                      <p className='text-lg font-semibold'>{job.projectDescription}</p>
                    </div>

                  </div>


                  {/* job description  */}
                  <div className='flex flex-col gap-3'>
                    <p className='text-xl font-bold'>Purposal Letter</p>
                    <p className='text-lg font-semibold'>{job.proposalLetter}</p>
                  </div>

                </div>
              </div>

            ))
          )
          }

        </div>
      </div>
    </div>
  )
}

export default AppliedJob