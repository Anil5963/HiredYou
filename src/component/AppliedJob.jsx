import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router-dom';

function AppliedJob() {
  return (
    <div className='bg-black'>

      <div className='m-10 border-4 border-green-500'>
        <div className='w-full bg-black'>
          <div className='pt-10 px-10'>
            <h1 className='text-green-500 text-3xl font-bold'>Senior Software Engineer - Frontend</h1>
          </div>
          <div className='flex flex-col gap-5 font-bold text-white pt-4 px-10'>

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

        <div className='bg-green-300 m-5'>
        <div className='flex flex-col gap-8 p-10'>
          {/* salary  */}
          <div className='flex gap-2 items-center'>
            <p className='text-2xl font-bold'>Expection Salary:</p>
            <p className='text-2xl font-bold'>$20,000 - $40,000</p>
          </div>

          {/* project  */}
          <div className='flex flex-col gap-3'>
            <p className='text-2xl font-bold'>Attach Projects</p>

            <div className='flex flex-col gap-3'>
              <div className='h-60 w-60'>
                <img src={""} className='h-full w-full outline-none object-cover border-3 border-gray-500 hover:border-green-500' />
              </div >
              <p className='text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi alias voluptas minus modi iure! Ratione culpa harum excepturi asperiores impedit quos adipisci eius quis sapiente nam doloribus recusandae non a delectus alias iste vero voluptate aliquid distinctio minima quia, voluptatem quaerat itaque consequuntur? Quas dolor veritatis culpa et ipsum voluptas?</p>
            </div>

          </div>


          {/* job description  */}
          <div className='flex flex-col gap-3'>
            <p className='text-2xl font-bold'>Purposal Letter</p>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id, adipisci rem, quia fuga eligendi nobis et, atque odit ullam distinctio quisquam ut architecto dolorum enim asperiores hic voluptatem! Sed sit, impedit distinctio aut numquam corrupti reprehenderit, eligendi assumenda illo nostrum laborum magni et saepe dignissimos cumque quod modi veniam. Reprehenderit quibusdam itaque recusandae officia accusantium facilis distinctio minima ullam unde consectetur, natus deleniti accusamus deserunt voluptatum autem est enim assumenda! Earum saepe sed est quos quia a eius libero animi tempora, praesentium dolorum qui rerum error nisi quidem facilis distinctio tempore illum aut iste quae ea. Maxime, maiores sunt?</p>
          </div>

        </div>
        </div>

      </div>
    </div>
  )
}

export default AppliedJob