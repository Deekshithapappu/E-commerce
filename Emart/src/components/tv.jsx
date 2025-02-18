import React from 'react'
import { tvData } from './data/tv'
function tv() {
    const reduceimages=tvData.slice(0,6)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Televisions</h1>
    <div style={{ display: 'flex', padding: '10px' }}>
      {
        reduceimages.map((items)=>{
              return(
                <div key={items.id}>
                  <img src={items.image} alt="" />
                </div>
              )
        })
      }
      </div>
      </>
  )
}

export default tv