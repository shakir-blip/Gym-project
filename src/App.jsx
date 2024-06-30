import { useEffect } from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home1 from './Pages/Home1'
import Advantages1 from './Pages/Advantages1'
import Membership1 from './Pages/Membership1'
import About1 from './Pages/About1'
import Trainers1 from "./Pages/Trainers1"



function App() {
  useEffect(()=>{
    document.body.style.backgroundColor='black'
  })
  return (
    <div className="  ">
         <Router>
               
                <Header  />
                <Routes>
                  <Route path="/" element={ <Home1/>} />
                  <Route path="/advantages" element={ <Advantages1/>} />
                  <Route path="/membership" element={ <Membership1/>} />
                  <Route path="/about" element={<About1/>} />
                  <Route path="/trainers" element={<Trainers1/>} />

                </Routes>
                <Footer/> 
        </Router>  
          
    </div>

   
      
  )
}

export default App
