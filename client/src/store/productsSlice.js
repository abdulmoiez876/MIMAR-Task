import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseUrl = 'http://localhost:8000/product';
const baseUrl = 'http://ec2-16-170-255-247.eu-north-1.compute.amazonaws.com:8000/product';

const initialState = {
    productSliceLoading: false,
    products: [],
    cart: [],
    selectedProductId: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id } = action.payload;
            const existingProduct = state.cart.find(product => product._id === _id);

            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                const productToAdd = state.products.find(product => product._id === _id);
                if (productToAdd) {
                    state.cart.push({ ...productToAdd, count: 1 });
                }
            }
        },
        removeFromCart: (state, action) => {
            const { _id } = action.payload;
            const existingProduct = state.cart.find(product => product._id === _id);

            if (existingProduct.count === 1) {
                state.cart = state.cart.filter(product => product._id !== _id);
            } else {
                existingProduct.count -= 1;
            }
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        setSelectedProductId: (state, action) => {
            state.selectedProductId = action.payload;
        }
    },
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

export const { addToCart, removeFromCart, clearCart, setSelectedProductId } = productSlice.actions;