import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Auth from './pages/auth/Auth';
import Login from './pages/auth/login/Login';

import Seller from './pages/seller/Seller';

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
                    }
                ]
            },
            {
                path: 'seller',
                element: <Seller />,
            }
        ]
    }
])