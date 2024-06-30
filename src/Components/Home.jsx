import React from 'react'
import homegym7 from '../assets/homegym7.png'
export default function Home() {
  return (
  <div className=" flex justify-between relative ">

    <div style={{zIndex:1}} className=" py-[7rem] px-1 Poppins absolute mx-[5rem]">
    <h1 className="text-white text-[4rem] mt-[6rem] -z-10 font-semibold font-poppins ">Free trial session  <br />with a trainer</h1>
    <button className="py-3 px-11 bg-[#FAFF00] rounded-[2rem] font-bold text-[16px] ">Details</button>
    </div>

    <div className=' '>
    <img className=' h-[73]%] w-[100%]  object-cover z-[-1] ' src={homegym7} alt="" />
    </div>

</div>
  )
}

