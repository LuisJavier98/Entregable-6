import { ReactElement, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCart, ProductInCart } from "../Interfaces/Interfaces";
interface Children {
  children: ReactElement
}
export interface DataContextProps {
  productsBought: ProductInCart[];
  setproductBought: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
  activateCar: () => void;
  carActive: boolean;
  setcarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)

function CreateContext({ children }: Children) {
  const [productsBought, setproductBought] = useState<ProductInCart[]>([])
  const [carActive, setcarActive] = useState<boolean>(false)
  const navigate = useNavigate()
  const activateCar = (): void => {
    if (localStorage.getItem('token')) { setcarActive(!carActive) }
    else { navigate('/Login') }
  }

  return (
    <DataContext.Provider value={{
      productsBought,
      setproductBought,
      activateCar,
      carActive,
      setcarActive
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default CreateContext
