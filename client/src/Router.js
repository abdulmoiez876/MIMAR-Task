import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Seller from './pages/seller/Seller';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'seller',
                element: <Seller />,
            }
        ]
    }
])