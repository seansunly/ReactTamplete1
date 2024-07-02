import { configureStore } from "@reduxjs/toolkit";
// import countslice, { countSlice } from "./feature/countslice";
// import countslice, { countSlice } from "./feature/countslice";
import  countSlice  from "./feature/countslice";
import productSlice from "./feature/product/productSlice";
import cardslices from "./feature/card/cardslices";

export const store = configureStore({
  reducer: {
    counter: countSlice,
    product: productSlice,
    card: cardslices,
  },
});
