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
        <div className='xl:h-18 xl:w-full bg-black lg:h-16 lg:w-full md:h-12 md:w-full sm:h-10 sm:w-full'>
            <div className='flex xl:px-10 xl:h-full xl:w-full lg:px-8 lg:h-full lg:w-full md:px-4 md:h-full md:w-full sm:px-3 sm:h-full sm:w-full'>

                <NavLink to='/'>
                    <div className='flex items-center xl:gap-2 xl:h-full lg:gap-1 lg:h-full md:gap-1 md:h-full sm:gap-1 sm:h-full'>
                        <img src={Logo} alt="Logo" className='xl:h-10 xl:w-10 rounded-full lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-5 sm:w-5' />
                        <h1 className='xl:font-bold xl:text-3xl lg:font-bold lg:text-xl md:font-bold md:text-lg sm:font-bold sm:text-sm'>HiredYou</h1>
                    </div>
                </NavLink>

                <div className='flex items-center xl:h-full xl:ml-10 lg:h-16 lg:ml-5 md:h-12 md:ml-3 sm:h-10 sm:ml-1.5'>
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        placeholder='Job Title, Skills Or Company'
                        className='xl:h-10 xl:w-72 rounded-xl xl:pl-3 lg:h-8 lg:w-60 lg:pl-2 md:h-7 md:w-52 md:pl-2 sm:h-5 sm:w-36 sm:pl-1 sm:text-xs outline-none border-2 border-gray-100 hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500' />
                </div>

                <div className='flex items-center xl:h-full xl:ml-10 lg:h-16 lg:ml-5 md:h-12 md:ml-3 sm:h-10 sm:ml-1.5'>
                    <input
                        type="text"
                        value={inputLocation}
                        onChange={(e) => setInputLocation(e.target.value)}
                        placeholder='City, State, Zip Or Remote'
                        className='xl:h-10 xl:w-72 rounded-xl xl:pl-3 lg:h-8 lg:w-60 lg:pl-2 md:h-7 md:w-52 md:pl-2 sm:h-5 sm:w-36 sm:pl-1 sm:text-xs outline-none border-2 border-gray-100 hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500' />
                </div>

                <div className='flex items-center xl:h-full xl:ml-10 lg:h-16 lg:ml-5 md:h-12 md:ml-3'>
                    <button
                        className='xl:h-10 xl:w-28 border-none xl:bg-green-500 xl:rounded-2xl xl:font-bold lg:h-8 lg:w-24 lg:bg-green-400 lg:rounded-xl lg:font-bold lg:text-sm sm:h-5 sm:w-18 sm:bg-green-400 sm:rounded-xl sm:font-medium sm:text-xs md:h-6 md:w-20 md:bg-green-400 md:rounded-xl md:font-semibold md:text-xs hover:bg-green-700 cursor-pointer'
                        onClick={() => dispatch(inputsValue({ inputTitle, inputLocation }))}
                    >Search Jobs</button>
                </div>

                <div className='flex items-center xl:h-full xl:ml-auto xl:gap-8 lg:h-16 lg:ml-auto lg:gap-4 md:h-12 md:ml-auto md:gap-2 sm:h-10 sm:ml-auto sm:gap-1.5'>

                    <NavLink to='/postjob'>
                        <div className='flex items-center xl:h-full xl:gap-2 lg:h-full lg:gap-1 md:h-full md:gap-1 sm:h-full sm:gap-0.5'>
                            <AllInboxIcon sx={{ fontSize: { xs: 16, md: 20, lg: 22, xl: 24 } }} />
                            <p className='xl:font-bold xl:text-lg lg:font-bold lg:text-sm md:font-semibold md:text-xs sm:font-normal sm:text-xs cursor-pointer'>Post Job</p>
                        </div>
                    </NavLink>

                    <NavLink to='/profile'>
                        <div className='flex items-center xl:h-full lg:h-16 md:h-12 sm:h-10'>
                            <img src={User} className='xl:h-10 xl:w-10 xl:rounded-full lg:h-8 lg:w-8 lg:rounded-full md:h-6 md:w-6 md:rounded-full sm:h-5 sm:w-5 sm:rounded-full cursor-pointer' />
                        </div>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default Navbar