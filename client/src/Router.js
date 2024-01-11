import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Auth from './pages/auth/Auth';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';

import Seller from './pages/seller/Seller';
import AddProduct from './pages/seller/addProduct/AddProduct';

import Customer from './pages/customer/Customer';
import Home from './pages/customer/home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'auth',
                element: <Auth />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                    },
                    {
                        path: 'signup',
                        element: <Signup />,
                    }
                ]
            },
            {
                path: 'seller',
                element: <Seller />,
                children: [
                    {
                        path: 'addProduct',
                        element: <AddProduct />,
                    }
                ]
            },
            {
                path: 'customer',
                element: <Customer />,
                children: [
                    {
                        path: 'home',
                        element: <Home />,
                    }
                ]
            }
        ]
    }
])