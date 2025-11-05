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
        <div className='h-40 md:h-28  bg-black w-full flex justify-between'>
            <div className='relative flex justify-between px-3 '>

                <NavLink to='/'>
                    <div className='flex items-center gap-1'>
                        <img src={Logo} alt="Logo" className='h-10 w-10 rounded-full overflow-hidden object-cover' />
                        <h1 className='text-lg font-bold'>HiredYou</h1>
                    </div>
                </NavLink>

                <div className='absolute top-12 flex flex-col md:flex-row md:justify-center md:gap-3 gap-1.5 px-3'>
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        placeholder='Job Title, Skills Or Company'
                        className="h-6 text-xs w-48 sm:h-7 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />

                    <input
                        type="text"
                        value={inputLocation}
                        onChange={(e) => setInputLocation(e.target.value)}
                        placeholder='City, State, Zip Or Remote'
                        className="h-6 text-xs w-48 sm:h-7 lg:h-8 sm:w-52 lg:w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />

                    <button
                        className='bg-green-500 w-28 h-6 py-0.5 text-sm font-semibold sm:w-32 sm:h-7 sm:py-1 sm:text-base sm:font-semibold lg:h-8 lg:w-36  rounded-xl lg:font-bold lg:text-lg justify-center items-center'
                        onClick={() => dispatch(inputsValue({ inputTitle, inputLocation }))}
                    >Search Jobs</button>
                </div>
            </div>

            <div className='h-10 flex items-center gap-3 pr-3'>

                <NavLink to='/postjob'>
                    <div className='flex items-center gap-0.5'>
                        <AllInboxIcon sx={{ fontSize: { xs: 16, md: 20, lg: 22, xl: 24 } }} />
                        <p className='text-xs font-semibold'>Post Job</p>
                    </div>
                </NavLink>

                <NavLink to='/profile'>
                    <div className='h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden'>
                        <img src={User} className='object-cover' />
                    </div>
                </NavLink>

            </div>

        </div>
    )
}

export default Navbar