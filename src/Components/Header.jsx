import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  
  return (
      <div className='flex justify-between mx-[6rem] mt-[2rem] font-poppins  z-10'>

        <img src={logo} alt="" />
        
  <div className="">
    <ul className=' flex space-x-6 text-white '>
        <Link to='/'>Home</Link>
        <Link to='/advantages'>Advantages</Link>
        <Link to='/membership'>Membership</Link>
        <Link to='/about'>About</Link>
        <Link to='/trainers'>Trainers</Link>
        
    </ul>
  </div>

    </div>
  )
}
