import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    userName:"",
    email:"",
}; 

export const userSlice = createSlice ({
    name: "user",
    initialState,
    // Create reducers
    reducers: {
        addUser: (state, action) => {
            const {name, userName, email} = action.payload;
            state.name = name;
            state.userName = userName;
            state.email =  email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

//Export the actions and userSlice(*)
export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;