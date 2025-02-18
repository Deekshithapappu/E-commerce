import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
function mobilepage() {

return (
    <>  
        <Navbar/>
        <div className="mobile-container">
            {
                mobileData.map((items) => {
                    return (
                        <>
                        <Link to={`/mobiles/${items.id}`}>
                        <div key={items.id} className="mobile-item" style={{ width: '20%', display: 'inline-block', margin: '2%' }}>
                            <img src={items.image} alt="" style={{ width: '100%' }} />
                            <div className='ml-10 '>
                            {items.company},{items.model}
                            </div>
                            
                        </div>
                        </Link>
            
                        </>
                    )
                })
            }
        </div>
    </>
)
}

export default mobilepage