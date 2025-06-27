import React from "react";
import Title from "../../components/title";
import { useSelector } from "react-redux";

function Order() {
  const products = useSelector((state) => state.cart.cart);
  console.log("Order products:", products);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-3">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.map((item, index) => (
          <div
            key={index}
            className=" border-t border-b text-gray-700 py-4 flex  flex-col  md:flex-row  md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-4 text-sm">
              <img src={item.image} alt={item.name} className="w-32 h-32 " />
              <div className="flex flex-col gap-1">
                <p className="font-semibold sm:text-lg">{item.name}</p>
                <div className="flex flex-col sm:flex-row  gap-2">
                  <span className="text-gray-500">Price: </span>
                  <span className="text-gray-800 font-semibold text-xl">
                    ${item.price}
                  </span>
                  <p className="text-gray-500">
                    Size: <span className="font-semibold">{item.size}</span>
                  </p>
                  <p className="text-gray-500 ">
                    Quantity:{" "}
                    <span className="font-semibold">{item.quantity}</span>
                  </p>
                </div>
                <p className="text-gray-500">
                  Order ID: <span className="font-semibold">{item.id}</span>
                </p>
                <p className="text-gray-500">
                  Date: <span className="font-semibold">{item.Date}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-between">
              <div className="flex items-center gap-2 ">
                <p className="min-w-3.5 h-3.5 rounded-full bg-green-400"></p>
                <p className="text-sm md-text-base">Ready to ship</p>
              </div>
            </div>
            <button className="border border-gray-300 px-3 py-1 rounded-md font-medium">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
