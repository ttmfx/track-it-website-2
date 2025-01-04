import { useState, useEffect } from "react";
import NavbarLink from "./NavbarLink";
import HamburgerMenu from "./HumburgerMenu";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Services from "../pages/Services";

import checkItLogo from  "../assets/check-it-logo.svg";	
import Home from "../pages/Home";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (path) => {
    setIsActive(path);
    setIsMenuOpen(!isMenuOpen)

  };

  const location = useLocation;

  const [isActive, setIsActive] = useState(true);



  function linkClicked(path) {
    setIsActive(path);
    
  }


  return (
    <Router>
    <nav className="w-full fixed top-0 bg-white text-grey-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src= {checkItLogo}  alt="Logo" className="h-6 w-6" />
          <span className="text-md font-medium text-grey-600">Check it</span>
        </div>

        {/* Links Section (Hidden in Mobile View) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
           <a><Link to="/" 
           className={`${
            isActive == "/" ? 
             "text-base text-orange-600 ":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => linkClicked("/")}
          //  className = {({ isActive }) =>
          //   isActive
          //     ?
          //     : }
           >Home</Link></a>
            <a><Link to="/about"  className={`${
            isActive == "/about" ? 
             "text-base text-orange-600":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => linkClicked("/about")}
            >About</Link></a>
            <a><Link to="/services" className={`${
            isActive == "/services" ? 
             "text-base text-orange-600 ":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => linkClicked("/services")}>Services</Link></a>
            <a><Link to="/pricing" 
            className={`${
              isActive == "/pricing" ? 
               "text-base text-orange-600 ":
               "text-base hover:text-orange-600 transition duration-200"
            }`}
            onClick={() => linkClicked("/pricing")}
            >Pricing</Link></a>
        </div>

        {/* Buy Now Button */}
        <div className="hidden md:block ml-auto">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
            Buy Now
          </button>
        </div>

        {/* Hamburger Menu (Visible in Mobile View) */}
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white text-black transition-transform duration-300 transform translate-x-0"
          style={{ zIndex: 40 }}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-black text-lg focus:outline-none"
          >
            &times;
          </button>

          <ul className="flex flex-col items-start mt-20 space-y-4 px-6">
            {/* <NavbarLink href="/" label="Home" onClick={toggleMenu} />
            <NavbarLink href="/about" label="About" onClick={toggleMenu} />
            <NavbarLink href="/services" label="Services" onClick={toggleMenu} />
            <NavbarLink href="/pricing" label="Pricing" onClick={toggleMenu} /> */}
               <a><Link to="/" 
           className={`${
            isActive == "/" ? 
             "text-base text-orange-600 ":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => toggleMenu("/")}
          //  className = {({ isActive }) =>
          //   isActive
          //     ?
          //     : }
           >Home</Link></a>
            <a><Link to="/about"  className={`${
            isActive == "/about" ? 
             "text-base text-orange-600":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => toggleMenu("/about")}
            >About</Link></a>
            <a><Link to="/services" className={`${
            isActive == "/services" ? 
             "text-base text-orange-600 ":
             "text-base hover:text-orange-600 transition duration-200"
          }`}
          onClick={() => toggleMenu("/services")}>Services</Link></a>
            <a><Link to="/pricing" 
            className={`${
              isActive == "/pricing" ? 
               "text-base text-orange-600 ":
               "text-base hover:text-orange-600 transition duration-200"
            }`}
            onClick={() => toggleMenu("/pricing")}
            >Pricing</Link></a>
           
          </ul>
        </div>
      )}
    </nav>
    <div className="p-4">
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    
    </Router>
  );
};

export default Navbar;
