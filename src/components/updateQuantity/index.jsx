import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../pages/cart/cartSlice";

function UpdateQuantity({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4">
      <button
        className={`border-2 border-gray-300 px-3 py-1 rounded-md bg-gray-200 transition-colors hover:bg-gray-300`}
        onClick={() => dispatch(increaseItemQuantity(item.id))}
      >
        +
      </button>
      <p>{item.quantity}</p>
      <button
        className={`border-2 border-gray-300 px-3 py-1 rounded-md bg-gray-200 transition-colors hover:bg-gray-300`}
        onClick={() => dispatch(decreaseItemQuantity(item.id))}
      >
        -
      </button>
    </div>
  );
}

export default UpdateQuantity;
