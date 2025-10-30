import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom';

function JobList() {
    return (
        <div className='h-screen w-full bg-black'>

            <NavLink to="/jobdetails">
                <div className='pt-10 px-10'>
                    <h1 className='text-green-500 text-xl font-bold'>Senior Software Engineer - Frontend</h1>
                </div>
                <div className='flex gap-6 font-bold text-white pt-4 px-10'>
                    <p>Veera System</p>
                    <p>Remote</p>
                    <div className='flex items-center gap-0.5'>
                        <p>3.5</p>
                        <span className='text-gold'>
                            <StarIcon sx={{ fontSize: 16, color: "#22c55e" }} />
                        </span>
                    </div>

                </div>
                <div className='px-10 pt-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias facere veniam repellat officia aperiam magnam sint dolorum. Sapiente, sed. Officia sequi hic cumque voluptas officiis, vitae, quasi a repellendus enim veritatis temporibus illum, magnam perspiciatis nihil in. Consequuntur fugit dignissimos ratione porro esse tempora nihil voluptatem recusandae eius doloremque magni, velit quod ipsam quaerat culpa quidem. Qui molestiae nulla placeat debitis optio iure tempore, corporis illum molestias maiores, quibusdam voluptates illo? Voluptates natus ipsum nemo, officiis, modi doloribus eum, vero optio sequi voluptatibus beatae et in eius sapiente impedit ut quae sint! Ab enim natus quos delectus, obcaecati aut.</p>
                </div>
                <div className='flex px-10 pt-3 gap-20'>
                    <p className='text-green-500 font-semibold'>$100,000 - $225,000</p>
                    <p>22h</p>
                </div>
            </NavLink>

        </div>
    )
}

export default JobList