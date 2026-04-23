import React from 'react';

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-[#D2D2D2] via-[#E8E8E8] to-[#D2D2D2] flex items-center justify-center px-4 py-10'>
            <div className='max-w-4xl w-full text-center'>
                <div className='mb-8 animate-float'>
                    <img
                        src="/error-404.png"
                        alt="404 Error"
                        className='w-full max-w-[600px] mx-auto drop-shadow-2xl'
                    />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                        404
                    </h1>

                    <h2 className='text-3xl md:text-4xl font-semibold text-black mt-4'>
                        Oops! Page Not Found
                    </h2>

                    <p className='text-lg text-gray-600 max-w-xl mx-auto leading-relaxed'>
                        The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, even the best apps get lost sometimes!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

