import { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import '../App.scss'
import { Product } from '../Interfaces/Interfaces'
import { RootState } from '../store/index';
import Carousel from '../Components/Carousel'
import './Home.css'
import { Fab } from '@mui/material'
import { ImWhatsapp } from "react-icons/im";
import ForYouSection from '../Components/ForYouSection/ForYouSection'
import Categories from '../Components/Categories/Categories'
import DiscoverMore from '../Components/DiscoverMore/DiscoverMore'





export default function Home(): ReactElement {
  const products: Product[] = useSelector((state: RootState) => state.products.products)
  console.log(products)
  const dispatch = useDispatch()
  const [productName, setproductName] = useState('')
  const [carrito, setcarrito] = useState([])
  const [busqueda, setBusqueda] = useState<string>('')

  const { register, watch, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data)
  }

  useEffect(() => {
    const controller = new AbortController()
    dispatch(getAllProducts(controller.signal))
    return () => controller.abort()
  }, [])

  useEffect(() => {
    
    setproductName(watch('product')?.trim()?.toLowerCase())
  }, [watch('product')])


  return (
    <>
      <Carousel />
      <Categories />
      <ForYouSection />
      <DiscoverMore></DiscoverMore>
      <Fab color="primary" aria-label="add" className='buttonWhatsApp scale-150 '>
        <ImWhatsapp className='scale-200' />
      </Fab>
    </>
  )
}
