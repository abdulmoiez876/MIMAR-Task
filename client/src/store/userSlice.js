import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseUrl = 'http://localhost:8000/user';
const baseUrl = 'http://ec2-16-170-255-247.eu-north-1.compute.amazonaws.com/server:8000/user';

const initialState = {
    userSliceLoading: false,
    isAuthenticated: false,
    _id: "",
    username: "",
    seller: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state._id = "";
            state.username = "";
            state.seller = false;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.userSliceLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state._id = action.payload.user._id;
            state.username = action.payload.user.username;
            state.seller = action.payload.user.seller;
            state.isAuthenticated = true;
            state.userSliceLoading = false;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.userSliceLoading = false;
            alert(action.payload.message);
        })

        // signup
        builder.addCase(signup.pending, (state, action) => {
            state.userSliceLoading = true;
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state._id = action.payload.user._id;
            state.username = action.payload.user.username;
            state.seller = action.payload.user.seller;
            state.isAuthenticated = true;
            state.userSliceLoading = false;
            alert(action.payload.message);
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.userSliceLoading = false;
            alert(action.payload.message);
        })
    }
})

export const login = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userData);

        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const signup = createAsyncThunk('user/signup', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, userData);

        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const {logout} = userSlice.actions;