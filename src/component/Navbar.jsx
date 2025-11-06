import React, { useState } from 'react'
import Logo from '../assets/owl-logo.jpg'
import User from '../assets/owl-head-logo.jpg'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { NavLink } from 'react-router-dom';
import { inputsValue } from '../features/job.features';
import { useDispatch } from 'react-redux';

function Navbar() {
    const [inputTitle, setInputTitle] = useState("")
    const [inputLocation, setInputLocation] = useState("")

    const dispatch = useDispatch()

    return (
        <div className='bg-black w-full'>
            <div className='w-full flex flex-col py-5 px-3 sm:px-5 lg:flex-row lg:justify-between lg:items-center'>

                <div className=' flex flex-col lg:flex-row lg:items-center lg:gap-6'>
                    <NavLink to='/'>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <img src={Logo} alt="Logo" className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden' />
                            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>HiredYou</h1>
                        </div>
                    </NavLink>

                    <div className='flex flex-col gap-2 py-3 sm:flex-row lg:gap-3'>
                        <input
                            type="text"
                            value={inputTitle}
                            onChange={(e) => setInputTitle(e.target.value)}
                            placeholder='Job Title, Skills Or Company'
                            className="h-6 text-xs w-48 sm:h-7 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none text-white border-2 border-white hover:border-green-500 focus:border-green-500" />

                        <input
                            type="text"
                            value={inputLocation}
                            onChange={(e) => setInputLocation(e.target.value)}
                            placeholder='City, State, Zip Or Remote'
                            className="h-6 text-xs w-48 sm:h-7 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none text-white border-2 border-white hover:border-green-500 focus:border-green-500" />

                        <button
                            className='bg-green-500 w-18 rounded-xl font-semibold hover:bg-green-700 pointer-coarse text-white'
                            onClick={() => dispatch(inputsValue({ inputTitle, inputLocation }))}
                        >Search</button>
                    </div>
                </div>

                <div className='flex items-center gap-3 sm:gap-4 '>

                    <NavLink to='/postjob'>
                        <div className='flex items-center gap-0.5'>
                            <AllInboxIcon sx={{ fontSize: { xs: 16, md: 20, lg: 22, xl: 24 } }} />
                            <p className='text-sm sm:text-base lg:text-lg font-semibold text-white'>Post</p>
                        </div>
                    </NavLink>

                    <NavLink to='/profile'>
                        <div className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden'>
                            <img src={User} className='object-cover' />
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Navbar