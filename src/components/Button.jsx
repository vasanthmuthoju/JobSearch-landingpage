import React from 'react'

function Button({label}) {
  return (
    
        <button className='border-2 cursor-pointer border-blue-100 px-4 py-1 hover:bg-blue-400 rounded-3xl hover:text-white  text-blue-500  text-xl mt-2 font-bold '>
        {label}
        </button>
  )
}

export default Button
