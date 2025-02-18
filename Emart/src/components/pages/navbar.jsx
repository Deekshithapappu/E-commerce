import React from 'react'
import '../../index.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context';
function navbar() {
  const {cartitems}=useCart()
return (
  <>
  <div className="flex justify-between items-center p-4 bg-white shadow-md">
     <div>
         <h2 className='text-2xl font-bold'>E-Mart</h2>
     </div>
     <div>
      <div>
        <input type="text" placeholder='Search..' className='w-4/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'  />
      </div>
     </div>
     <div className='flex items-center space-x-2 mr-4'>
      <Link to='/signin'>
      <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>SignIn</button>
      </Link>
      <Link to='/signout'>
      <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>SignOut</button>
      </Link>
     </div>
     <Link to='/usercart'>
     <div className='text-xl font-semibold mr-10'>
      <strong>cart {cartitems.length}</strong>
     </div>
     </Link>
  </div>
  <div className='p-5 bg-gray-100 '>
     <ul className='flex space-x-10 ml-4'>
      <Link to='/mobiles'><li className='hover:text-blue-500 cursor-pointer'><strong>Mobiles</strong></li></Link> 
      <Link to='/computer'><li className='hover:text-blue-500 cursor-pointer'><strong>Computers</strong></li></Link> 
      <Link to='/tv'><li className='hover:text-blue-500 cursor-pointer'><strong>TV</strong></li></Link>
      <Link to='/mens'><li className='hover:text-blue-500 cursor-pointer'><strong>Mens fashion</strong></li></Link>
      <li className='hover:text-blue-500 cursor-pointer'><strong>Women dressing</strong></li>
      <li className='hover:text-blue-500 cursor-pointer'><strong>AC</strong></li>
      <li className='hover:text-blue-500 cursor-pointer'><strong>Furniture</strong></li>
      <li className='hover:text-blue-500 cursor-pointer'><strong>Books</strong></li>
      <li className='hover:text-blue-500 cursor-pointer'><strong>Fridge</strong></li>
      <li className='hover:text-blue-500 cursor-pointer'><strong>Speakers</strong></li>
      <Link to='/watches'><li className='hover:text-blue-500 cursor-pointer'><strong>Watches</strong></li></Link>
     </ul>
  </div>
  </>
)
}

export default navbar
