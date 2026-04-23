import { useLocation, useParams, useNavigate } from 'react-router-dom';

function AppDetails() {
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const app = location.state?.app;

    if (!app) {
        return (
            <div>
                <p>App data not found. Loading from API...</p>
            </div>
        );
    }

    return (
        <>
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
                    </div>
                </div>
                <div className='w-[1600px] mx-auto mb-5'>
                    <div className='border-t border-[#001931]'>
                        <h1 className='font-semibold text-[24px] text-black mt-8'>Ratings</h1>
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
