import React from 'react'
import { RiBriefcase4Fill } from "react-icons/ri";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center justify-between py-3 mx-[300px] text-gray-500 '>
        <div >
            
            <Link href="/" className='flex items-center space-x-2'>
            <div>
                <RiBriefcase4Fill className='h-6 w-6 text-gray-800' />

            </div>
            <div>
                <h1 className='font-semibold text-lg text-gray-700'>Job Board</h1>
            </div>
            </Link>
        </div>
        <div className='flex items-center space-x-6 text-sm'>
           <Link className=' hover:text-gray-700' href="/jobs">Browse Jobs</Link> 
           <Link className=' hover:text-gray-700' href="/jobs/post">Post a Jobs</Link> 
           <Link className=' hover:text-gray-700' href="/dashboard">Dashboard</Link> 
           <Link className=' hover:text-gray-700' href="/auth/signin">Sign In</Link> 
        </div>
      </div>
    </nav>
  )
}
