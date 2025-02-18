import React from 'react'
import { watchData } from './data/watch'
function watches() {
    const reduceimages=watchData.slice(0,6)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Watches</h1>
    <div style={{ display: 'flex', padding: '10px' }}>
      {
        reduceimages.map((items)=>{
              return(
                <div key={items.id}>
                  <img src={items.image}/>
                </div>
              )
        })
      }
      </div>
      </>
  )
}

export default watches