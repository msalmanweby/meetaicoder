// store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './features/notification-slice';
import profileReducer from './features/user-profile';

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        profile: profileReducer,
        // Add other reducers here if any
    },
});