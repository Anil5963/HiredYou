import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router-dom';

function JobDetails() {
  return (
    <div className='h-screen w-full bg-black'>
      <div className='pt-10 px-10'>
        <h1 className='text-green-500 text-3xl font-bold'>Senior Software Engineer - Frontend</h1>
      </div>
      <div className='flex flex-col gap-5 font-bold text-white pt-4 px-10'>


        <div className='flex justify-between'>

          <div className='flex flex-col gap-5'>
            {/* company logo and name  */}
            <div className='flex gap-1 items-center'>
              <BusinessIcon />
              <p className='text-xl'>Veera System</p>
            </div>

            {/* location  */}
            <div className='flex items-center'>
              <LocationOnIcon />
              <p className='text-xl'>Remote</p>
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
            <p className='text-lg'>Full Time</p>
          </div>

          <p className='text-lg pl-3'>$100,000 - $200,000 per year</p>

          <div className='flex gap-1 pl-3'>
            <AccessTimeIcon />
            <p className='text-lg'>22 hours ago</p>
          </div>
        </div>

      </div>
      <div className='px-10 pt-5'>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias facere veniam repellat officia aperiam magnam sint dolorum. Sapiente, sed. Officia sequi hic cumque voluptas officiis, vitae, quasi a repellendus enim veritatis temporibus illum, magnam perspiciatis nihil in. Consequuntur fugit dignissimos ratione porro esse tempora nihil voluptatem recusandae eius doloremque magni, velit quod ipsam quaerat culpa quidem. Qui molestiae nulla placeat debitis optio iure tempore, corporis illum molestias maiores, quibusdam voluptates illo? Voluptates natus ipsum nemo, officiis, modi doloribus eum, vero optio sequi voluptatibus beatae et in eius sapiente impedit ut quae sint! Ab enim natus quos delectus, obcaecati aut.</p>
      </div>

    </div>
  )
}

export default JobDetails