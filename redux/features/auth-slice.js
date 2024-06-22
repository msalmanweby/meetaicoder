import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        access: "",
        refresh: "",
    }
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.value.access = action.payload.access
            state.value.refresh = action.payload.refresh
        }
        
    }
})


export const { setCredentials } = auth.actions;
export default auth.reducer;