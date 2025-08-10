import React from 'react'

export default function PostJobPage() {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6 text-gray-900'>Post a Job</h1>
      <form >
        <div>
            <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Job Title</label>
            <input type="text" id="title" name="title" required 
            className='w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2' />
        </div>

        <div>
            <label htmlFor="type" className='block text-sm font-medium text-gray-700'>Job Type</label>
            <select name="type" id="type" required className='w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2'>
                <option value="">Select a type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="intership">Internship</option>
            </select>
        </div>
      </form>
    </div>
  )
}
