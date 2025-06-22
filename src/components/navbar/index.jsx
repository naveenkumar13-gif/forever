import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ showSearch, setShowSearch }) {
  const cartItems = useSelector((state) => state.cart.cart);
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center  font-medium max-sm:mt-4 my-5">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="Logo" className="w-36 max-sm:w-24" />
        </Link>
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
        <img
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer "
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer "
          />
          <div className="absolute hidden group-hover:block dropdown-menu pt-4 right-0">
            <div className="flex flex-col gap-2 p-4 w-36  bg-slate-50 rounded-md shadow-md">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative ">
          <img src={assets.cart_icon} alt="" className="w-5 cursor-pointer " />
          <p className="absolute  right-[-5px] bottom-[-5px] bg-black text-white leading-4 aspect-square rounded-full w-4  flex items-center justify-center text-xs">
            {cartItems.length }
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer hidden max-sm:block"
          onClick={() => setVisible(!visible)}
        />
      </div>
      {/* Mobile Menu  */}
      <div
        className={`absolute top-0 right-0 bottom-0  bg-white overflow-hidden transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col   text-gray-600">
          <div
            className="flex items-center gap-2  p-4 cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            <img
              src={assets.dropdown_icon}
              alt=""
              className="h-5  rotate-180 "
            />
            <p>Back</p>
          </div>
          <NavLink
            to={"/"}
            onClick={() => setVisible(!visible)}
            className={" border-b py-4 pl-6"}
          >
            HOME
          </NavLink>
          <NavLink
            to={"/collection"}
            onClick={() => setVisible(!visible)}
            className={" border-b py-4 pl-6"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setVisible(!visible)}
            className={" border-b py-4 pl-6"}
          >
            ABOUT
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setVisible(!visible)}
            className={" border-b py-4 pl-6"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
