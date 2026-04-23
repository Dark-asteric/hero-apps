import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/apps', label: 'Apps' },
        { path: '/installation', label: 'Installation' }
    ]
    const renderNavLinks = () => {
        return navItems.map((item) => (
            <li key={item.path}>
                <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                        `block m-4 transition-colors duration-200 ${
                            isActive 
                            ? 'text-[#632EE3] font-bold underline underline-offset-6'
                            : 'text-black hover:text-[#632EE3] hover:underline hover:underline-offset-6'
                        }`
                    }
                >
                    {item.label}
                </NavLink>
            </li>
        ));
    }

    return (
        <div className="navbar bg-white px-15">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
                        {renderNavLinks()}
                    </ul>
                </div>
                <NavLink to="/">
                    <div className='flex items-center'>
                        <img className='w-12 h-12 hover:cursor-pointer' src="/logo.png" alt="" />
                        <a className="btn btn-ghost text-xl text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text">HERO.IO</a>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black font-medium text-xl ">
                    {renderNavLinks()}
                </ul>
            </div>
            <div className="navbar-end"> 
                <a href="https://github.com/Dark-asteric" className='flex items-center gap-2 border-none bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-3 px-5 rounded-sm hover:bg-gradient-to-br hover:from-[#8259e1] hover:to-[#ad7eef]'> <i className="fa-brands fa-github"></i>Contribute</a>
            </div>
        </div>
    )
}

export default Navbar
