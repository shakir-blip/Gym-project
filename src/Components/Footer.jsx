import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className=' flex  justify-between  mx-[9rem] mt-[10rem]  '>
    <div className=" space-y-4">
     <img src={logo} alt="" />
      <p className='text-white'>Build strength and confidence at <br /> our gym with state-of-the-art <br />
        equipment, personalized training, <br /> and a motivating community</p>
    </div>
    <div className=" space-y-4">
      <h1 className=' text-[1.4rem]  font-semibold text-white '>Address</h1>
      <p className=' text-white'>Republic of Belarus <br /> Minsk city <br /> Dzerzhinsky Avenue 15</p>
    </div>
    <div className=" space-y-3">
    <h1 className=' text-[1.4rem] text-white   font-semibold '>Contact</h1>
      <p className=' text-white space-x-10'><i class="  fa-solid fa-phone text-white"></i> +375(44)-777-24-12</p>
      <p className=' text-white space-x-10'><i class="  fa-regular fa-envelope text-white"></i> gym24@gmail.com</p>

      <div className=" space-x-3">
      <i class="border-2 border-white text-white py-3 px-3 rounded-[50%]   fa-brands fa-facebook-f"></i>
      <i class="border-2 border-white text-white py-3 px-3 rounded-[50%]   fa-brands fa-instagram"></i>
      <i class="border-2 border-white text-white py-3 px-3 rounded-[50%]   fa-brands fa-youtube"></i>

      </div>
    </div>
   </div>
  )
}

export default Footer