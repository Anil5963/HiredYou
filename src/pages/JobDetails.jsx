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
  const posted = useSelector((state) => state.jobData.postJob)

  const lastPosted = Array.isArray(posted) ? posted[posted.length - 1] : null;

  const isUserPostedJob = Array.isArray(posted)
    ? posted.some(p => p.jobTitle === job?.jobTitle && p.companyName === job?.companyName)
    : false;

  return (
    <div className='h-screen w-full bg-black'>

      {isUserPostedJob ? (
        <p className="text-red-500 text-2xl font-bold">
          You posted this job — you can’t apply to it.
        </p>
      ) : (

        <div>
          <div className=' pt-5 px-3 lg:pt-10 lg:px-10'>
            <h1 className='text-green-500 text-lg font-bold sm:text-xl sm:font-bold lg:text-3xl lg:font-bold'>{job.jobTitle}</h1>
          </div>
          <div className='flex flex-col gap-2 pt-2 px-3 sm:gap-3 sm:pt-3 sm:px-5 lg:gap-5 lg:font-bold lg:pt-4 lg:px-10'>


            <div className='flex justify-between'>

              <div className='flex flex-col gap-1 sm:gap-3 lg:gap-5'>
                {/* company logo and name  */}
                <div className='flex gap-0.5 sm:gap-1 lg:gap-1 items-center text-white'>
                  <BusinessIcon
                    sx={{
                      fontSize: {
                        xxs: 10,
                        xs: 12,
                        sm: 14,
                        md: 16,
                        lg: 18,
                        xl: 20,
                      }
                    }}
                  />
                  <p className=' text-base sm:text-lg lg:text-xl text-white'>{job.companyName}</p>
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
                  <p className='text-base sm:text-lg lg:text-xl text-white'>{job.location}</p>
                </div>
              </div>

              <NavLink to="/jobapply">
                <div>
                  <button
                    className='bg-green-500 px-2 py-1 text-sm font-semibold sm:px-4 sm:py-2 sm:text-base sm:font-semibold lg:px-5 lg:py-2 rounded-xl lg:font-bold lg:text-xl text-white'>Apply
                    <OpenInNewIcon
                      sx={{
                        fontSize: {
                          xxs: 10,
                          xs: 12,
                          sm: 14,
                          md: 16,
                          lg: 18,
                          xl: 20,
                        }
                      }}
                    />
                  </button>
                </div>
              </NavLink>
            </div>

            {/* Job Details  */}
            <div className='flex flex-col gap-1 lg:gap-2'>
              <p className='text-base sm:text-lg sm:font-semibold lg:text-xl lg:font-bold text-white'>Job Details</p>

              <div className='flex items-center gap-1 pl-3 text-white'>
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
                <p className='text-xs sm:text-base lg:text-lg text-white'>{job.workTime}</p>
              </div>

              <p className='text-xs sm:text-base pl-3  lg:text-lg text-white'>{job.salary}</p>

              <div className='flex items-center gap-1 pl-3 text-white'>
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
                <p className='text-xs sm:text-base lg:text-lg text-white'>{job.postTime}</p>
              </div>
            </div>

          </div>
          <div className='px-3 pt-2 sm:px-5 sm:pt-3 lg:px-10 lg:pt-5'>
            <p className='text-sm sm:text-base lg:text-lg text-white'>{job.description}</p>
          </div>
        </div>
      )
      }

    </div>
  )
}

export default JobDetails