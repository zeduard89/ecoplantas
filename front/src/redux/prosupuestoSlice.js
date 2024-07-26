import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    macetas: [],  // Cambiar a array vacío
    plantas: [],  // Cambiar a array vacío
    varios: []    // Cambiar a array vacío
}; 

export const presupuestoSlice = createSlice({
    name: "presupuesto",
    initialState,
    // Create reducers
    reducers: {
        addPresupuesto: (state, action) => {
            const { macetas, plantas, varios } = action.payload;
            state.macetas = macetas || []; // Asegúrate de que sean arrays
            state.plantas = plantas || []; // Asegúrate de que sean arrays
            state.varios = varios || [];   // Asegúrate de que sean arrays
        },
    }
})

export const { addPresupuesto } = presupuestoSlice.actions;
export default presupuestoSlice.reducer;

