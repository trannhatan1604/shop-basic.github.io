import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { dataProduct } from '../utils/data'
import { icons } from '../utils/icons'
import path from '../utils/path'
//cái nhận và gửi đi redux
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { toast } from 'react-toastify'

const { FaStar } = icons
const Product = () => {
    const { id } = useParams()
    const products = dataProduct.filter(x => x.id == id);

    const dispatch = useDispatch()
    const addProduct = (products) => {
        dispatch(addCart(products[0]))
        toast.success("Done add to cart!")
    }

    return (
        <div className="container mx-auto my-20 py-12">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex justify-center mx-auto product">
                    <img src={products[0].image} alt={products[0].title} className="w-[80%] h-96 object-contain" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold">{products[0].title}</h1>
                    <div className='flex items-center gap-2 text-2xl pl-4 py-3'>
                        <p className='font-bold'>Rate {products[0].rating.rate}</p><FaStar color='yellow' />
                    </div>
                    <hr className="my-2" />
                    <h2 className="text-2xl my-4">{products[0].price} $</h2>
                    <p className="text-lg leading-relaxed">{products[0].description}</p>
                    <div className='flex gap-5'>
                        <div onClick={() => addProduct(products)} className="w-[20%] text-center border-2 border-gray-800 font-bold mt-8 px-5 py-3 cursor-pointer">Add to cart</div>
                        <NavLink to={path.CART} className="w-[20%] text-center border-2 border-gray-800 font-bold mt-8 px-5 py-3 cursor-pointer">Go to cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
