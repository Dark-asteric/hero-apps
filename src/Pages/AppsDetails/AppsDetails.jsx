import { useLocation } from 'react-router-dom';
import RatingChart from './RatingChart';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function AppDetails() {
    const location = useLocation();
    const app = location.state?.app;
    const [isInstalled, setIsInstalled] = useState(false);

    // Check if app is already installed on component mount
    useEffect(() => {
        // Only run if app exists
        if (!app || !app.id) return;

        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const isAppInstalled = installedApps.some(appItem => appItem.id === app.id);
        setIsInstalled(isAppInstalled);
    }, [app?.id]); // Use app?.id instead of app to avoid unnecessary re-renders

    const handleInstall = () => {
        if (!app || !app.id) {
            toast.error('App information not available!');
            return;
        }

        // Get existing installed apps from localStorage
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

        // Check if already installed
        const isAlreadyInstalled = installedApps.some(appItem => appItem.id === app.id);

        if (isAlreadyInstalled) {
            toast.error('This app is already installed!');
            return;
        }

        // Add app to installed apps list
        const newInstalledApps = [...installedApps, {
            id: app.id,
            title: app.title,
            companyName: app.companyName,
            downloads: app.downloads,
            reviews: app.reviews,
            ratingAvg: app.ratingAvg,
            size: app.size,
            image: app.image,
            installedAt: new Date().toISOString()
        }];

        // Save to localStorage
        localStorage.setItem('installedApps', JSON.stringify(newInstalledApps));

        // Update state
        setIsInstalled(true);

        // Show success toast
        toast.success(`${app.title} installed successfully!`, {
            duration: 3000,
            position: 'top-right',
            style: {
                background: '#00D390',
                color: '#fff',
                fontWeight: '600',
            },
            icon: '✅',
        });
    };
    if (!app) {
        return (
            <div>
                <p>App data not found. Loading from API...</p>
            </div>
        );
    }

    return (
        <>
            <Toaster />
            <div className="bg-[#D2D2D2]">
                <div className='p-15 flex gap-10 '>
                    <img className='w-[350px] h-[350px] ' src={app.image} alt={app.name} />
                    <div className='w-full'>
                        <div className='border-b border-[#001931] pb-10'>
                            <h1 className='text-5xl text-black font-semibold mb-2'>{app.title}</h1>
                            <p className='text-[20px] text-[#627382]'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{app.companyName}</span></p>
                        </div>
                        <div className='mt-6 flex items-center gap-20'>
                            <div className='flex flex-col items-start'>
                                <img className='w-[40px] h-[40px] mb-3' src="/icon-downloads.png" alt="" />
                                <p className='text-[14px] text-[#001931]'>Downloads</p>
                                <h1 className='font-extrabold text-[40px] text-black'>{app.downloads}</h1>
                            </div>
                            <div className='flex flex-col items-start'>
                                <img className='w-[40px] h-[40px] mb-3' src="/icon-ratings.png" alt="" />
                                <p className='text-[14px] text-[#001931]'>Average Ratings</p>
                                <h1 className='font-extrabold text-[40px] text-black'>{app.ratingAvg}</h1>
                            </div>
                            <div className='flex flex-col items-start'>
                                <img className='w-[40px] h-[40px] mb-3' src="/icon-review.png" alt="" />
                                <p className='text-[14px] text-[#001931]'>Total Reviews</p>
                                <h1 className='font-extrabold text-[40px] text-black'>{app.reviews}</h1>
                            </div>
                        </div>
                        {/* <button className='bg-[#00D390] text-white text-[20px] mt-4 hover:cursor-pointer font-semibold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity'>
                                Install Now ({app.size} MB)
                        </button> */}
                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${isInstalled
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#00D390] text-white text-[20px] mt-4 hover:cursor-pointer font-semibold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity hover:shadow-lg hover:scale-105'
                                }`}
                        >
                            {isInstalled ? '✓ Installed' : 'Install Now' + ` (${app.size} MB)`}
                        </button>
                    </div>
                </div>
                <div className='w-[1600px] mx-auto mb-5'>
                    <div className='border-t border-[#001931]'>
                        <h1 className='font-semibold text-[24px] text-black mt-8'>Ratings</h1>
                        {app.ratings && <RatingChart ratings={app.ratings} />}
                    </div>
                </div>
                <div className='w-[1600px] mx-auto'>
                    <div className='border-t border-[#001931] pb-10'>
                        <h1 className='font-semibold text-[24px] text-black mt-10 mb-4'>Description</h1>
                        <p className='text-[#627382]'>{app.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppDetails;
