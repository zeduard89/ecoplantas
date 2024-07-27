import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    raphis:0,
    mixhelechos:0,
    palmito:0,
    ficusblanco:0,
    sterlizian:0,
    oletexana:0,
    mariana:0,
    washintonia:0,
    pinoslimon:0,
    ficusp:0,  
    monstera:0,
    formiosrubra:0,
    sansiverias:0, 
    spathiphyllum:0,
    piramidal:0,
    mate:0,
    jardinera:0,
    incarústica:0,
    cubo:0, 
    bols:0,   
}; 



export const presupuestoSlice = createSlice({
    name: "presupuesto",
    initialState,
    reducers: {
        increment: (state, action) => {
            const { formattedTitle } = action.payload;
            console.log(state[formattedTitle])
            if (formattedTitle !== undefined) {
                state[formattedTitle] = parseInt(state[formattedTitle]) + 1;
            }
        },
        decrement: (state, action) => {
            const { formattedTitle } = action.payload;
            if ( formattedTitle !== undefined && state[formattedTitle] > 0) {
                state[formattedTitle] = parseInt(state[formattedTitle]) - 1;
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

