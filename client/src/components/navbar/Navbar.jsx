import React from 'react';
import { useDispatch } from 'react-redux';

// redux
import { logout } from '../../store/userSlice';

export default function Navbar() {
    // initializations
    const dispatch = useDispatch();

    return (
        <div className='tw-flex tw-items-center tw-bg-[#6a26d2] tw-text-white tw-justify-between tw-px-[4vw] tw-py-2'>
            <h1>Test App</h1>
            <button className='tw-bg-red-600 tw-border-none tw-outline-none tw-rounded-sm tw-py-2 tw-px-4 tw-text-white' onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
