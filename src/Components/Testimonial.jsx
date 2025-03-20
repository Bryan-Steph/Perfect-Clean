
import Profile from '../assets/images/person.png'
import Star from '../assets/images/star.png'


function Testimonial(){

    return(<>
        <section className="mt-10 ">
            <div className="sm:flex sm:justify-between">
                <h1 className=" md:w-150 font-bold  text-5xl mx-0 ml-5 sm:ml-25 leading-tight mt-10 sm:mx-0"><span
                 className="text-blue-500 font-extrabold text-6xl font-sans w-full ">250 +</span>Satisfied Clients 
                With Our Services</h1>
                <div className="sm:w-1/2">
                <p className="text-orange-500 font-semibold md:ml-30 text-3xl pt-10 mx-5 my-10 sm:my-0">Testimonials</p>
                <p className="sm:mt-5 mx-5 md:ml-30 ">Have many related needs, we present a suitable package for your needs</p>
                </div>
            </div>
            <div className="sm:flex mt-10 sm:mx-10">
                <div className=' sm:mx-10 mx-5 mb-5  bg-gray-200 hover:bg-black hover:transition-colors
                 hover:text-white shadow-3xl rounded-lg py-7'>
                    <div className='flex'>
                        <img  className='ml-5 -mb-1 ' src={Profile} alt="" />
                        <h1 className='mt-5 ml-2'>Celine Dion</h1>
                    </div>
                    <p className='ml-25  -mt-6'>Cafe Owner</p>
                    <div>
                        <div className='flex mx-10 mt-3 gap-2'>
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        </div>

                        <p className='ml-5 mt-5'> Increase product sales and increase the amount of cash that comes 
                            in far further development
                        </p>
                    </div>
                </div>
                <div className=' sm:mx-10 mx-5 mb-5  bg-gray-200 hover:bg-black hover:transition-colors
                 hover:text-white shadow-3xl rounded-lg py-7'>    
                    <div className='flex'>
                        <img  className='ml-5 -mb-1' src={Profile} alt="" />
                        <h1 className='mt-5 ml-2'>Celine Dion</h1>
                    </div>
                    <p className='ml-25 -mt-6'>Cafe Owner</p>
                    <div>
                        <div className='flex mx-10 mt-3 gap-2'>
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        </div>

                        <p className='ml-5 mt-5 w-3/4'> Increase product sales and increase the amount of cash that comes 
                            in far further development
                        </p>
                    </div>
                </div>
                <div className=' sm:mx-10 mx-5 mb-5  bg-gray-200 hover:bg-black hover:transition-colors
                 hover:text-white shadow-3xl rounded-lg py-7'>
                     <div className='flex'>
                        <img  className='ml-5 -mb-1' src={Profile} alt="" />
                        <h1 className='mt-5 ml-2'>Celine Dion</h1>
                    </div>
                    <p className='ml-25  -mt-6'>Cafe Owner</p>
                    <div>
                        <div className='flex mx-10 mt-3 gap-2'>
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        </div>

                        <p className='ml-5 mt-5'> Increase product sales and increase the amount of cash that comes 
                            in far further development
                        </p>
                    </div>
                </div>
                <div className=' sm:mx-10 mx-5 mb-5  bg-gray-200 hover:bg-black hover:transition-colors
                 hover:text-white shadow-3xl rounded-lg py-7'>
                     <div className='flex'>
                        <img  className='ml-5 -mb-1' src={Profile} alt="" />
                        <h1 className='mt-5 ml-2'>Celine Dion</h1>
                    </div>
                    <p className='ml-25  -mt-6'>Cafe Owner</p>
                    <div>
                        <div className='flex mx-10 mt-3 gap-2'>
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        <img className='h-5' src={Star} alt="" />
                        </div>

                        <p className='ml-5 mt-5'> Increase product sales and increase the amount of cash that comes 
                            in far further development
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
      </>);
}

export default Testimonial