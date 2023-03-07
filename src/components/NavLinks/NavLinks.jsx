import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <div className="navLinks flex w-full max-w-[80%] relative m-auto flex-wrap justify-between">
                <NavLink className={({ isActive }) => 'pr-[15px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[15px] py-[16px] font-extrabold kalam text-gray-600')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/LatestNews">Latest News</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/India">India</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/World">World</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/entertainment">Entertainment</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/business">Business</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/technology">Technology</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/health">Health</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/science">Science</NavLink>
                <NavLink className={({ isActive }) => 'px-[30px] py-[16px] font-extrabold kalam ' + (isActive ? 'text-cyan-400' : 'px-[30px] py-[16px] font-extrabold kalam text-gray-600')} to="/sports">Sports</NavLink>
            </div>
        </>
    )
}
