// buid it with redux toolkit
// create slice
import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";

const products = [{ title: "t shirt", price: 15, decsription: "nice t shirt" }];

// create intial state
const initialState = {
  products: [],
  cart: {
    items: [],
    quantity: 0,
  },
  showShopingCart: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.items = state.cart.items.concat(action.payload);
      state.cart.quantity = state.cart.quantity + 1;
    },
    increment(state, action) {
      state.cart.quantity = state.cart.quantity + 1;
    },
    decrement(state, action) {
      state.cart.quantity = state.cart.quantity - 1;
    },
    toggleShopingCart(state, action) {
      state.showShopingCart = !state.showShopingCart;
    },
  },
});

// create store
const store = configureStore({
  reducer: shopSlice.reducer,
});

// export actions to be used
export const shopActions = shopSlice.actions;

export default store;
