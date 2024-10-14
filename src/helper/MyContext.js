"use client"
import React, { createContext, useState } from 'react'
export const TheContext = createContext();
const MyContext = ({children}) => {
  const [openMoreNav, setopenMoreNav] = useState(false)
  return (
  <TheContext.Provider value={{openMoreNav,setopenMoreNav}}>
    {children}
  </TheContext.Provider>
  )
}

export default MyContext