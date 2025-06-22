import React from "react";
import { useSelector } from "react-redux";
import Title from "../../components/title";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="py-4  ">
        {products.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr_1fr_1fr] items-center gap-6 border-t border-b py-4 max-sm:flex-col "
          >
            <div>
              <img src={item.image} alt="" className="w-24" />
            </div>

            <div className="">
              <p>{item.name}</p>
              <div className="flex gap-4 items-center mt-2">
                <p>${item.price}</p>
                <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                  {item.size}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p>+</p>
              <p>{item.quantity}</p>
              <p>-</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
