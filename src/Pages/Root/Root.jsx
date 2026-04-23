import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Root = () => {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative">
        {pageLoading && (
            <div className="fixed inset-0  bg-white/60 z-50 flex items-center justify-center">
                <span className="loading loading-spinner loading-xl text-red-600"></span>
            </div>
        )}
        
        <Navbar /> 
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root
