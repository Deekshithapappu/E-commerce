import React from 'react'
import { watchData } from '../data/watch'
import Navbar from './navbar'
function watchespage() {
  return (
    <>
    <Navbar/>
        <div className="mobile-container">
            {
                watchData.map((items) => {
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

export default watchespage