import React from 'react'
import { womanData } from './data/woman'
function womens() {
    const reduceimages=womanData.slice(0,5)
  return (
    <>
    <h1 className='text-2xl font-bold mb-3 mt-3 ml-4'>Women Wear</h1>
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

export default womens