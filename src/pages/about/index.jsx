import React from "react";
import Title from "../../components/title";
import { assets } from "../../assets/assets";

function About() {
  const style = 'border rounded- px-10 md:px-16 sm:py-20 flex flex-col gap-5 hover:transition-all hover:shadow-lg duration-300 hover:translate-y-2'
  return (
    <div>
      <div className="text-2xl text-center my-4 border-t pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row  gap-8">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[480px] h-auto object-cover rounded-md"
          alt="about img"
        />
        <div className="flex flex-col gap-4 text-gray-700 justify-center max-w-[600px] ">
          <p>
            Forever Fashion is a modern and trendy clothing brand dedicated to
            delivering the latest styles at affordable prices. From casual wear
            to party outfits, our collection is designed to fit every
            personality and occasion.
          </p>
          <p>
            We believe fashion should be fun, expressive, and accessible to
            everyone. Whether you're dressing up for a night out or keeping it
            comfy for the day, Forever Fashion ensures you stay stylish—forever.
          </p>
          <b className="text-gray-800">our mission</b>
          <p>
            To make trendy, high-quality fashion accessible and affordable for
            everyone, empowering individuals to express their unique style with
            confidence.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE"} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center my-10">
        <div className={style}>
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            We are committed to delivering products that meet the highest
            standards of quality, durability, and style.
          </p>
        </div>
        <div className={style}>
          <b>Convenience:</b>
          <p className="text-gray-700">
            Enjoy a smooth and hassle-free shopping experience with easy
            navigation, fast delivery, and secure payments.
          </p>
        </div>
        <div className={style}>
          <b>Customer Service:</b>
          <p className="text-gray-700">
            Enjoy a smooth and hassle-free shopping experience with easy
            navigation, fast delivery, and secure payments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
