import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        username: "",
        email: "",
        fname: "",
        lname: "",
    }
}


export const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.value.username = action.payload.username; 
            state.value.email = action.payload.email;
            state.value.fname = action.payload.fname; 
            state.value.lname = action.payload.lname; 
        }
    },
});

export const { setProfile } = profile.actions;
export default profile.reducer;