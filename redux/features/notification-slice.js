import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        isError: false,
        message: "",
        isVisible: false,
    }
}

export const notification = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotificationMessage: (state, action) => {
            state.value.isError = action.payload.isError; // Set isError directly from payload
            state.value.message = action.payload.message;
            state.value.isVisible = true; // Make the notification visible whenever a message is set
        },
        hideNotification: (state) => {
            state.value.isVisible = false; // Hide the notification
        },
    },
});

export const { setNotificationMessage, hideNotification } = notification.actions;
export default notification.reducer;
