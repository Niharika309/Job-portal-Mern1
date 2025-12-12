import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-200 py-8'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-xl font-bold'>Job Portal</h2>
                    <p className='text-sm text-gray-600 mt-2'>© 2024 Your Company. All rights reserved.</p>
                </div>
                
                <div className='flex space-x-4 text-sm text-gray-600'>
                    <a href="#" className='hover:text-gray-900'>Privacy Policy</a>
                    <a href="#" className='hover:text-gray-900'>Terms of Service</a>
                    <a href="#" className='hover:text-gray-900'>Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer