
import Play from '../assets/images/play-icon.png';

function About(){

    return(<>
            <div>
                <div className=' sm:h-60 h-100 bg-[url(./assets/images/Vector.png)] bg-no-repeat bg-cover '>
                    <h1 className='mx-5 text-4xl font-bold pt-10'>Are You Ready To Work With Us Now?</h1>
                    <p className='mt-5 mx-5'>What do think after seeing the good response from our 
                        previous customers
                    </p>
                    <div className='sm:flex gap-5 mt-5 '>
                    <button className=' ml-10 sm:ml-20 h-10 w-50 sm:mt-7   rounded-lg text-white bg-blue-400 font-bold
                    hover:transition-all hover:bg-blue-700   hover:scale-110'>Book Now</button>
                    <div className='mt-5 mx-10  w-50 flex rounded-lg border-4 border-blue-500
                     hover:transition-all hover:bg-blue-700 hover:scale-110'>
                        <img className='h-10 ' src={Play} alt="" />
                        <p className='mt-[7px]  ml-1 font-bold'>Watch Demo</p>
                    </div>
                    </div>
                    </div>

            </div>
        </>)
}
export default About