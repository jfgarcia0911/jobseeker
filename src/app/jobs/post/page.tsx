import React, { FormEvent } from 'react'



export default function PostJobPage() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      type: formData.get("type"),
      description: formData.get("description"),
      salary: formData.get("salary"),
    }
    console.log(data);
  }

  return (
    <div className='max-w-2xl mx-auto  px-4'>
      <form>
        <h1 className='text-2xl font-bold mb-6 text-gray-900'>Post a Job</h1>
        <div>
            <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Job Title</label>
            <input type="text" id="title" name="title" required 
            className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        <div>
            <label htmlFor="company" className='block text-sm font-medium text-gray-700'>Company </label>
            <input type="text" id="company" name="company" required 
            className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        <div>
            <label htmlFor="location" className='block text-sm font-medium text-gray-700'>Location </label>
            <input type="text" id="location" name="location" required 
            className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        <div>
            <label htmlFor="type" className='block text-sm font-medium text-gray-700'>Job Type</label>
            <select name="type" id="type" required className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'>
                <option value="">Select a type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="intership">Internship</option>
            </select>
        </div>

        <div>
            <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description </label>
            <textarea id="description" name="description" rows={6} required 
            className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        <div>
            <label htmlFor="salary" className='block text-sm font-medium text-gray-700'>Salary (optional) </label>
            <input type="text" id="salary" name="salary" placeholder='e.g., $80,000 - $100,000'
            className='w-full border border-gray-400 p-2 mb-5 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        <button type='submit' className='w-full bg-blue-600 text-white p-2 mb-5 mt-1 rounded-md hover:bg-blue-700'>Post Job</button>
      </form>
    </div>
  )
}
