"use client"

import React from 'react'
import { RiBriefcase4Fill } from "react-icons/ri";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { logout } from '@/lib/auth';
export default function Navbar() {

  const { data: session } = useSession();

  return (
    <nav>
      <div className=' flex items-center justify-between py-4 mx-[300px] text-gray-500 '>
        <div >
            
            <Link href="/" className='flex items-center space-x-2'>
            <div>
                <RiBriefcase4Fill className='h-6 w-6 text-gray-800' />

            </div>
            <div>
                <h1 className='font-bold text-xl text-gray-700'>Job Board</h1>
            </div>
            </Link>
        </div>
        <div className='flex items-center space-x-10 text-sm'>
           <Link className=' hover:text-gray-700' href="/jobs">Browse Jobs</Link> 
           
           {session?
           <>
           <Link className=' hover:text-gray-700' href="/jobs/post">Post a Jobs</Link> 
           <Link className=' hover:text-gray-700' href="/dashboard">Dashboard</Link> 
            <Link className=' hover:text-gray-700' href="/auth/signout" onClick={logout}>Sign Out</Link>
            </> 
            :
             <Link className=' hover:text-gray-700' href="/auth/signin">Sign In</Link>} 
        </div>
      </div>
    </nav>
  )
}
