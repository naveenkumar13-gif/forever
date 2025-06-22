import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  size: "",
  successMessage: "Item added to cart successfully!",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const {itemid ,size} = action.payload;

      const existingItem = state.cart.find((item) => item.id === itemid && item.size === size);
      if (existingItem) {
        existingItem.quantity++;
        return;
      }

      state.cart.push({
        ...action.payload,
        quantity: 1,
        size: size,
      });
      state.successMessage = "Item added to cart successfully!";
    },
    deleteItem(state, action) {
      // action.payload.id === id
      const itemId = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    increaseItemQuantity(state, action) {
      const itemId = action.payload.id;
      const item = state.cart.find((item) => item.id === itemId);
      item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const itemId = action.payload.id;
      const item = state.cart.find((item) => item.id === itemId);
      item.quantity--;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
