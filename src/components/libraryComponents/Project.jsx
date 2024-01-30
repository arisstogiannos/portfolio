import React, { useRef } from 'react'
import { Work_Sans,Zen_Dots } from 'next/font/google'

const Worksans =Work_Sans(
    {
      weight:["100","200","300","400","500",'600'],
      subsets:["latin"]
      }
  );

const zen =Zen_Dots(
    {
      weight:['400'],
      subsets:["latin"]
      }
  );

 function Project({index, title, setModal}) {
    
      
  return (
    <div  onMouseEnter={() =>{setModal({active:true, index:index})} } onMouseLeave={() =>{setModal({active:false, index:index})}} className='transition duration-1000 flex w-full pt-[40px] pl-[100px] pb-[40px] pr-[100px] items-center justify-between border-b-2 border-solid border-gray-500 cursor-pointer group'>
        <h2  className='font-normal text-[50px] m-0 group-hover:opacity-40 group-hover:-translate-x-4 transition duration-200 ease-linear text-white'>{title}</h2>
        <p className='font-light group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear  text-white'>Design&Development</p>
    </div>
  )
}

export default Project;