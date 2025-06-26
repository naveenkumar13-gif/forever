import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  size: "",
  successMessage: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { itemid, size } = action.payload;

      const existingItem = state.cart.find(
        (item) => item.id === itemid && item.size === size
      );
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
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    increaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      item.quantity++;
      item.totalPrice = item.price * item.quantity; // Update total price if needed
      state.successMessage = "Item quantity increased successfully!";
    },
    decreaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      item.quantity--;
      item.totalPrice = item.price * item.quantity; // Update total price if needed
      state.successMessage = "Item quantity decreased successfully!";
      if (item.quantity <= 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
    getTotalPrice(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    getTotalQuantity(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  getTotalQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
