import React from 'react'
import Navbar from './navbar'
import { menData } from '../data/men'
function menspage() {
  return (
    <>
    <Navbar/>
        <div className="mobile-container">
            {
                menData.map((items) => {
                    return (
                        <>
                        <div key={items.id} className="mobile-item" style={{ width: '20%', display: 'inline-block', margin: '2%' }}>
                            <img src={items.image} alt="" style={{ width: '100%' }} />
                            <div className='ml-10 '>
                            {items.company} {items.model}
                            </div>
                            
                        </div>
            
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default menspage