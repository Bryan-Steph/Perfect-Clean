import FooterLogo from '../assets/images/Logo-footer.png'

function Footer(){

    return(<>
         <section className="mt-10">
            <div className="sm:flex">
                <img className=" sm:w-1/2   mx-3 sm:mx-0 w-80" src={FooterLogo}/>
                <div className="sm:w-1/2 ml-20">
                <p className="text-orange-500 font-semibold text-3xl mx-5 my-10 sm:my-0">Contact Us</p>
                <p className="sm:mt-5 mx-5">Bamenda bambili, Cameroon</p>
                <p className="sm:mt-5 mx-5">+237 695 256 905</p>
                <p className="sm:mt-5 mx-5">+237 683 538 004</p>
                <p className="sm:mt-5 mx-5">frusteveakonnibryan@gmail.com</p>
                </div>
                </div>
                <p className='text-center font-bold mt-10 bg-blue-400 text-3xl
                text-white'>TraitzTech</p>
                <p className='mt-10'></p>
            </section>   
        </>)
}

export default Footer