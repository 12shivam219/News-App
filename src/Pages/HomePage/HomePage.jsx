import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopNews from '../../components/TopNews/TopNews';

export default function HomePage() {
  // const location=useLocation();
  // console.log(location.pathname)
  const [topnews, setTopNews] = useState([])
  const [news, setNews] = useState([])
  const [country, setCOuntry] = useState("in");
  const [category, setCategory] = useState("general")
  const api_key = "b22d5ef4c6b14ec980835069cbf5f5f2";
  const api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`
  const topNewsApi = `https://newsapi.org/v2/everything?domains=abplive.com&sortBy=popularity&apiKey=b22d5ef4c6b14ec980835069cbf5f5f2&pageSize=30`


  const fetchApiTopNews = async () => {
    try {
      const response = await fetch(topNewsApi)
      const json = await response.json();
      const data = await json.articles
      setTopNews(data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiTopNews();
  }, [])

  console.log(topnews)
  return (
    <>

      <div className="top-news shadow-2xl mt-[210px] w-[580px] absolute left-0 right-0 m-auto">
        <div className="heading flex justify-between items-center">
          <div className='flex flex-col justify-between h-[10px] w-[40%]'>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
          </div>
          <h1 className='text-[22px] font-extrabold kalam'><span className='text-cyan-400'>[</span>Top News<span className='text-cyan-400'>]</span></h1>
          <div className='flex flex-col justify-between h-[10px] w-[40%]'>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
            <span className='block h-[1px] bg-[#978888] w-full'></span>
          </div>
        </div>
        <div className="Contents p-3">
          {
            topnews.map((apiData) => {
              return (
                <>
                  <TopNews  author={apiData.author} description={apiData.title} imageUrl={apiData.urlToImage} url={apiData.url} />
                </>
              )
            })
          }
        </div>
      </div>

    </>
  )
}
