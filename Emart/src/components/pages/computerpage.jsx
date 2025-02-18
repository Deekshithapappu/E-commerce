import React from 'react'
import Navbar from './navbar'
import { computerData } from '../data/computers'
function computerpage() {
  return (
    <>
    <Navbar/>
        <div className="mobile-container">
            {
                computerData.map((items) => {
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

export default computerpage