import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./cartslice";

const store = configureStore({
reducer:{
        cart:cartReducer,
}
});

export default store;

// import { configureStore } from '@reduxjs/toolkit' 

// export const store = configureStore({
//   reducer: {
    
//   },
//   devTools:true
// })