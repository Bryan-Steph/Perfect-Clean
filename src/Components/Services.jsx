import Home from '../assets/images/Home.png'

function Services(){


    return (
        <>
        <section className="mt-10">
            <div className="sm:flex">
                <h1 className=" sm:w-1/2 font-bold text-4xl mx-5 sm:mx-0'">Always Provide The Best Service</h1>
                <div className="sm:w-1/2">
                <p className="text-orange-500 font-semibold text-3xl mx-5 my-10 sm:my-0">Our Services</p>
                <p className="sm:mt-5 mx-5">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Autem modi pariatur sed fuga tempora eius.</p>
                </div>
               
            </div>
            <div className='sm:flex mt-5'>
                <div className='mx-5 text-center my-5 border-3 border-gray-200 rounded-lg shadow-2xl hover:text-white
                hover:transition-all hover:scale-105 
                hover:left-0 hover:bottom-0 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:rounded-b-xl  '>
                    <img className='ml-[43%] my-5' src={Home} alt="" />
                    <h1 className='my-2 font-bold text-2xl'>House Cleaning</h1>
                    <p className='text-gray-500 mx-2 my-5 mb-10 hover:text-white'>Make your product more eye-catching with a touch of illustration</p>
                </div>
                <div className='mx-5 text-center my-5 border-3 border-gray-200 rounded-lg hover:shadow-2xl hover:text-white
                hover:transition-all hover:scale-105 
                hover:left-0 hover:bottom-0 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:rounded-b-xl  '>
                    <img className='ml-[43%] my-5' src={Home} alt="" />
                    <h1 className='my-2 font-bold text-2xl'>House Cleaning</h1>
                    <p className='text-gray-500 mx-2 my-5 mb-10 hover:text-white'>Make your product more eye-catching with a touch of illustration</p>
                </div>
                <div className='mx-5 text-center my-5 border-3 border-gray-200 rounded-lg hover:shadow-2xl hover:text-white
                hover:transition-all hover:scale-105 
                hover:left-0 hover:bottom-0 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:rounded-b-xl  '>
                    <img className='ml-[43%] my-5' src={Home} alt="" />
                    <h1 className='my-2 font-bold text-2xl'>House Cleaning</h1>
                    <p className='text-gray-500 mx-2 my-5 mb-10 hover:text-white'>Make your product more eye-catching with a touch of illustration</p>
                </div>
                <div className='mx-5 text-center my-5 border-3 border-gray-200 rounded-lg hover:shadow-2xl hover:text-white
                hover:transition-all hover:scale-105 
                hover:left-0 hover:bottom-0 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:rounded-b-xl  '>
                    <img className='ml-[43%] my-5' src={Home} alt="" />
                    <h1 className='my-2 font-bold text-2xl'>House Cleaning</h1>
                    <p className='text-gray-500 mx-2 my-5 mb-10 hover:text-white'>Make your product more eye-catching with a touch of illustration</p>
                </div>   
            </div>
        </section>
        </>
    )
}
export default Services