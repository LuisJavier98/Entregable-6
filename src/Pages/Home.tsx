import { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Cart from './Cart'
// import Filter from '../Components/Filter'
import LazyCardProduct from '../Components/CardProduct'
import '../App.css'
import { Product } from '../Interfaces/Interfaces'
import { RootState } from '../store/index';


export default function Home():ReactElement {
  const products: Product[] = useSelector((state:RootState) => state.products.products)
  console.log(products)
  const dispatch = useDispatch()
  const [productName, setproductName] = useState('')
  const [carrito, setcarrito] = useState([])

  const { register, formState: { errors }, watch, handleSubmit } = useForm()
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
      {localStorage.getItem('token') && <Cart setcarrito={setcarrito} carrito={carrito} />}
      <div className='md:flex pt-10 gap-10 h-full pl-10'>
        {/* <Filter /> */}
        <div >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 '>
            <form className=' col-span-1 md:col-span-2 lg:col-span-3' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" className='w-full h-12 rounded-xl' placeholder='What are you looking for?' autoComplete='off' {...register('product', { required: true })} />
            </form>
            {
              products?.length !== 0 ?
                products?.map((product: Product):ReactElement => <LazyCardProduct carrito={carrito} setcarrito={setcarrito} product={product} />)
                :
                <div className='text-gray-800 text-2xl font-bold my-14'>Products not found</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
