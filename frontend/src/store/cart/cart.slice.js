import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  cartItems: [],

  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.price * cartItem.quantity;
      });
      state.total = total;
    },

    addItem: (state, action) => {
      const { id } = action.payload;
      const check = state.cartItems.some((cartItem) => {
        return cartItem.id === id;
      });
      if (check) {
        const result = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, ...{ quantity: action.payload.quantity } };
          } else {
            return cartItem;
          }
        });
        state.cartItems = result;
        state.status = "resolved";
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.status = "resolved";
      }
    },
    deleteItem: (state, action) => {
      const filteredState = state.cartItems.filter(
        (items) => items.id !== action.payload
      );
      state.cartItems = filteredState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearCartError, addItem, updateTotal, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
