import { configureStore } from "@reduxjs/toolkit";
import catalogoReducer from "./catalogoSlice";//(*userSlice)

export const store = configureStore({
    reducer: {
        catalogo: catalogoReducer,
    }

})