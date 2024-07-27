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
            state.macetas = macetas || []; 
            state.plantas = plantas || []; 
            state.varios = varios || [];   
        },
    }
})

export const { addCatalogo } = catalogoSlice.actions;
export default catalogoSlice.reducer;

