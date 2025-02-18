import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../components/data/mobiles'
import Navbar from '../components/pages/navbar';
import { useCart } from '../context';
function mobilesingle() {
    const {additems} = useCart()
    const {id} = useParams();
    const details = mobileData.find((item) => item.id === id);
    return (
        <>
        <Navbar/>
        <div className='flex'>
            <span className='w-1/4 h-64 bg-white flex justify-center ml-20 m-20'>
                <img src={details.image} alt="" className='object-contain h-full' />
            </span>
            <span className='w-1/2 p-10 mt-18 mr-10'>
                <h2 className='text-2xl font-bold mb-2'>{details.company}</h2>
                <h2 className='text-2xl font-bold mb-2'>{details.model}</h2>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Rs.{details.price}</button>
                <p className='text-gray-600'>{details.description}</p>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'>Buy Now</button>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
                  onClick={()=>additems(details)}
                >Add Cart</button>
            </span>
        </div>
        </>
    );
}

export default mobilesingle