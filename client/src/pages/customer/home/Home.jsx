import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// redux
import { addToCart, removeFromCart, clearCart, setSelectedProductId } from '../../../store/productsSlice';

export default function Home() {
    // initializations
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // globals
    const { products, cart } = useSelector(state => state.product);

    return (
        <div className='tw-bg-[#f1f1f1] tw-min-h-screen tw-grid tw-grid-cols-12'>
            <div className='tw-col-span-8 tw-py-[2vw]'>
                <h1 className='tw-text-2xl tw-font-semibold tw-text-center tw-col-span-4'>Products</h1>
                <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-my-2 tw-col-span-3 tw-px-[4vw]'>
                    {products.map(product =>
                        <div key={product._id} className='tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-y-2 tw-pt-4 tw-col-span-1'>
                            <div className='tw-px-[20%] tw-mx-[5%] tw-bg-[#f1f1f1]' onClick={() => {
                                dispatch(setSelectedProductId(product._id));
                                navigate('/customer/product');
                            }}>
                                <img className='tw-w-fit' src={product.image} alt="product" />
                            </div>
                            <h1 className='tw-text-xl tw-font-semibold'>{product.title}</h1>
                            <h1 className=''>{product.description.split(' ').slice(0, 20).join(' ')}</h1>
                            <h1 className='tw-text-xl tw-font-semibold'>Rs {product.price}</h1>
                            <button className='tw-bg-[#6a62d2] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2 tw-w-full tw-text-white' onClick={() => dispatch(addToCart({ _id: product._id }))}>Add To Cart</button>
                        </div>
                    )}
                </div>
            </div>
            <div className='tw-col-span-4 tw-bg-white tw-py-[2vw]'>
                <h1 className='tw-text-2xl tw-font-semibold tw-text-center tw-col-span-4'>Cart</h1>
                {cart.length > 0 ?
                    <div className='tw-flex tw-flex-col tw-items-center tw-gap-y-2'>
                        <div className='tw-max-h-[75vh] tw-overflow-y-scroll tw-w-full tw-grid tw-gap-y-2'>
                            {cart.map(item =>
                                <div className='tw-w-full tw-flex tw-items-center tw-justify-between tw-px-[2vw]'>
                                    <img className='tw-w-[5vw]' src={item.image} alt="product" />
                                    <h1 className='tw-font-semibold'>{item.title}</h1>
                                    <h1 className='tw-font-semibold'>Rs {item.price} x <button className='tw-bg-[#6a26d2] tw-text-white tw-px-2 tw-rounded-lg' onClick={() => dispatch(addToCart({ _id: item._id }))}>+</button> {item.count} <button className='tw-bg-[#6a26d2] tw-text-white tw-px-2 tw-rounded-lg' onClick={() => dispatch(removeFromCart({ _id: item._id }))}>-</button> = {+item.price * +item.count}</h1>
                                </div>
                            )}
                        </div>
                        <div className='tw-flex tw-flex-col tw-items-center tw-w-full tw-px-[2vw] tw-gap-y-2'>
                            <div className='tw-font-semibold tw-flex tw-items-center tw-w-full tw-justify-between'><span>Total</span> <span>Rs {cart.reduce((total, item) => total + (item.price * item.count), 0)}</span></div>
                            <button className='tw-bg-[#6a62d2] tw-border-none tw-outline-none tw-rounded-sm tw-px-4 tw-py-2 tw-w-full tw-text-white tw-mx-2' onClick={() => dispatch(clearCart())}>Place Order</button>
                        </div>
                    </div> :
                    <h1 className='tw-font-semibold tw-text-center'>Nothing Here : )</h1>
                }
            </div>
        </div>
    )
}
