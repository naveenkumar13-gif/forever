import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center  font-medium">
      <div>
        <img src={assets.logo} alt="Logo" className="w-36" />
      </div>
      <ul className="flex gap-4 items-center max-sm:hidden text-sm">
        <NavLink to="/" className="flex flex-col gap-1 items-center uppercase ">
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden border-none" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>Collection</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden border-none" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>about</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden border-none" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>contact</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden border-none" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="absolute hidden group-hover:block dropdown-menu top-8 right-0">
            <div className="flex flex-col gap-2 p-4 w-36  bg-slate-50 rounded-md shadow-md">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
