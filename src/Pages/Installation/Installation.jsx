import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortedApps, setSortedApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const loadInstalledApps = () => {
            try {
                const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
                setInstalledApps(apps);
                setSortedApps(apps);
            } catch (error) {
                console.error('Error loading installed apps:', error);
                toast.error('Failed to load installed apps');
            } finally {
                setLoading(false);
            }
        };

        loadInstalledApps();
    }, []);

    useEffect(() => {
        if (!sortOrder) {
            setSortedApps(installedApps);
            return;
        }

        const sorted = [...installedApps].sort((a, b) => {
            const parseDownloadCount = (downloadStr) => {
                if (!downloadStr) return 0;
                const num = parseFloat(downloadStr.replace(/[^0-9.]/g, ''));
                if (downloadStr.includes('B')) return num * 1000000000;
                if (downloadStr.includes('M')) return num * 1000000;
                if (downloadStr.includes('K')) return num * 1000;
                return num;
            };

            const countA = parseDownloadCount(a.downloads);
            const countB = parseDownloadCount(b.downloads);

            if (sortOrder === 'high-low') {
                return countB - countA;
            } else if (sortOrder === 'low-high') {
                return countA - countB;
            }
            return 0;
        });

        setSortedApps(sorted);
    }, [sortOrder, installedApps]);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        if (value) {
            toast.success(`Sorted by Downloads (${value === 'high-low' ? 'High to Low' : 'Low to High'})`, {
                duration: 2000,
                position: 'top-right',
                style: {
                    background: '#632EE3',
                    color: '#fff',
                    fontWeight: '600',
                },
                icon: '🔄',
            });
        }
    };

    const handleUninstall = (appId, appTitle) => {
        const confirmUninstall = window.confirm(`Are you sure you want to uninstall ${appTitle}?`);

        if (!confirmUninstall) {
            toast('Uninstall cancelled', {
                icon: 'ℹ️',
                style: {
                    background: '#6B7280',
                    color: '#fff',
                },
            });
            return;
        }

        try {
            const currentApps = JSON.parse(localStorage.getItem('installedApps')) || [];
            const updatedApps = currentApps.filter(app => app.id !== appId);
            localStorage.setItem('installedApps', JSON.stringify(updatedApps));
            setInstalledApps(updatedApps);

            toast.success(`${appTitle} uninstalled successfully!`, {
                duration: 3000,
                position: 'top-right',
                style: {
                    background: '#EF4444',
                    color: '#fff',
                    fontWeight: '600',
                },
                icon: '🗑️',
            });

            if (updatedApps.length === 0) {
                setTimeout(() => {
                    toast('No apps installed. Browse our collection!', {
                        duration: 4000,
                        icon: '📦',
                        style: {
                            background: '#632EE3',
                            color: '#fff',
                        },
                    });
                }, 1000);
            }
        } catch (error) {
            console.error('Error uninstalling app:', error);
            toast.error('Failed to uninstall app. Please try again.');
        }
    };
    const handleClearSort = () => {
        setSortOrder('');
        toast('Sorting cleared', {
            duration: 2000,
            icon: '🔓',
            style: {
                background: '#6B7280',
                color: '#fff',
            },
        });
    };

    if (loading) {
        return (
            <>
                <Toaster />
                <div className="bg-[#D2D2D2] min-h-screen flex items-center justify-center">
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-[#632EE3] mx-auto'></div>
                        <p className='text-xl text-gray-600 mt-4'>Loading installed apps...</p>
                    </div>
                </div>
            </>
        );
    }

    // console.log('Installed Apps:', installedApps);
    return (
        <>
            <Toaster />
            <div className='bg-[#D2D2D2] min-h-screen py-10'>
                <div className='text-center mb-10'>
                    <h1 className='text-5xl text-black font-semibold mb-3'>My Installed Apps</h1>
                    <p className='text-gray-500 text-lg'>Explore All Trending Apps on the Market developed by us.</p>
                </div>
                <div className='px-15 mb-8 flex justify-between items-center'>
                    <h1 className='text-black font-semibold text-xl'>{installedApps.length} Apps Found</h1>
                    <div>
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className='rounded-sm border p-10 border-gray-300 bg-[#D2D2D2] border-gray-400 text-gray-500 font-regular'
                        >
                            <option className='p-5' value=''>Sort By Downloads</option>
                            <option value='high-low'>High to Low</option>
                            <option value='low-high'>Low to High</option>
                        </select>

                        {sortOrder && (
                            <button
                                onClick={handleClearSort}
                                className='px-4 py-1 ml-3 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors'
                            >
                                Clear Sort
                            </button>
                        )}
                    </div>
                </div>

                <div>
                    {sortedApps.length === 0 ? (
                        <div className='flex flex-col my-10 w-full h-100 col-span-full gap-y-5'>
                            <div className='flex items-center justify-center'>
                                <img className='w-[420px] h-[370px] ' src="App-Error.png" alt="No apps found" />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-y-5'>
                                <h1 className='text-black text-5xl font-bold mt-5'>OPPS!! NO APPS INSTALLED</h1>
                                <p className='text-[#627382]'>You have not installed any apps yet. Please explore our collection and install your favorite apps.</p>
                                <Link to="/apps">
                                    <button className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded-md w-[150px] text-center hover:cursor-pointer'>Browse Apps</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className='px-15'>
                            {sortedApps.map(app => (
                                <div key={app.id} className='flex items-center justify-between gap-y-5 py-5 bg-white px-3 rounded-md mb-5'>
                                    <div className='flex items-center gap-5'>
                                        <img className='w-[80px] h-[80px] rounded-lg object-cover' src={app.image} alt={app.name} />
                                        <div>
                                            <h1 className='text-xl text-black font-semibold'>{app.title}</h1>
                                            <div className='flex gap-5 mt-2'>
                                                <div className='flex items-center'>
                                                    <img className='w-[16px] h-[16px] ' src="/public/icon-downloads.png" alt="" />
                                                    <p className='text-[#00D390] ml-1'>{app.downloads}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <img className='w-[16px] h-[16px] ' src="/public/icon-ratings.png" alt="" />
                                                    <span className='text-[#FF8811] ml-1'>{app.ratingAvg}</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <span className='text-[#627382]'>{app.size} MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleUninstall(app.id, app.title)}
                                        className='px-4 py-2 bg-[#00D390] text-white rounded-md hover:cursor-pointer hover:bg-red-700 transition-colors'
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>


        </>
    );
};

export default Installation;
