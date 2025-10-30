import React from 'react'

function PostJob() {
    return (
        <div className='bg-black w-full'>
            <div className='flex flex-col p-10 gap-5'>

                {/* job title  */}
                <div>
                    <p className='text-2xl'>Job Titles</p>
                    <input type="text" placeholder='Job titles' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* company name  */}
                <div>
                    <p className='text-2xl'>Company Name</p>
                    <input type="text" placeholder='Company Name' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* location  */}
                <div>
                    <p className='text-2xl'>Location</p>
                    <input type="text" placeholder='Location' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* salary  */}
                <div>
                    <p className='text-2xl'>Salary</p>
                    <input type="text" placeholder='Salary' className="h-8 w-72 pl-3 rounded-xl outline-none border-2 border-white hover:border-green-500 focus:border-green-500" />
                </div>

                {/* job description  */}
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl'>Job Description</p>
                    <textarea className='h-80 w-full bg-gray-100 outline-none p-4 text-lg hover:border-2 hover:border-green-500 focus:border-2 focus:border-green-500 ' placeholder='Job description...'></textarea>
                </div>

                <div className='w-full flex justify-center'>
                    <button className='flex justify-center items-center text-xl font-bold px-4 py-2 bg-green-500 hover:bg-green-700 rounded-xl'>Post Now</button>
                </div>

            </div>

        </div>
    )
}

export default PostJob