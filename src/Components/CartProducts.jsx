import { BiTrash } from 'react-icons/bi'
import { useRef, useEffect } from 'react'
import axios from 'axios'
import getConfig from '../Utils/getConfig'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'


const CartProducts = ({ product, setcarrito }) => {
    const Reference = useRef()
    const url = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    const [cantidad, setcantidad] = useState(product?.productsInCart.quantity)
    const [cantidadActualizada, setcantidadActualizada] = useState(cantidad)
    const [verify, setverify] = useState(false)

    useEffect(() => {
        if (Reference.current) {
            Reference.current.childNodes[0].childNodes[0].id = Reference.current.id
            Reference.current.childNodes[0].childNodes[1].id = Reference.current.id
        }
    })

    const deleteProduct = e => {
        axios.delete(`${url}/${e.target.id}`, getConfig())
            .then(res => {
                if (window.confirm('Do you want to delete this porduct?'))
                    setcarrito([res.data])
            }
            )
            .catch(err => console.log(err))
    }

    const patchCantidad = e => {
        e.preventDefault()
        axios.patch(url, {
            "id": e.target.id,
            "newQuantity": cantidadActualizada
        }, getConfig())
            .then(res => {
                setcantidad(cantidadActualizada)
                setverify(false)
                setcarrito([res.data])

            })
            .catch(err => window.alert('You have asked too many requests , please update the page'))

    }


    return (
        <div className='flex flex-col gap-3 border-b-2 border-dotted border-black'>
            <div className='flex justify-between text-xl'>
                <div className='text-gray-400'>{product.brand}</div>
                <button ref={Reference} id={product.id} onClick={deleteProduct}><BiTrash className='text-red-600 text-2xl' id={product.id} /></button>
            </div>
            <div className='text-2xl font-bold'>{product.title}</div>
            <form onSubmit={patchCantidad} id={product.id} className='flex w-1/4 md:w-1/6'>
                <div onClick={() => {
                    if (cantidadActualizada > 1) {
                        setcantidadActualizada(cantidadActualizada - 1)
                        if (cantidadActualizada - 1 !== cantidad) {
                            setverify(true)
                        }
                        else {
                            setverify(false)
                        }
                    }
                }} id={product.id} className='flex-1 text-center cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold' >-</div>
                <div className='flex-1 text-center'>{cantidadActualizada}</div>
                <div onClick={() => {
                    setcantidadActualizada(cantidadActualizada + 1)
                    if (cantidadActualizada + 1 !== cantidad) {
                        setverify(true)
                    } else {
                        setverify(false)
                    }
                }
                } className='flex-1 text-center cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold'>+</div>
                {verify && <button className='bg-green-600 hover:bg-green-700 flex-1 flex justify-center items-center   cursor-pointer text-lg font-bold text-white'><AiOutlineCheck /></button>}
            </form >
            <div className='self-end text-lg font-bold'>Total: <span className='font-bold text-green-600'>${(product.price * product.productsInCart.quantity.toFixed())}</span></div>
        </div >
    )
}

export default CartProducts