import React, { useState } from 'react'
import AppsDetails from '../Pages/AppsDetails/AppsDetails'
import AppsCard from '../Components/AppsCard/AppsCard';
import { Link } from 'react-router-dom';

export const AllApps = ({ data }) => {
    const [search, setSearch] = useState("");
    const filtered = data.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.companyName.toLowerCase().includes(search.toLowerCase())
    );
    const goBack = () => {
        setSearch("");
        <Link to="/apps">
        </Link>
    }
    return (
        <>
            <div className='bg-[#D2D2D2] py-10 text-center'>
                <h1 className='text-5xl text-black font-semibold mb-5'>Our All Applications</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us. We code for Millions</p>
                <div className='flex items-center justify-between text-black px-10'>
                    <h1 className='text-xl font-bold'>({data.length}) Apps Found</h1>
                    <div>
                        <span className='absolute left-353 top-62'>🔍</span><input className='px-8 py-2 rounded-md border-1 border-[#627382]' type="text" placeholder="Search Apps" onChange={e => setSearch(e.target.value)} value={search} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-10 mt-10 pb-28'>
                    {
                        filtered.map(app => (
                            <AppsCard key={app.id} app={app} />
                        ))
                    }
                    {filtered.length === 0 && (
                        <div className='flex flex-col my-10 w-full h-100 col-span-full gap-y-5'>
                            <div className='flex items-center justify-center'>
                                <img className='w-[420px] h-[370px] ' src="App-Error.png" alt="No apps found" />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-y-5'>
                                <h1 className='text-black text-5xl font-bold mt-5'>OPPS!! APP NOT FOUND</h1>
                                <p className='text-[#627382]'>The App you are requesting is not found on our system. Please try another apps.</p>
                                {
                                    search && (
                                        <button onClick={goBack} className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded-md w-[150px] text-center hover:cursor-pointer'>Go Back!</button>)
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
