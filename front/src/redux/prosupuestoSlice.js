import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       planta:[],
       maceta:[],
       varios:[]
}; 



export const presupuestoSlice = createSlice({
    name: "presupuesto",
    initialState,
    reducers: {
        increment: (state, action) => {
            const { formattedTitle } = action.payload;
            if (formattedTitle !== undefined) {
                state[formattedTitle] = parseInt(state[formattedTitle].cuantity) + 1;
            }
        },
        decrement: (state, action) => {
            const { formattedTitle } = action.payload;
            if ( formattedTitle !== undefined && state[formattedTitle].cuantity > 0) {
                state[formattedTitle] = parseInt(state[formattedTitle].cuantity) - 1;
            }
        },
        reset: (state) => {
            return initialState;
        },
        setPresupuesto: (state, action) => {
            const { macetas, plantas } = action.payload;
            state.pedidoMacetas = macetas || []; 
            state.pedidoPlantas = plantas || []; 
        },
    },
});

export const { increment, decrement, reset, setPresupuesto } = presupuestoSlice.actions;
export default presupuestoSlice.reducer;

