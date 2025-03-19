import Logo from '../assets/images/logo.png';
import heroImage from '../assets/images/Web-right.png'
import Check from '../assets/images/check-circle.png'
import Menu from '../assets/images/humberger.png'
import { useState } from 'react';

  function Hero() {
   
  
  
    return(
        <>
            <section className='sm:flex block w-full overflow-hidde bg-[url(./assets/images/bg-hero.png)] bg-no-repeat bg-cover sm:bg-none '>
                <img src="" alt="" />
                <div className='md:w-1/2 w-full'>
            
                    <div className='sm:ml-20 text-center sm:text-start mt-30'>
                        <div className='flex mt-10'> 
                            <img className='ml-30 sm:ml-0' src={Check} alt="" />
                            <p className='ml-1 text-white sm:text-black'>ESTABLISHED SINCE 2020</p>
                        </div>
                    <h1 className='mt-5 font-bold text-5xl capitalize'>  A New solution for Your
                         home cleaning</h1>
                    <p className='text-gray-800 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                        Deleniti saepe dignissimos non quia magnam, facere distinctio?</p>
                        <button className=' h-10 w-50 mt-5 rounded-lg  text-white bg-blue-400'>Book Now</button>
                    </div>
                </div>
                <div  className='sm:w-1/2 sm:-mt-10  w-full sm:bg-[url(./assets/images/bg-hero.png)] bg-no-repeat bg-cover'>
                    <img src={heroImage} alt="" />
                </div>
            </section>
        </>
    );
}
export default Hero