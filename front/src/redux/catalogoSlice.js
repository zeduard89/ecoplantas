import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    macetas: [],  // Cambiar a array vacío
    plantas: [],  // Cambiar a array vacío
    varios: []    // Cambiar a array vacío
}; 

export const catalogoSlice = createSlice({
    name: "catalogo",
    initialState,
    // Create reducers
    reducers: {
        addCatalogo: (state, action) => {
            const { macetas, plantas, varios } = action.payload;
            state.macetas = macetas || []; // Asegúrate de que sean arrays
            state.plantas = plantas || []; // Asegúrate de que sean arrays
            state.varios = varios || [];   // Asegúrate de que sean arrays
        },
    }
})

export const { addCatalogo } = catalogoSlice.actions;
export default catalogoSlice.reducer;

