import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDataSlice from "./slices/productsDataSlice"


const store = configureStore({
    reducer: {
        products: productReducer,
        product: productDataSlice,
    },
});

export default store;