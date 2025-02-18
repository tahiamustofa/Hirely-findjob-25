import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'

import { NavbarDefault } from './components/Nav/Nav'




function App() {
  

  return (
    <>
     <div className='mx-auto'>
      <NavbarDefault></NavbarDefault>
      
      <Outlet /> 
 
   <Footer></Footer>
      </div>



    </>
  )
}

export default App
