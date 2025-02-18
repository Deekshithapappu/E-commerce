import React from 'react'
import { mobileData } from './data/mobiles'
import { Link } from 'react-router-dom'
function mobile() {
    const reduceimages=mobileData.slice(0,6)
return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Mobiles</h1>
    <Link to='/mobiles'>
    <div style={{ display: 'flex', padding: '10px' }}>
        {reduceimages.map((items) => {
            return (
                <div key={items.id} style={{padding:'4px'}}>
                    <img src={items.image} alt="" className='w-full h-48 object-cover landing-image' />
                </div>
            )
        })}
    </div>
    </Link>
    </>
)
}

export default mobile