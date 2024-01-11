import React, { useState } from 'react';

export default function AddProduct() {
    // locals
    const [productData, setProductData] = useState({
        title: "",
        price: '',
        description: '',
        image: null
    })

    // functions
    const changeHandler = (event) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.name === "image" ? event.target.files[0] : event.target.value
        })
    }

    const submitHandler = () => {
        console.log(productData);
    }

    return (
        <div className='tw-px-[9vw] tw-py-[4vw] tw-grid tw-w-full tw-grid-cols-3 tw-gap-4'>
            <h1 className='tw-text-2xl tw-font-semibold tw-text-center tw-col-span-3'>Add Product</h1>
            <div className='tw-col-span-1 tw-flex tw-flex-col tw-items-start tw-gap-y-2 tw-w-full'>
                <h1 className='tw-text-base'>Title</h1>
                <input onChange={changeHandler} name='title' value={productData.title} className='tw-w-full tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="text" placeholder='Title' />
            </div>
            <div className='tw-col-span-1 tw-flex tw-flex-col tw-items-start tw-gap-y-2 tw-w-full'>
                <h1 className='tw-text-base'>Price</h1>
                <input onChange={changeHandler} name='price' value={+productData.price} className='tw-w-full tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="number" placeholder='Price' />
            </div>
            <div className='tw-col-span-1 tw-flex tw-flex-col tw-items-start tw-gap-y-2 tw-w-full'>
                <h1 className='tw-text-base'>Image</h1>
                <input onChange={changeHandler} name='image' className='tw-w-full tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="file" placeholder='image' />
            </div>
            <div className='tw-col-span-3 tw-flex tw-flex-col tw-items-start tw-gap-y-2 tw-w-full'>
                <h1 className='tw-text-base'>Description</h1>
                <textarea onChange={changeHandler} name='description' value={productData.description} className='tw-w-full tw-bg-[#e5e8ed] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2' type="text" placeholder='Description' />
            </div>
            <button className='tw-bg-[#6a62d2] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2 tw-w-full tw-col-span-3 tw-text-white' onClick={submitHandler}>Login</button>
        </div>
    )
}
