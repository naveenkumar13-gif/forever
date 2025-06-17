import React, { useEffect, useState } from "react";
import Title from "../title";
import { products } from "../../assets/assets";
import ProductItem from "../productItem";

function LeatestCollection() {
  const [leatestProduct, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-base text-gray-600">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aut a aliquid quas.
        </p>
      </div>
      {/* product container */}
      <div className="grid grid-cols-5 gap-4  gap-y-6 max-sm:grid-cols-2 ">
        {leatestProduct.map((item, index) => (
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
  );
}

export default LeatestCollection;
