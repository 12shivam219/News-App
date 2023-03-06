import React from 'react'

export default function TopNews({ author, description, imageUrl, url,id}) {

    return (
        <>
        
            <div className="content shadow-2xl rounded-lg mb-3 p-3 bg-slate-300" key={url}>
                <div className="title">
                    <p className='kalam'><a href={url} target="_blank">{description}</a></p>
                </div>
                <div className="author my-2">
                    <h1 className='text-red-600 font-extrabold kalam'>{author}</h1>
                </div>
                <div className="img">
                    <img src={imageUrl} alt="" className='w-[100%] h-[265px] rounded-lg'/>
                </div>
            </div>
        </>
    )
}
