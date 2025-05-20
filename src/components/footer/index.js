import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div>
      <div className=" gap-14 max-sm:my-10 text-sm mt-40 grid grid-cols-[3fr_1fr_1fr] max-md:grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr]">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="text-gray-600 w-2/3 max-sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div>
          <h3 className=" text-xl font-medium mb-5">COMPANY</h3>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl font-medium mb-5">GET IN TOUCH</h3>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>EMAIL: example@example.com</li>
            <li>PHONE NO: 123-456-7890</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center flex items-center justify-center mt-5 text-gray-600">
          &copy; 2025 E-commerce. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
