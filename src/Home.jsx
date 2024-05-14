import React, { useEffect, useState } from 'react'
import bgr from './sea.jpg'
import axios from 'axios'

export const Home = () => {

  const [data,setData]=useState();
  const [data1,setData1]=useState('');

  const handleChange=(event)=>{
    setData1(event.target.value);
  };


  const handleSubmit = async (event) =>{
    event.preventDefault();
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
    console.log(response);
    setData(response.data)
  }



  return (
    <>
      <div>
        <p>Theme</p>
      </div>
      <div><img src={bgr} width={window} height={900} alt="" />
          
      <form class="max-w-md mx-auto -mt-[55%] ml-[23%]" onSubmit={handleSubmit}>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handleChange} value={data1?data1:''} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
      </div>
      </form>
      
{data &&
<div className='ml-[23%]'>
   <div className='text-5xl mt-24 font-bold text-slate-400'>
         <p>{data?.name}</p>
   </div>
   <div className='text-5xl mt-2 font-bold text-slate-400'>
         <p>{data?.main?.temp}°F</p>
      </div>

      <div className='text-2xl font-bold mt-10 text-lime-500'>
         <p>{data?.weather[0]?.main}</p>
      </div>
<div className="max-w-[60%] min-w-[40%] p-6 bg-white/50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute mt-20 flex">

    <div className='ml-2 flex flex-col text-2xl text-slate-700'>
      <div>{data?.main?.feels_like}°F</div>
      <div>Fells like</div>

    </div>
    <div className='ml-56 flex flex-col text-2xl text-slate-700'>
      <div>{data?.main?.humidity}%</div>
      <div>Humidity</div>
    </div>
    <div className='ml-72 flex flex-col text-2xl text-slate-700 '>
     <div>{data?.wind?.speed}MPH</div>
     <div>Winds</div>
    </div>

</div>
</div>
}




          
      </div>
    </>
  )
}
export default Home