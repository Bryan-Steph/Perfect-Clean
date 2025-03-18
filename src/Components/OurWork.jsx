
import PastWork1 from '../assets/images/pastWork1.png';
import PastWork2 from '../assets/images/workTwo.jpg';
import PastWork3 from '../assets/images/workThree.png';
import PastWork4 from '../assets/images/workFour.png';



function OurWork(){


    return(<>
         <section className="mt-10">
            <div className="sm:flex">
                <h1 className=" sm:w-1/2 font-bold text-4xl mx-5 sm:mx-0'">Our past works</h1>
                <div className="sm:w-1/2">
                <p className="text-black  text-xl mx-5 my-10 sm:my-0">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Autem modi pariatur sed fuga tempora eius.</p>
                <p className="sm:mt-5 mx-5 text-blue-500">Peek at our professional Work-folio</p>
                </div>

            </div>
            <div className='mt-10 sm:flex w-full'>
                <div className=''>
                    <img className='sm:ml-50 hover:transition-all hover:scale-105 
                    shadow-2xl border-3 border-blue-400 rounded-lg mx-10 mt-5' src={PastWork1} alt="" />
                </div>
                <div className=''>
                    <img className='mx-10 mt-5 hover:transition-all hover:scale-105 
                    shadow-2xl border-3 border-blue-400 rounded-lg w-82' src={PastWork2} alt="" />
                </div>
                <div className=''>
                    <img className='mx-10 mt-5 hover:transition-all hover:scale-105 
                    shadow-2xl border-3 border-blue-400 rounded-lg' src={PastWork3} alt="" />
                </div>
                <div className=''>
                    <img className='mx-10 mt-5 hover:transition-all hover:scale-105 
                    shadow-2xl border-3 border-blue-400 rounded-lg' src={PastWork4} alt="" />
                </div>
            </div>
            </section>
        </>);
}

export default OurWork