import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from "./cart/cart.slice"
import productReducer from "./product/product.slice"
const rootReducer = combineReducers({
    cart: cartReducer,  
    product: productReducer,  
  });
  
  export default rootReducer;