import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
    // globals
    const { products } = useSelector(state => state.product);

    return (
        <div className='tw-bg-[#f1f1f1] tw-min-h-screen tw-grid tw-grid-cols-4'>
            <div className='tw-col-span-3 tw-py-[2vw]'>
                <h1 className='tw-text-2xl tw-font-semibold tw-text-center tw-col-span-4'>Products</h1>
                <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-my-2 tw-col-span-3 tw-px-[4vw]'>
                    {products.map(product =>
                        <div key={product._id} className='tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-y-2 tw-pt-4 tw-col-span-1'>
                            <div className='tw-px-[20%] tw-mx-[5%] tw-bg-[#f1f1f1]'>
                                <img className='tw-w-fit' src={product.image} alt="product" />
                            </div>
                            <h1 className='tw-text-xl tw-font-semibold'>{product.title}</h1>
                            <h1 className=''>{product.description.split(' ').slice(0, 20).join(' ')}</h1>
                            <h1 className='tw-text-xl tw-font-semibold'>Rs {product.price}</h1>
                            <button className='tw-bg-[#6a62d2] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2 tw-w-full tw-text-white'>Add To Cart</button>
                        </div>
                    )}
                </div>
            </div>
            <div className='tw-col-span-1 tw-flex tw-flex-col tw-items-center tw-gap-y-2 tw-bg-white tw-py-[2vw]'>
                <h1 className='tw-text-2xl tw-font-semibold tw-text-center tw-col-span-4'>Cart</h1>
            </div>
        </div>
    )
}
