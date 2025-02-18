import React from 'react'
import { createContext,useContext,useState } from 'react'

const store=createContext()

export const Cartprovider=({children})=>{
    const[cartitems,setcartitems]=useState([])

    const additems=(items)=>{
         setcartitems([...cartitems,items])
    }
    const removeitems=(items)=>{
        setcartitems(cartitems.filter((item)=>item!==items))
    }

    return(
        <store.Provider value={{cartitems,additems,removeitems}}>
            {children}
        </store.Provider>
    )
}
export const useCart=()=>{
    return useContext(store)
}