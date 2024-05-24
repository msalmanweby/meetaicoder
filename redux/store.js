// store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './features/notification-slice';

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        // Add other reducers here if any
    },
});