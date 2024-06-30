import vector from '../assets/vector.png'
import equipment from '../assets/equipment.png'
import iconfitness from '../assets/iconfitness.png'
import icontime from '../assets/icontime.png'

export default function Advantages() {

  
  return (
    <div className=' mt-[-4rem] '>
      {/* Home text  */}
  
    <h3 className=" mx-[5rem]  text-white text-[4rem] py-[8rem]  px-1"> <b> Reasons To Join </b> </h3>
    
    <div className=" mx-[5rem] flex justify-between ">
        <div className=" text-white flex  space-x-3">
        <img className=' ' src={vector} alt="" />
        <h6><b> 15000 sq.m. </b> 
        <br />A spacious gym for sports – <br/> a safe  distance between exercise machine</h6>
        </div>

        <div className=" text-white flex  space-x-3">
        <img className=' ' src={equipment} alt="" />
        <h6><b> 15000 sq.m. </b> 
        <br />A spacious gym for sports – <br/> a safe  distance between exercise machine</h6>
        </div>
    </div>

    <div className=" mx-[5rem] flex justify-between pt-[5rem] ">
        <div className=" text-white flex  space-x-3">
        <img className=' ' src={iconfitness} alt="" />
        <h6><b> 4 fitness zones </b> 
        <br />From cardio to functional and cycle. <br /> Separate area for boxing and mixed martial arts</h6>
        </div>
        <div className=" text-white flex  space-x-3">
        <img className=' ' src={icontime} alt="" />
        <h6><b> 15000 sq.m. </b> 
        <br />A spacious gym for sports<br/> a safe  distance between exercise machine</h6>
        </div>
    </div>
    </div>

    
    
    
  )
}
