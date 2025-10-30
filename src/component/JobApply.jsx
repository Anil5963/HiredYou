import React from 'react'

function JobApply() {
    return (
        <div className='bg-black'>
            <div className='flex flex-col gap-8 p-10'>
                {/* salary  */}
                <div>
                    <p className='text-2xl'>Expection Salary</p>
                    <input type="text" placeholder='Expection Salary Per Year' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* project  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Attach Projects</p>

                    <div className='flex flex-col gap-3'>
                        <div className='h-60 w-60'>
                            <img src={""} className='h-full w-full outline-none object-cover border-3 border-gray-500 hover:border-green-500' />
                        </div>
                        <button className='w-32 text-sm px-3 py-2 rounded-2xl bg-green-500 pointer-coarse:'>Upload File</button>
                    </div>

                    <textarea className='h-32 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Project Description...'></textarea>

                </div>


                {/* job description  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Purposal Letter</p>
                    <textarea className='h-80 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Purposal Letter...'></textarea>
                </div>

                {/* submit  */}
                <div>
                    <button className='w-32 text-xl font-bold px-2.5 py-2 rounded-2xl bg-green-500 pointer-coarse:'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default JobApply