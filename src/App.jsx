import './App.css'
import Hero from './Components/Hero.jsx'
import Experience from './Components/Experience.jsx'
import Services  from './Components/Services.jsx'
import OurWork from './Components/OurWork.jsx'
import Testimonial from './Components/Testimonial.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import Navbar from './Components/Navbar.jsx'
import Slider from './Components/Slider.jsx'



function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Experience />
    {/* <Slider /> */}

    <Services />
    {/* <OurWork /> */}
    <Testimonial />
    <About />
    <Footer />
    {/* <Header /> */}
    </>
  )
}

export default App
