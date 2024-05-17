import React, { useContext, useEffect, useState } from 'react'
import bgr from './sea.jpg'
import axios from 'axios'
import ThemeContext from './ThemeContext'

export const Home = () => {

  const [data,setData]=useState();
  const [data1,setData1]=useState('');
  const value=useContext(ThemeContext)

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
     <div className=''>
      <div className='back'>
      <div className={value.theme=='light' ? 'light' : 'dark'}>


       <button onClick={value.toggleTheme} type="button" class=" ml-1 mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">        
        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
        </svg>
       </button>
     </div>
          
      <form class="max-w-md mx-auto ml-[40%] mt-4 justify-center absolute" onSubmit={handleSubmit}>   
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

<div className='ml-96'>
   <div className='text-5xl mt-24 font-bold text-slate-400'>
         <p>{data?.name}</p>
   </div>
   <div className='text-5xl mt-2 font-bold text-slate-400'>
         <p>{data?.main?.temp}°F</p>
      </div>

      <div className='text-2xl font-bold mt-10 text-lime-500'>
         <p>{data?.weather[0]?.main}</p>
      </div>
<div className="min-w-[40%] p-6 bg-white/50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute mt-20 flex gap-36 justify-center">

    <div className='ml-2 flex flex-col text-2xl text-slate-700'>
      <div>{data?.main?.feels_like}°F</div>
      <div>Fells like</div>

    </div>
    <div className=' flex flex-col text-2xl text-slate-700'>
      <div>{data?.main?.humidity}%</div>
      <div>Humidity</div>
    </div>
    <div className=' flex flex-col text-2xl text-slate-700 mr-2 '>
     <div>{data?.wind?.speed}MPH</div>
     <div>Winds</div>
    </div>

</div>
</div>

}





          
      </div>
      </div>
    </>
  )
}
export default Home