import React from 'react'

function Footer() {
  return (

    <div className='w-full bg-black'>
      <div className='pt-20 px-3 sm:px-5 lg:px-10'>
        <div className='flex flex-col sm:items-center pt-5 gap-1 sm:gap-2 lg:gap-3'>
          <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold text-white'>Browse HiredYou</h1>
          <div className='flex flex-col sm:items-center'>
            <p className='text-xs sm:text-sm lg:text-lg -mb-0.5 sm:-mb-1  lg:-mb-1.5 text-white'>Browse HiredYou for jobs, view local and national salary information, discover companies,</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'> and learn about the job market in a specific city.</p>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:flex sm:justify-center gap-5 sm:gap-10 lg:gap-20 my-3 sm:my-5 lg:my-10'>
          <div className='flex flex-col'>
            <p className='font-bold text-xs sm:text-sm lg:text-lg text-white'>Job Seeker Tools</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>Salary Estimator</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>Glassdoor Community</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-xs sm:text-sm lg:text-lg text-white'>Employer Tools</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>Post Jobs</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-xs sm:text-sm lg:text-lg text-white'>Browse</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>All Jobs</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>All Salaries</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>All Cities</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>All Companies</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-xs sm:text-sm lg:text-lg text-white'>Stay Connected</p>
            <p className='text-xs sm:text-sm lg:text-lg text-white'>Contact Us</p>
          </div>

        </div>
      </div>

      <div className='bg-black flex flex-col sm:flex-row sm:justify-center py-2 gap-2 sm:gap-5 lg:gap-10 px-3 sm:px-5 lg:px-10'>
        <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-white'>HiredYou</p>
        <input 
        type="text" 
        placeholder='Salary' 
        className="text-white h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-56 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" 
        />

        <input 
        type="text" 
        placeholder='Remote' 
        className="text-white h-6 text-xs w-48 sm:h-6 lg:h-8 sm:w-56 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" 
        />
      </div>


    </div>


  )
}

export default Footer