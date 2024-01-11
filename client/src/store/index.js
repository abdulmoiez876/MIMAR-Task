import { configureStore } from '@reduxjs/toolkit';

// slice
import { userSlice } from './userSlice';
import { productSlice } from './productsSlice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer,
    }
})