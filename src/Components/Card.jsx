import React from 'react'
import time from '../assets/time.png'


const Card = ({ title, price, features, buttonText, icon }) => {
  return (
    <div className="w-[275px] h-[397px] bg-[#222222] rounded-[10px] text-center ">
      <h1 className='text-[18px] font-bold text-white mt-[0.7rem]'>{title}</h1>
      <h2 className='text-[24px] font-bold text-white py-2'>{price}</h2>
      <hr className='border-2 border-black' />
      
      <div className="py-[1rem] text-[14px] ml-3 space-y-3 font-bold  text-gray-300 text-left font-extralight">
        {features.map((feature, index) => (
          <div key={index} className="flex mx-[1rem] space-x-2 items-center">
            <img className='w-[20px] h-[20px]' src={time} alt="icon" />
            <p>{feature.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}</p>
          </div>
        ))}
      </div>
      <button className='py-2 px-[42px] bg-[#FAFF00] rounded-[2rem] mt-[2rem] font-bold text-[14px]'>{buttonText}</button>
    </div>

  );
};

export default Card;
