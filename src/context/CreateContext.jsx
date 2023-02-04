import { createContext, useState } from "react";
import React from 'react'

export const DataContext = createContext()

function CreateContext({ children }) {
  const [productsBought, setproductBougth] = useState([])
  return (
    <DataContext.Provider value={{
      productsBought,
      setproductBougth
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default CreateContext
