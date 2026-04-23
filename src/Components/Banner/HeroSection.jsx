import React from 'react'
import { AllApps } from '../../Apps/AllApps'
import { TrendingApps } from '../../Apps/TrendingApps'

const HeroSection = () => {
  return (
    <>
      <div className='bg-[#D2D2D2] flex flex-col items-center px-15'>
        <p className='text-black font-bold text-6xl text-center mt-10 leading-18'>We Build <br /> <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</p>
        <p className='text-[#627382] text-center font-light text-xl mt-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className='mt-10 flex items-center gap-5 text-black'>
          <a href='https://play.google.com/store/apps?hl=en&pli=1' className='border border-gray-400 bg-[#D2D2D2] px-5 py-2 rounded-sm text-2xl hover:cursor-pointer hover:bg-gray-400'> <i className="fa-brands fa-google-play mr-2"></i>Google Play</a>
          <a href='https://apps.apple.com/fr/iphone/today' className='border border-gray-400 bg-[#D2D2D2] px-5 py-2 rounded-sm text-2xl hover:cursor-pointer hover:bg-gray-400'> <i className="fa-brands fa-app-store mr-2"></i>App Store</a>
        </div>
        <img className='mt-10' src="hero.png" alt="" />
      </div>
      <div className='flex flex-col items-center px-15 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-15 gap-5'>
        <h1 className='text-4xl mb-2 font-semibold'>Trusted By Millions, Built For You</h1>
        <div className='flex items-center justify-between gap-26'>
          <div className='flex flex-col items-center'>
            <p className='text-sm mb-2 font-light text-gray-300'>Total Downloads</p>
            <h1 className='text-4xl font-bold text-[50px] mb-2'>29.6M</h1>
            <p className='text-sm mb-2 font-light text-gray-300'>21% More Than Last Month</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-sm mb-2 font-light text-gray-300'>Total Reviews</p>
            <h1 className='text-4xl font-bold text-[50px] mb-2'>906K</h1>
            <p className='text-sm mb-2 font-light text-gray-300'>46% More Than Last Month</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-sm mb-2 font-light text-gray-300'>Active Apps</p>
            <h1 className='text-4xl font-bold text-[50px] mb-2'>132+</h1>
            <p className='text-sm mb-2 font-light text-gray-300'>31 More Will Launch</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection