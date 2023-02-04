import { createContext, useState } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";

export const DataContext = createContext()

function CreateContext({ children }) {
  const [productsBought, setproductBougth] = useState([])
  const [carActive, setcarActive] = useState(false)
  const navigate = useNavigate()
  const activateCar = () => {
    if (localStorage.getItem('token')) { setcarActive(!carActive) }
    else { navigate('/Login') }
  }
  return (
    <DataContext.Provider value={{
      productsBought,
      setproductBougth
      , activateCar,
      carActive,
      setcarActive
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default CreateContext
