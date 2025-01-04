import React from "react";

const NavbarLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base hover:text-blue-500 transition duration-200"
  >
    {label}
  </a>
);

export default NavbarLink;
