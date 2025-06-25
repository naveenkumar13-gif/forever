import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/title";
import { assets } from "../../assets/assets";
import { deleteItem } from "./cartSlice";
import UpdateQuantity from "../../components/updateQuantity";
import CartTotal from "../../components/cartTotal";
import { useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
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

              <div className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-2 max-sm:w-[80%]">
                <p className="max-sm:text-lg font-semibold">{item.name}</p>
                <div className="hidden max-sm:block ">
                  <img
                    src={assets.bin_icon}
                    alt=""
                    className="w-6 cursor-pointer max-sm:w-5"
                    onClick={() => dispatch(deleteItem(item.id))}
                  />
                </div>
              </div>
              <div className="hidden max-md:block max-sm:flex  gap-4 w-[80%] justify-between">
                <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50 max-sm:text-2xl">
                  {item.size}
                </p>
                <UpdateQuantity item={item} />
              </div>
              <div className="max-sm:hidden">
                <UpdateQuantity item={item} />
              </div>
              <p className="font-semibold text-xl max-md:w-full max-sm:flex  max-sm:justify-end max-sm:text-3xl">
                ${item.price * item.quantity}
              </p>
              <img
                src={assets.bin_icon}
                alt=""
                className="w-6 cursor-pointer max-sm:hidden"
                onClick={() => dispatch(deleteItem(item.id))}
              />
            </div>
          ))}
          {!products.length && (
            <div className="flex flex-col items-center justify-center py-16">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="w-16 h-16 text-gray-400 mb-4 animate-bounce"
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 text-center max-w-sm">
                Looks like you haven’t added anything to your cart yet. Start
                exploring our products!
              </p>
              <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => navigate("/collection")}
              >
                back to collection
              </button>
            </div>
          )}
        </div>
        {products.length ? <CartTotal products={products} /> : null}
      </div>
    </>
  );
};

export default Cart;
