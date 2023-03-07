import React from 'react'

export default function Heading({top}) {
    return (
        <>
            <div className='flex flex-col justify-between h-[10px] w-[40%]'>
                <span className='block h-[1px] bg-[#978888] w-full'></span>
                <span className='block h-[1px] bg-[#978888] w-full'></span>
                <span className='block h-[1px] bg-[#978888] w-full'></span>
            </div>
            <h1 className='text-[22px] font-extrabold kalam w-[200px] flex justify-center'><span className='text-cyan-400'>[</span>{top}<span className='text-cyan-400'>]</span></h1>
            <div className='flex flex-col justify-between h-[10px] w-[40%]'>
                <span className='block h-[1px] bg-[#978888] w-full'></span>
                <span className='block h-[1px] bg-[#978888] w-full'></span> 
                <span className='block h-[1px] bg-[#978888] w-full'></span>
            </div>
        </>
    )
}
