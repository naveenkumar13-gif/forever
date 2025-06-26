import React, { useState } from "react";
import Title from "../../components/title";
import CartTotal from "../../components/cartTotal";
import { useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.cart);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] ">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex  gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Email Address"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="street address"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <div className="flex  gap-4">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex  gap-4">
          <input
            type="number"
            placeholder="Zip Code"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      {/* right */}
      <div className="mt-8">
        <div className="mt-8  max-sm:w-full ">
          <CartTotal products={products} />
        </div>
        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "stripe" && "bg-green-400"
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-6 mx-4 " />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "razorpay" && "bg-green-400"
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-6 mx-4 " />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "cod" && "bg-green-400"
                }`}
              ></p>
              <p className="text-sm font-medium text-gray-500 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-auto text-end mt-8">
            <button
              className="bg-black text-white py-3  active:bg-gray-700 w-full mt-3 rounded-md"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
