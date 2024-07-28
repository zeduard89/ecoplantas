import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    macetas: [],  
    plantas: [],  
    varios: []    
}; 

export const catalogoSlice = createSlice({
    name: "catalogo",
    initialState,
    // Create reducers
    reducers: {
        addCatalogo: (state, action) => {
            const { macetas, plantas, varios } = action.payload;
            console.log(plantas)
            state.macetas = macetas || []; 
            state.plantas = plantas || []; 
            state.varios = varios || [];   
        },
        increment: (state, action) => {
            const { title, category } = action.payload;
            if (title !== undefined && category !== undefined && state[category]) {
                state[category] = state[category].map(item =>
                    item.title === title ? { ...item, cuantity: (item.cuantity || 0) + 1 } : item
                );
            }
        },
        decrement: (state, action) => {
            const { title, category } = action.payload;
            if (title !== undefined && category !== undefined && state[category]) {
                state[category] = state[category].map(item =>
                    item.title === title && item.cuantity > 0 ? { ...item, cuantity: item.cuantity - 1 } : item
                );
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
    }
})

export const { addCatalogo, increment, decrement, reset, setPresupuesto } = catalogoSlice.actions;
export default catalogoSlice.reducer;

