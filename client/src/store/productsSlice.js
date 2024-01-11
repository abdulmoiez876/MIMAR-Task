import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/product';

const initialState = {
    productSliceLoading: false,
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        // createProduct
        builder.addCase(createProduct.pending, (state, action) => {
            state.productSliceLoading = true;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.productSliceLoading = false;
            alert(action.payload.message);
        })
        builder.addCase(createProduct.rejected, (state, action) => {
            state.productSliceLoading = false;
            alert(action.payload.message);
        })

        // get all products
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.productSliceLoading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.productSliceLoading = false;
            state.products = action.payload.products;
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.productSliceLoading = false;
            alert(action.payload.message);
        })
    }
})

export const createProduct = createAsyncThunk('products/createProduct', async (productData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}/createProduct`, productData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/getAllProducts`);

        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})