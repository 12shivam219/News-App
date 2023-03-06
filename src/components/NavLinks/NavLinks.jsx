import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <div className="navLinks flex w-full max-w-[80%] relative m-auto flex-wrap justify-between">
                <NavLink className='pr-[15px] py-[16px] font-extrabold kalam' to="/">Home</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Latest News</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">India</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">World</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Entertainment</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Business</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Technology</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Health</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Science</NavLink>
                <NavLink className='px-[30px] py-[16px] font-extrabold kalam' to="/">Sports</NavLink>
            </div>
        </>
    )
}
