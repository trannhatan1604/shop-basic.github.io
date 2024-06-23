import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, deleteCart, deleteProduct } from '../redux/action'
import { icons } from '../utils/icons'
import path from '../utils/path'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const {IoAdd,RxDividerHorizontal,TiDeleteOutline } = icons
const Cart = () => {

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  const handleClose = (item) => {
    dispatch(deleteCart(item))
  }
  const handleAdd = (item) => {
    dispatch(addCart(item))
  }
  const handleDeleteProduct = (item) => {
    dispatch(deleteProduct(item))
  }

  const submit = (product) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDeleteProduct(product)
        },
        {
          label: "No"
          // onClick: () => alert("Click No")
        }
      ]
    });
  };

  const cartItems = (cartItem) => {
    return (
      <div className="my-5 shadow-xl border-2 rounded-lg p-3" key={cartItem.id}>
        <div className="py-4">

          <div className="flex justify-center w-full gap-2 relative">
            <div onClick={()=>submit(cartItem)} className='absolute top-[-10px] right-0 mb-5 text-red-500 cursor-pointer'>
              <TiDeleteOutline size={30}/>
            </div>
            <div className="w-[40%]">
              <NavLink to={`/product/${cartItem.id}`}>
                <img src={cartItem.image} alt={cartItem.title} className="h-48 w-full object-contain" />
              </NavLink>
            </div>
            <div className="w-[60%] pt-5">
              <h3 className="text-xl font-bold h-16 flex items-center w-[100%] justify-center">{cartItem.title.length < 30 ? cartItem.title : `${cartItem.title.slice(0, 30)}...`}</h3>
              <div className='py-3 flex justify-center items-center gap-3'>
                <div
                  onClick={() => handleClose(cartItem)}
                  className="border-2 border-blue-300 p-2 rounded-xl cursor-pointer hover:bg-blue-300"
                  aria-label="Close"><RxDividerHorizontal/>
                </div>
                <h3 className="text-xl font-bold">{cartItem.qty}</h3>
                <div
                  onClick={() => handleAdd(cartItem)}
                  className="border-2 border-blue-300 p-2 rounded-xl cursor-pointer hover:bg-blue-300"
                  aria-label="Close"><IoAdd/>
                </div>
              </div>
              <p className="text-lg font-semibold">{cartItem.qty*cartItem.price} $</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-gray-100 rounded-lg py-5">
        <div className="container py-4">
          <div className="flex items-center flex-col">
            <h3 className="text-xl font-semibold">Your Cart is Empty</h3>
            <NavLink to={path.MENU}>
              <img width={250} src='https://cdn.divineshop.vn/static/4e0db8ffb1e9cac7c7bc91d497753a2c.svg' />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className="container mt-7">
        <div className="flex justify-center">
          <NavLink to={path.MENU} className="mb-5 w-1/4 mx-auto bg-blue-500 text-white text-center py-2 rounded-md">
            Menu
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      {state.length !== 0 && button()}
      {state.length === 0 && emptyCart()}
      <div className='flex justify-center w-full px-10 pb-10'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 text-center justify-between'>
          {state.length !== 0 && state.map(cartItems)}
        </div>
      </div>
      
    </>
  )
}

export default Cart
