import React from "react";
import Title from "../../components/title";
import CartTotal from "../../components/cartTotal";
import { useSelector } from "react-redux";

function PlaceOrder() {
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
      </div>
    </div>
  );
}

export default PlaceOrder;
