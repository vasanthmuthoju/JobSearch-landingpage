import React from 'react'

function Footer() {
  return (
    <div>
         <div className='text-center'>
         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Career Journey?</h3>
         <p className="text-lg text-gray-600 mb-6">Join thousands of users who have found their dream jobs through JobSearch. We connect you with the best opportunities tailored to your skills.</p>

        </div>    
        <div className="bg-blue-100 text-center p-6 mt-12">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} JobSearch. All rights reserved.</p>
        </div>
    </div>
   
  )
}

export default Footer
