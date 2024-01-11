import React from 'react';
import { useSelector } from 'react-redux';

export default function Product() {
    // globals
    const { products, selectedProductId } = useSelector(state => state.product);
    const selectedProduct = products.filter(product => product._id === selectedProductId)[0];

    return (
        <div className='tw-flex tw-flex-col tw-items-start tw-px-[9vw] tw-py-[4vw]'>
            <img src={selectedProduct.image} className='' alt="product" />
            <h1 className='tw-text-xl tw-font-semibold'>Rs {selectedProduct.price}</h1>
            <h1 className='tw-text-xl tw-font-semibold'>{selectedProduct.title}</h1>
            <h1 className=''>{selectedProduct.description}</h1>
        </div>
    )
}
