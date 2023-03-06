import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
  // const location=useLocation();
  // console.log(location.pathname)
  const [news, setNews] = useState([])
  const [country, setCOuntry] = useState("in");
  const [category, setCategory] = useState("general")
  const api_key = "b22d5ef4c6b14ec980835069cbf5f5f2";
  const api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`

  useEffect(() => {
    fetch(api).then((resp) => resp.json()).then((data) => setNews(data.articles))
  }, [])
  return (
    <>

      <div className="top-news mt-[210px] w-[580px] absolute left-0 right-0 m-auto">
        <div className="heading flex justify-between items-center">
          <div className='flex flex-col justify-between h-[10px] w-[40%]'>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
          </div>
          <h1 className='text-[22px] font-extrabold kalam'>[Top News]</h1>
          <div className='flex flex-col justify-between h-[10px] w-[40%]'>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
            <span className='block h-[2px] bg-[#978888] w-full'></span>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, corrupti?</p>
          </div>
          <div className="author">
            <h1>author</h1>
          </div>
          <div className="img">
            <img src="assets\logo.jpg" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
