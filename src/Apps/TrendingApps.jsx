import React from 'react'
import { Link } from 'react-router-dom'
import AppsDetails from '../Pages/AppsDetails/AppsDetails';
import AppsCard from '../Components/AppsCard/AppsCard';

export const TrendingApps = ({ data }) => {
  const appsToDisplay = data.slice(0, 8);
  console.log(appsToDisplay);
  return (
    <>
      <div className='bg-[#D2D2D2] py-10 text-center'>
        <h1 className='text-5xl text-black font-semibold mb-5'>Trending Apps</h1>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-10 mt-10 '>
          {
            appsToDisplay.map(app => (
              <AppsCard key={app.id} app={app} />
            ))
          }
        </div>
        <Link to="/apps">
          <button className='mt-7 mb-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-12 py-3 rounded-md hover:cursor-pointer'>Show All</button>
        </Link>
      </div>
    </>
  )
}
