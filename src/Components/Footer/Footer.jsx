import React from 'react'

const Footer = () => {
  return (
    <div className='px-15  py-5 bg-[#001931]'>
        <div className='flex justify-between items-center border-b border-[#627382] pb-2'>
            <div className='flex items-center gap-2'>
                <img src="logo.png" alt=""  className='w-10 h-10'/>
                <h1>HERO.IO</h1>
            </div>
            <div>
                <p className='mb-3 text-3xl font-medium'>Social Links</p>
                <div className='w-full flex items-center gap-3'>
                    <span className='border bg-white w-8 h-8 text-black rounded-full flex items-center justify-center'><i class="fa-brands fa-x-twitter w-4 h-4"></i></span>
                    <span className='border bg-white w-8 h-8 text-black rounded-full flex items-center justify-center'><i class="fa-brands fa-linkedin w-4 h-4"></i></span>
                    <span className='border bg-white w-8 h-8 text-black rounded-full flex items-center justify-center'><i class="fa-brands fa-facebook-f w-4 h-4"></i></span>
                </div>
                
            </div>
            
        </div>
        <p className='text-center mt-7 mb-5 text-gray-300 font-light'>Copyright © 2026 HERO.IO. All rights reserved.</p>
    </div>
  )
}

export default Footer