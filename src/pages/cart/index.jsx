import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/title";
import { assets } from "../../assets/assets";
import { deleteItem } from "./cartSlice";
import UpdateQuantity from "../../components/updateQuantity";
import CartTotal from "../../components/cartTotal";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="py-4  ">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-6 border-t border-b py-4 max-sm:flex-col "
          >
            <div>
              <img src={item.image} alt="" className="w-32 max-sm:w-full" />
            </div>

            <div className="">
              <p>{item.name}</p>
              <div className="flex gap-4 items-center mt-2 max-sm:flex-col">
                <p>${item.price * item.quantity}</p>
                <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                  {item.size}
                </p>
              </div>
            </div>
            <div>
              <UpdateQuantity item={item} />
            </div>
            <img
              src={assets.bin_icon}
              alt=""
              className="w-6 cursor-pointer"
              onClick={() => dispatch(deleteItem(item.id))}
            />
          </div>
        ))}
      </div>
      <CartTotal products={products} />
    </div>
  );
};

export default Cart;
