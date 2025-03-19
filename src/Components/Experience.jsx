import check from '../assets/images/checkblue.png'
import Eximage from '../assets/images/experience-img.png'

function Experience(){


    return(
        <>
          <div className='sm:flex flex-row-reverse'>
           
            <div className=' sm:w-2/4 mt-20 sm:mr-50'>
                <h1 className='font-bold text-4xl mx-5 order-1 sm: sm:mx-0 sm:1/4'>We are very experienced in cleaning services</h1>
                <p className='mt-5 mx-5 sm:mx-0 w-3/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Vitae eveniet rem cupiditate, alias laudantium corrupti explicabo!</p>
                     <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2 text-2xl'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0 sm:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2 text-2xl'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0 sm:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2 text-2xl '>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0 sm:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2 text-2xl'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0 sm:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
            </div>
            <div className='mx-0'>
            <style>
        {`
          @keyframes bounceScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          .desktop-bounce {
            animation: bounceScale 2.5s ease-in-out infinite;
          }

          @media (max-width: 768px) {
            .desktop-bounce {
              animation: none;
            }
          }
        `}
      </style>
                <img src={Eximage} className='md:block  object-cover desktop-bounce' />
            </div>
          </div>
        </>
    )
}
export default Experience