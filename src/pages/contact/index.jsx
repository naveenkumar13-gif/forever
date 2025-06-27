import React from "react";
import Title from "../../components/title";
import { assets } from "../../assets/assets";
import NewSletterBox from "../../components/newsletter";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl sm:text-3xl font-semibold my-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row max-sm:justify-start md:gap-10 px-4">
        {/* <div className="my-10 flex flex-col md:flex-row  gap-8"> */}
        <img
          src={assets.contact_img}
          alt="contact img"
          className="w-full md:max-w-[500px] h-auto object-cover rounded-md"
        />
        <div className="flex flex-col justify-center items-start gap-4 max-w-[500px]">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500">
            123 Main St, <br />
            Anytown, NY 12345
          </p>
          <p>
            Phone: (123) 456-7890
            <br />
            Email: contact@example.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p>Learn more about our team and jobs</p>
          <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors duration-300">
            {" "}
            Explore job
          </button>
        </div>
      </div>
      <div className="text-center my-10">
        <NewSletterBox />
      </div>
    </div>
  );
}

export default Contact;
