import React from 'react'
import { furnitureData } from './data/furniture'
function furniture() {
    const reduceimages=furnitureData.slice(0,5)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Furniture</h1>
    <div style={{ display: 'flex', padding: '10px' }}>
      {
        reduceimages.map((items)=>{
              return(
                <div key={items.id} style={{padding:'5px'}}>
                  <img src={items.image} alt="" />
                </div>
              )
        })
      }
      </div>
    </>
  )
}

export default furniture