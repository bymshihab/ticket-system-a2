import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <span className="font-extrabold text-2xl">CS — Ticket System</span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li className="ml-4">
              <button
                className="bg-gradient-to-r 
                   from-[#5440da] 
                   to-[#6C4DFF] 
                   text-white 
                   px-4 py-2 
                   rounded 
                   font-medium"
              >
                <span className="mr-2">+</span>
                New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
