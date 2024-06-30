import React from 'react'
import photogym from '../assets/photogym.png'

function AboutUs() {
  return (
    <div className='flex justify-center space-x-8 gap-[10rem]'>
        <div className=''>
            <div className=' ml-[5rem]'>
            <h2 className=' mt-[5rem] text-left  text-white text-[4rem] py-[1rem]  font-bold'>About Us</h2>

            <div className=" text-left text-white text text-[14px] font-extralight font-sans leading-[2rem] max-w-[50rem]">

            <p className=' pb-[25px] '>
            Gym24 is a leading fitness center located near Grushevka <br />
            metro station, offering over 1500 sq. m of space dedicated to <br /> 
            top-of-the-line workout equipment from leading brands such  <br />
            as Hammer Strength, Life Fitness, and TechnoGym. 
            </p>
            
            <p className=' pb-[25px] '>
            With affordable membership options, Gym24 is accessible to  <br />
            everyone who wants to reach their fitness goals, whether it's <br />
            building strength, increasing endurance, or losing weight.
            </p>

            <p className=' pb-[25px] '>
            Certified trainers at Gym24 provide expert guidance and <br />
            support to develop personalized workout plans tailored to <br />
            each individual's needs and goals. 
            </p>
            </div>
            </div> 
        </div>
        <div>x
            <img className='mt-[100px]  py-[2rem]' src={photogym} alt="" />
        </div>

    </div>
  )
}

export default AboutUs