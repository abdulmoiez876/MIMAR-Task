import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
	// initializations
	const navigate = useNavigate();

	// globals
	const { isAuthenticated, seller } = useSelector(state => state.user);

	// effects
	useEffect(() => {
		if (isAuthenticated && seller) navigate('/seller/addProduct')
		else navigate('/auth/login')
	}, [isAuthenticated, seller, navigate])

	return (
		<Outlet />
	);
}

export default App;
