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
    <div className='bg-black w-full h-full px-3 sm:px-5 lg:p-10'>
      <div className='flex flex-col gap-20'>

        <div className='flex flex-col gap-10 border-1 sm:border-2 lg:border-4 border-green-500 rounded-4xl'>
          <div className='w-full px-3 sm:px-5 lg:px-10'>
            <div className='pt-3 sm:pt-5 lg:pt-10 '>
              <h1 className='text-green-500 text-lg font-bold sm:text-xl sm:font-bold lg:text-3xl lg:font-bold'>{applyJob.jobTitle}</h1>
            </div>
            <div className='flex flex-col gap-2 sm:gap-4 lg:gap-5 font-bold text-white '>

              <div className='flex flex-col gap-1 sm:gap-3 sm:pt-4 lg:pt-6 lg:gap-5'>
                {/* company logo and name  */}
                <div className='flex gap-1 items-center'>
                  <BusinessIcon
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
                  />
                  <p className='text-base sm:text-lg lg:text-xl'>{applyJob.companyName}</p>
                </div>

                {/* location  */}
                <div className='flex items-center'>
                  <LocationOnIcon
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
                  />
                  <p className='text-base sm:text-lg lg:text-xl'>{applyJob.location}</p>
                </div>
              </div>


              {/* Job Details  */}
              <div className='flex flex-col gap-1 sm:gap-2'>
                <p className='text-base sm:text-lg lg:text-xl font-bold'>Job Details</p>

                <div className='flex items-center gap-1 pl-3'>
                  <BusinessCenterIcon
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
                  />
                  <p className='text-xs sm:text-base lg:text-lg'>{applyJob.workTime}</p>
                </div>

                <p className='text-xs sm:text-base lg:text-lg pl-3'>{applyJob.salary}</p>

                <div className='flex items-center gap-1 pl-3'>
                  <AccessTimeIcon
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
                  />
                  <p className='text-xs sm:text-base lg:text-lg'>{applyJob.postTime}</p>
                </div>
              </div>

            </div>
            <div className='pt-2 sm:pt-4 lg:pt-5'>
              <p className='text-sm sm:text-base lg:text-lg'>{applyJob.description}</p>
            </div>

          </div>

          {jobs.length === 0 ? (
            <p>No jobs applied yet!</p>
          ) : (
            jobs.map((job, index) => (


              <div className='bg-green-50 m-2 sm:m-4 lg:m-5 rounded-xl sm:rounded-2xl lg:rounded-4xl'>
                <div className='flex flex-col gap-1.5 sm:gap-4 lg:gap-8 p-3 sm:p-5 lg:p-10'>

                  <div className='flex flex-col gap-2'>
                    {/* sending  */}
                    <div className='flex gap-1'>
                      <p className='text-base sm:text-lg lg:text-xl font-bold'>to:</p>
                      <p className='text-base sm:text-lg lg:text-xl font-bold'>{applyJob.shortName}</p>
                    </div>

                    {/* status  */}
                    <div className='flex gap-1'>
                      <p className='text-base sm:text-lg lg:text-xl font-bold'>Status:</p>
                      <p className='text-base sm:text-lg lg:text-xl font-bold text-green-500'>Pending</p>
                    </div>

                    {/* salary  */}
                    <div className='flex gap-2 items-center'>
                      <p className='text-base sm:text-lg lg:text-xl font-bold'>Expection Salary:</p>
                      <p className='text-base sm:text-lg lg:text-xl font-bold'>{job.salary}</p>
                    </div>
                  </div>

                  {/* project  */}
                  <div className='flex flex-col gap-3'>
                    <p className='text-base sm:text-lg lg:text-xl font-bold'>Attach Projects</p>

                    <div className='w-full flex gap-4'>
                      <div className='h-20 w-20 sm:h-40 sm:w-40 lg:h-60 lg:w-60 flex-shrink-0'>
                        <img src={job.image} className='h-full w-full outline-none object-cover border-1 sm:border-2 lg:border-3 border-white hover:border-green-500' />
                      </div >
                      <p className='text-xs sm:text-base lg:text-lg font-semibold'>{job.projectDescription}</p>
                    </div>

                  </div>


                  {/* job description  */}
                  <div className='flex flex-col gap-1 sm:gap-2 lg:gap-3'>
                    <p className='text-base sm:text-lg lg:text-xl font-bold'>Purposal Letter</p>
                    <p className='text-xs sm:text-base lg:text-lg font-semibold'>{job.proposalLetter}</p>
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