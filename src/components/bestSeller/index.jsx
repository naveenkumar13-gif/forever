import React, { useEffect, useState } from "react";
import Title from "../title";
import { products } from "../../assets/assets";
import ProductItem from "../productItem";

function BestSeller() {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProduct.slice(0, 4));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-base text-gray-600">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aut a aliquid quas.
        </p>
      </div>
      <div>
        {/* product container */}
        <div className="grid grid-cols-4 gap-4 gap-y-6  max-md:grid-cols-2 max-lg:grid-cols-3">
          {bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
