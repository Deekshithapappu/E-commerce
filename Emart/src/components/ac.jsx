import React from 'react'
import { acData } from './data/ac'
function ac() {
    const reduceimages=acData.slice(0,5)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>AC</h1>
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

export default ac