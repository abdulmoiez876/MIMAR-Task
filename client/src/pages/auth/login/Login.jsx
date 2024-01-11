import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// redux
import { login } from '../../../store/userSlice';

export default function Login() {
    // initializations
    const dispatch = useDispatch();

    // locals
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        seller: false,
    })

    // functions
    const changeHandler = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.name === "seller" ? !userData.seller : event.target.value
        })
    }

    const submitHandler = () => {
        if (userData.username === '' || userData.password === '') {
            alert('Please fill all the fields');
        }
        else {
            console.log(userData);
            dispatch(login(userData));
        }
    }

    return (
        <div className='tw-px-[9vw] tw-grid tw-place-items-center tw-h-screen tw-bg-[#6a62d2] '>
            <div className='tw-bg-white tw-px-[4vw] tw-py-[2vw] tw-rounded-lg'>
                <div className='tw-flex tw-flex-col tw-items-start tw-gap-y-4'>
                    <h1 className='tw-text-xl tw-text-center tw-w-full'>Login</h1>
                    <input onChange={changeHandler} name='username' value={userData.username} className='tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="text" placeholder='Username' />
                    <input onChange={changeHandler} name='password' value={userData.password} className='tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="password" placeholder='Password' />
                    <div className='tw-flex tw-items-center tw-gap-x-2'>
                        <h1>Seller</h1>
                        <input onChange={changeHandler} name='seller' checked={userData.seller} className='tw-rounded-sm' type="checkbox" />
                    </div>
                    <button className='tw-bg-[#6a62d2] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2 tw-w-full tw-text-white' onClick={submitHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}
