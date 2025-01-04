import React from "react";

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="md:hidden text-black focus:outline-none"
  >
    <div className="space-y-1">
      <span
        className={`block w-6 h-0.5 bg-black transition-transform ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black transition-transform ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  </button>
);

export default HamburgerMenu;
