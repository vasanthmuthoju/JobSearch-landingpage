import React from 'react'
import Button from './Button'


function header() {
  return (
    <div>
      <h1 className='bg-blue-500 p-3 text-2xl text-white font-extrabold'>Job-Search</h1>

      <div className='flex justify-between'>
        <div className='grid grid-cols-1  sm:grid-cols-2 mt-4 md:grid-cols-3  lg:grid-cols-3 justify-baseline gap-5 items-start text-blue-500 text-xl  font-bold ml-10 '>
        <button className='hover:underline cursor-pointer'>Jobs</button>
        <button className='hover:underline cursor-pointer'>Companies</button>
        <button className='hover:underline cursor-pointer'>Services</button></div>

        <div className=' gap-3 mr-3 grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 '  >
          <Button label='Login'/>
          <Button label='Signup'/>
        </div>
      </div>
    </div>
  )
}

export default header
