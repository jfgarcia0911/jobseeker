"use client"

import React from 'react'
import { RiBriefcase4Fill } from "react-icons/ri";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { logout } from '@/lib/auth';
import { useRouter } from "next/navigation";
export default function Navbar() {

  const router = useRouter();
  const { data: session, update } = useSession();

  const handleLogout = async () => {
    await logout();
    await update();
    // Force refresh to clear client-side cache
    router.refresh();
  };
  
  return (
    <nav className='flex items-center justify-center bg-white  shadow-md'>
      <div className='block sm:flex items-center justify-center sm:justify-between p-4  md:w-7xl text-gray-500 '>
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
            <button className=' hover:text-gray-700'  onClick={handleLogout}>Sign Out</button>
            </> 
            :
             <Link className=' hover:text-gray-700' href="/auth/signin">Sign In</Link>} 
        </div>
      </div>
    </nav>
  )
}
