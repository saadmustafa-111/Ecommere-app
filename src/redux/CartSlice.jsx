import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const itemExist = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const updateItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = updateItems;
    },
  },
});
export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
