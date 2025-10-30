import React from 'react'

function Footer() {
  return (

    <div >
      <div className='pt-20 w-full bg-black'>
        <div className='flex flex-col items-center pt-5 gap-3'>
          <h1 className='text-4xl font-bold'>Browse HiredYou</h1>
          <div className='flex flex-col items-center'>
            <p className='text-lg -mb-1.5'>Browse HiredYou for jobs, view local and national salary information, discover companies,</p>
            <p className='text-lg'> and learn about the job market in a specific city.</p>
          </div>
        </div>

        <div className='flex justify-center gap-20 mt-10'>
          <div className='flex flex-col'>
            <p className='font-bold text-lg'>Job Seeker Tools</p>
            <p >Salary Estimator</p>
            <p >Glassdoor Community</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-lg'>Employer Tools</p>
            <p>Post Jobs</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-lg'>Browse</p>
            <p>All Jobs</p>
            <p>All Salaries</p>
            <p>All Cities</p>
            <p>All Companies</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-lg'>Stay Connected</p>
            <p>Contact Us</p>
          </div>

        </div>
      </div>

      <div className='h-20 bg-black flex justify-center items-center gap-10'>
        <p className='text-3xl font-bold'>HiredYou</p>
        <input type="text" placeholder='Country' className='flex items-center h-8 w-48 rounded-xl pl-3 outline-none border-2 border-gray-100 hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500' />
        <input type="text" placeholder='Remote' className='flex items-center h-8 w-48 rounded-xl pl-3 outline-none border-2 border-gray-100 hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500' />
      </div>


    </div>


  )
}

export default Footer