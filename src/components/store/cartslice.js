import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload)
  },
  deleteFromCart(state, action) {
      return state.filter(item => item.id != action.payload.id);
  },
  clearCart(state) {
    return [];
  },
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { productId, newQuantity } = action.payload;
      const productToUpdate = state.find(item => item.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { add, remove, updateQuantity,addToCart, deleteFromCart , clearCart } = cartSlice.actions;
export default cartSlice.reducer;


