import { configureStore } from '@reduxjs/toolkit';

// slice
import { userSlice } from './userSlice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})