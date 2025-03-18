import Menu from '../assets/images/humberger.png'
import Logo from '../assets/images/logo.png';
import { useState } from 'react';



function Navbar(){
          let [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      console.log("Clicked")
      setIsMenuOpen(!isMenuOpen)
    }
    return(
        //  <section className='sm:flex block w-full'>
         <div className='sm:w-1/2 w-full sm:mt-10 '>
                 <ul className=' sm:flex text-center ml-2  gap-5 sm:ml-20 sm:mt-30 mb-10
                 fixed sm:-top-15 -top-10 backdrop-blur-md bg-white/30 rounded-full shadow-md z-50 mt-20  h-20'>
                        <div className='flex '>
                        <img className='sm:mr-20 mr-0 h-10 items-center sm:mt-3 mt-4' src={Logo} alt="" />
                        {!isMenuOpen ? 
                        <img id='menu-btn' onClick={() => toggleMenu()} className='w-5 h-8 sm:hidden ml-40  mt-5 ' src={Menu} alt="" />
                        :
                          <span onClick={() => toggleMenu()} className='w-5  sm:hidden ml-50  text-4xl  text-blue-600'>X</span>
                      }
                        
                        </div>
                        <div id='main-menu' className={
                            'flex flex-col md:flex-row mt-2 gap-6 backdrop-blur-md bg-white/80 md:bg-transparent rounded-lg items-center  ' + `${isMenuOpen? ' flex' : 'md:flex hidden'}` 
                        }>
                          <li className='font-bold text-xl hover:text-blue-500 hover:transition-colors ' ><a href="">Home</a></li>
                          <li className='font-bold text-xl hover:text-blue-500 hover:transition-colors ' ><a href="">About</a></li>
                          <li className='font-bold text-xl hover:text-blue-500 hover:transition-colors ' ><a href="">Contact</a></li>
                          <li className='font-bold text-xl hover:text-blue-500 hover:transition-colors ' ><a href="" className='sm:mr-2'>Services</a></li>
                        </div>
                      
                    </ul>
                    </div>
                    // </section>

        )
}

export default Navbar

