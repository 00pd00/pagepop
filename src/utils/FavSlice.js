import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    current: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (!Array.isArray(state.items)) state.items = [];
      const exists = state.items.some(item => item.title === action.payload.title);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.title !== action.payload.title);
    },
    setCurrent: (state, action) => {
      state.current = [action.payload]; 
    },
  },
});

export const { addItem, clearCart, removeItem, setCurrent } = cartSlice.actions;
export default cartSlice.reducer;
