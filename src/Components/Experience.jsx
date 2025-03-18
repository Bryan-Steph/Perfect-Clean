import check from '../assets/images/check-circle.png'
import Eximage from '../assets/images/experience-img.png'

function Experience(){


    return(
        <>
          <div className='sm:flex'>
            <div className='mx-20'>
                <img src={Eximage} className='' />
            </div>
            <div className=' sm:w-1/4 mt-20 sm:ml-50'>
                <h1 className='font-bold text-4xl mx-5 sm:mx-0'>We are very experienced in cleaning services</h1>
                <p className='mt-5 mx-5 sm:mx-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Vitae eveniet rem cupiditate, alias laudantium corrupti explicabo!</p>
                     <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
                         <div className='flex mt-3 mx-5 sm:mx-0'> 
                        <img src={check} alt="" />
                        <h3 className='font-bold ml-2'>We are Commited</h3>
                     </div>
                     <p className='mt-2 mx-5 sm:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Alias est quia corporis repellendus iure rerum quis.</p>
            </div>
          </div>
        </>
    )
}
export default Experience