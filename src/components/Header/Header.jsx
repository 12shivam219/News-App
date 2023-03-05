import React from 'react'

export default function Header() {

    const Dates = new Date();
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const day = Days[Dates.getDay()]
    const month = Months[Dates.getMonth()]
    const year = Dates.getFullYear()
    const date = Dates.getDate()

    return (
        <>
            <header className='block w-full text-white fixed top-0 left-0 right-0 bg-[#011e29]'>
                <div className='header flex w-full max-w-[90%] relative m-auto'>
                    <div className="date w-[150px]">
                        <div className="logo">
                            <img src="assets\logo.jpg" alt="" className='rounded-2xl' />
                        </div>
                        <span>{day}</span>,
                        <span className='pl-1'>{month}</span>
                        <span className='pr-1'>{date > 1 || date < 10 ? `0${date}` : date}</span>,
                        <span>{year}</span>
                    </div>
                    <div className="heading w-[408px] absolute m-auto left-0 right-0 text-center">
                        <h1 className='text-[50px] kalam font-extrabold'>Nest News</h1>
                        <div className="line flex justify-center">
                            <p className='font-semibold kalam'>News is a nest built with the twigs of information</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
