import React from "react";
import Title from "../title";
import { useNavigate } from "react-router-dom";

function CartTotal({ products }) {
  const navigate = useNavigate();
  return (
    <div className="w-[500px] max-sm:w-full max-sm:mt-4">
      <div className="  p-4 rounded-md  max-sm:w-full max-sm:mt-4 ">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p>Items:</p>
            <p>{products.length}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p> Total Price:</p>
            <p>
              ${" "}
              {products
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>Shipping:</p>
            <p>${10.0}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Amount:</span>
            <p className="text-2xl font-semibold">
              $
              {(
                products.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) + 10.0
              ).toFixed(2)}
            </p>
          </div>
        </div>
        <div>
          <button
            className="bg-black text-white py-3  active:bg-gray-700 w-full mt-3 rounded-md"
            onClick={() => navigate("/place-order")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
