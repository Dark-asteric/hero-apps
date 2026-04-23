import React from 'react'
import { Link } from 'react-router-dom';
import AppsDetails from '../../Pages/AppsDetails/AppsDetails';

const AppsCard = ({ app }) => {

    return (
        <Link to={`/apps/${app.id}`} state={{ app }} className='bg-white hover:cursor-pointer'>
            <div className='flex items-start justify-center py-5'>
                <img className='w-[330px] h-[320px] rounded-lg object-cover' src={app.image} alt={app.name} />
            </div>
            <div className='pl-5 flex flex-col items-start'>
                <h1 className='text-xl text-black font-semibold mb-2'>{app.title}</h1>
                {/* <img src="icon-downloads.png" alt="icon downloads" />
                <img src="icon-ratings.png" alt="icon ratings" />
                <img src="icon-review.png" alt="icon review" /> */}
            </div>
            <div className='px-5 flex items-center justify-between my-2'>
                <div className='flex items-center gap-1 bg-[#F1F5E8] px-2 py-1 rounded-sm'>
                    <img className='w-3 h-3 ' src="icon-downloads.png" alt="" />
                    <p className='text-[#00D390]'>{app.downloads}</p>
                </div>
                <div className='flex items-center gap-1 bg-[#FFF0E1] px-2 py-1 rounded-sm'>
                    <img className='w-3 h-3 ' src="icon-ratings.png" alt="" />
                    <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                </div>
            </div>
        </Link>
    )
}

export default AppsCard