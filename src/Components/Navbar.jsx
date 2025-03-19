import { useState, useEffect } from 'react';
import Menu from '../assets/images/humberger.png';
import Logo from '../assets/images/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add/remove border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add border when scrolled down 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sm:w-1/2 w-full sm:mt-10">
      <ul
        className={`fixed sm:-top-15 -top-10 backdrop-blur-md rounded-full border-white  z-50 sm:mt-55 mt-20 sm:ml-20
        w-full sm:w-150 h-20 transition-all duration-300 flex items-center justify-between px-6
        ${isScrolled ? 'border-2 border-white shadow-md' : ' backdrop-blur-md shadow-lg border-2 sm:backdrop-blur-none  sm:border-0 sm:shadow-none sm:bg-none bg-transparent '}`}
      >
        <div className="flex items-center w-full  ">
          <img className="sm:ml- mr-0 h-10" src={Logo} alt="Logo" />
          {!isMenuOpen ? (
            <img
              id="menu-btn"
              onClick={toggleMenu}
              className="w-5 h-8 sm:hidden ml-auto cursor-pointer"
              src={Menu}
              alt="Menu"
            />
          ) : (
            <span
              onClick={toggleMenu}
              className="w-5 sm:hidden ml-auto text-4xl text-blue-600 cursor-pointer"
            >
              X
            </span>
          )}
        </div>

        <div
          id="main-menu"
          className={`absolute sm:static top-16 left-0 w-full sm:w- flex flex-col sm:flex-row gap-6 items-center 
          transition-all duration-300 ${
            isMenuOpen ? 'flex bg-white/80 backdrop-blur-md py-4 rounded-lg  sm:py-0 mt-10 sm:mt-0' : 'hidden sm:flex'
          }`}
        >
          <li className="text-xl sm:bg-transparent  w-full text-center py-2 sm:py-0 hover:text-blue-500 transition-colors">
            <a href="#">Home</a>
          </li>
          <li className="text-xl sm:bg-transparent  w-full text-center py-2 sm:py-0 hover:text-blue-500 transition-colors">
            <a href="#">About</a>
          </li>
          <li className="text-xl sm:bg-transparent  w-full text-center py-2 sm:py-0 hover:text-blue-500 transition-colors">
            <a href="#">Contact</a>
          </li>
          <li className="text-xl sm:bg-transparent b w-full text-center py-2 sm:py-0 hover:text-blue-500 transition-colors">
            <a href="#">Services</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
