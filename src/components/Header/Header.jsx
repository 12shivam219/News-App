import React, { useEffect, useState } from 'react'
import NavLinks from '../NavLinks/NavLinks';

export default function Header() {

    const Dates = new Date();
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const day = Days[Dates.getDay()]
    const month = Months[Dates.getMonth()]
    const year = Dates.getFullYear()
    const date = Dates.getDate()

    const[header,setHeader]=useState(true)

    useEffect(()=> {
        window.addEventListener('scroll',()=> {
            if(window.scrollY >178) {
                setHeader(false)
            } else {
                setHeader(true)
            }
        })
    })

    return (
        <>
            <header className={header?'block w-full text-white z-10':'fixed left-0 right-0 top-0'}>
                <div className='bg-[#011e29] py-[12px]'>
                    <div className='header flex w-full max-w-[80%] relative m-auto'>
                        <div className="date ">
                            <div className="logo w-[130px] m-auto">
                                <img src="assets\logo.jpg" alt="logo" className='rounded-2xl' />
                            </div>
                            <span>{day}</span>,
                            <span className='pl-1'>{month}</span>
                            <span className='pr-1'>{date > 1 || date < 10 ? `0${date}` : date}</span>,
                            <span>{year}</span>
                        </div>
                        <div className="heading w-[408px] absolute m-auto left-0 right-0 text-center">
                            <h1 className='text-[50px] kalam font-extrabold text-[gray] '>Nest News</h1>
                            <div className="line flex justify-center">
                                <p className='font-semibold kalam text-[#978888]'>News is a nest built with the twigs of information</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-bar text-[#011e29] bg-black shadow-2xl">
                    <NavLinks />
                </div>
            </header>
        </>
    )
}
