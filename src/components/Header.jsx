import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between m-8'>
      <h1 className='font-bold text-4xl hover:cursor-pointer'>Studio</h1>
      <div className='flex flex-row gap-8'>
        <h6 className='font-extralight hover:underline hover:cursor-pointer'>Home</h6>
        <h6 className='font-extralight hover:underline hover:cursor-pointer'>Services</h6>
        <h6 className='font-extralight hover:underline hover:cursor-pointer'>Portfolio</h6>
        <h6 className='font-extralight hover:underline hover:cursor-pointer'>About Us</h6>
      </div>
      <button className='font-semibold text-md bg-[#4F3DFE] rounded-md px-4 py-2'>Start a Project</button>
    </div>
  )
}

export default Header