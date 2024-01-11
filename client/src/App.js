import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { getAllProducts } from './store/productsSlice';

// components
import Navbar from './components/navbar/Navbar';

function App() {
	// initializations
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// globals
	const { isAuthenticated, seller } = useSelector(state => state.user);

	// effects
	useEffect(() => {
		if (isAuthenticated && seller) navigate('/seller/addProduct')
		else if (isAuthenticated && !seller) {
			dispatch(getAllProducts());
			navigate('/customer/home')
		}
		else navigate('/auth/login')
	}, [isAuthenticated, seller, navigate, dispatch])

	return (
		<>
			{isAuthenticated && <Navbar />}
			<Outlet />
		</>
	);
}

export default App;
