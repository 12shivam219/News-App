import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import TopNews from '../../components/TopNews/TopNews';
import Heading from '../../components/Heading/Heading';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const [news, setNews] = useState([])
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  // const api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8ad83384cfff4e7a942fc79bffcdded1&pageSize=30`

  const [side, setSide] = useState(true);
  const[dom,setDom]=useState('abplive.com')
  const [mid, setMid] = useState(true);
  const [set, seSet] = useState(false);
  const location = useLocation();
  const [latestHeading, setLatestHeading] = useState("Latest News")
  const [topHeading, setTopHeading] = useState("Top News")
  // const [topnews, setTopNews] = useState([])
  const [loading, setLoading] = useState(false)
  // const topNewsApi = `https://newsapi.org/v2/everything?domains=${dom}&sortBy=popularity&apiKey=8ad83384cfff4e7a942fc79bffcdded1&pageSize=20`
  const api = set ? `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8ad83384cfff4e7a942fc79bffcdded1&pageSize=30` : `https://newsapi.org/v2/everything?domains=${dom}&sortBy=popularity&apiKey=8ad83384cfff4e7a942fc79bffcdded1&pageSize=20`

  // useEffect(() => {
  //   const fetchApiTopNews = async () => {
  //     try {
  //       const response = await fetch(topNewsApi)
  //       const json = await response.json();
  //       const data = await json.articles
  //       setTopNews(data)
  //       setLoading(true)
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchApiTopNews();
  // }, [topNewsApi])

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await fetch(api)
        const json = await response.json();
        const data = await json.articles
        setNews(data)
        setLoading(true)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [api])

  useEffect(() => {

    if (location.pathname === '/') {
      setLatestHeading('LatestNews')
      setTopHeading('Top News')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/LatestNews') {
      setLatestHeading('Top News')
      setTopHeading('Latest News')
      setSide(false)
      setMid(true)
      setDom('abplive.com')
      seSet(true)
    }

    if (location.pathname === '/India') {
      setLatestHeading('Top News')
      setTopHeading('India News')
      setCountry("in")
      setSide(false)
      setMid(true)
      setDom('hindustantimes.com')
    }

    if (location.pathname === '/World') {
      setLatestHeading('Top News')
      setTopHeading('World News')
      setCountry("us")
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/entertainment') {
      setLatestHeading('Top News')
      setTopHeading('Entertainment')
      setCategory('entertainment')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/business') {
      setLatestHeading('Top News')
      setTopHeading('Business')
      setCategory('business')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/technology') {
      setLatestHeading('Top News')
      setTopHeading('Technology')
      setCategory('technology')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/health') {
      setLatestHeading('Top News')
      setTopHeading('Health')
      setCategory('health')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/science') {
      setLatestHeading('Top News')
      setTopHeading('Science')
      setCategory('science')
      setSide(true)
      setMid(false)
    }

    if (location.pathname === '/sports') {
      setLatestHeading('Top News')
      setTopHeading('Sports')
      setCategory('sports')
      setSide(true)
      setMid(false)
    }

  }, [location.pathname])

  return (
    <>
      <div className="Container flex m-auto w-[80%]">
        <div className="latestNews shadow-2xl rounded-xl w-[320px] mr-[24px] pt-[16px] ">
          <div className="heading flex justify-between items-center">
            <div className='flex flex-col justify-between h-[10px] w-[40%]'>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
            </div>
            <h1 className='text-[22px] flex justify-center w-[210px] font-extrabold kalam'><span className='text-cyan-400'>[</span>{latestHeading}<span className='text-cyan-400'>]</span></h1>
            <div className='flex flex-col justify-between h-[10px] w-[40%]'>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
              <span className='block h-[1px] bg-[#978888] w-full'></span>
            </div>
          </div>
          <div className="latestContent p-3">
            {
              side ?
                <div className="shadow-2xl rounded-lg mb-3 p-3 bg-slate-300">
                  {
                    loading && news ?
                      news.map((data) => {
                        return (
                          <>
                            <div>
                              <div className="author">
                                <h1 className='kalam font-extrabold text-[gray]'>{data.author}</h1>
                              </div>
                              <div className="title my-[8px] shadow-2xl">
                                <p className='kalam font-extrabold'><a href={data.url} rel='noopener' target="_blank">{data.title}</a></p>
                              </div>
                            </div>
                          </>
                        )
                      })
                      :
                      <div className='loader text-center kalam font-extrabold'>
                        Loading News...  <CircularProgress className='circularLoader' />
                      </div>
                  }
                </div>
                :
                <div className="shadow-2xl rounded-lg mb-3 p-3 bg-slate-300">
                  {
                    loading && news ?
                      news.map((data) => {
                        return (
                          <>
                            <div>
                              <div className="author">
                                <h1 className='kalam font-extrabold text-[gray]'>{data.author}</h1>
                              </div>
                              <div className="title my-[8px] shadow-2xl">
                                <p className='kalam font-extrabold'><a href={data.url}  rel='noopener' target="_blank">{data.title}</a></p>
                              </div>
                            </div>
                          </>
                        )
                      })
                      :
                      <div className='loader text-center kalam font-extrabold'>
                        Loading News...  <CircularProgress className='circularLoader' />
                      </div>
                  }
                </div>
            }
          </div>
        </div>


        <div className="top-news shadow-2xl w-[580px] pt-4 rounded-xl">
          <div className="heading flex justify-between items-center">
            <Heading top={topHeading} />
          </div>
          <div className="Contents p-3">
            {
              mid ?
                <div>
                  {

                    loading && news ?
                      news.map((apiData) => {
                        return (
                          <>
                            <TopNews author={apiData.author} description={apiData.title} imageUrl={apiData.urlToImage} url={apiData.url} />
                          </>
                        )
                      })
                      :
                      <div className='loader text-center kalam font-extrabold'>
                        Loading News...  <CircularProgress className='circularLoader' />
                      </div>
                  }
                </div>
                :
                <div>
                  {

                    loading && news ?
                      news.map((apiData) => {
                        return (
                          <>
                            <TopNews author={apiData.author} description={apiData.title} imageUrl={apiData.urlToImage} url={apiData.url} />
                          </>
                        )
                      })
                      :
                      <div className='loader text-center kalam font-extrabold'>
                        Loading News...  <CircularProgress className='circularLoader' />
                      </div>
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}