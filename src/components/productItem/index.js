import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ id, name, price, image }) {
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition-all duration-500 w-full h-80 object-cover"
        />
      </div>
      <p className="font-semibold pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">${price}</p>
    </Link>
  );
}

export default ProductItem;
