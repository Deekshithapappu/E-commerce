import React from 'react'
import { useCart } from './context'
function usercart() {
   const {cartitems,additems,removeitems}=useCart()
  return (
    <>
       {
        cartitems.map((items)=>{
              return cartitems.length === 0 ? (
              <div className='text-center p-4'>
                <h1 className='text-2xl font-semibold'>Your cart is empty</h1>
              </div>
              ) : (
              <div className='flex items-center space-x-4 p-4 border-b'>
                <img className='w-24 h-24 object-cover' src={items.image} alt="" />
                <div className='flex-1'>
                <h1 className='text-lg font-semibold'>{items.product}</h1>
                <h2 className='text-gray-500'>{items.price}</h2>
                <h3 className='text-gray-400'>{items.model}</h3>
                </div>
                <button 
                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300'
                onClick={() => removeitems(items)}
                >
                Remove
                </button>
              </div>
              )
        })
       }
    </>
  )
}

export default usercart