import React from 'react'
import { computerData } from './data/computers'
function computers() {
    const reduceimages=computerData.slice(0,6)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Computers</h1>
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

export default computers