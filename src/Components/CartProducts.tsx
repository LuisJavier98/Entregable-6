import { BiTrash } from 'react-icons/bi'
import { Dispatch } from 'react'
import axios from 'axios'
import getConfig, { url } from '../Utils/getConfig'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { Product, ProductInCart } from '../Interfaces/Interfaces'
import { toast } from 'react-toastify'

interface CartProduct {
    product: ProductInCart,
    setcarrito: Dispatch<any>
}

const CartProducts = ({ product, setcarrito }: CartProduct) => {

    const [cantidad, setcantidad] = useState(product?.cantidad)
    const [cantidadActualizada, setcantidadActualizada] = useState(product.cantidad)
    const [verify, setverify] = useState(false)


    const openNotification = (e: React.MouseEvent) => {
        if (!('id' in e.currentTarget) || !e.currentTarget.id) return
        const id = +e.currentTarget.id
        toast.info(() => (
            <div>
                <p className='text-white font-black text-center text-xl'>¿Quieres eliminar este producto?</p>
                <div className='flex gap-5 mt-3 justify-center'>
                    <button className='bg-blue-900 rounded-lg p-2 text-white font-bold' onClick={() => {
                        deleteProduct(id)
                        toast.dismiss();
                    }}>Confirmar</button>
                    <button className='bg-red-700 rounded-lg p-2 text-white font-bold' onClick={() => { toast.dismiss(); }}>Cancelar</button>
                </div>
            </div>
        ), {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            closeButton: false,
            theme:'dark'
        });
    }

    const deleteProduct = (id:number) => {
        axios.delete(`${url}/api/carrito/${id}`, getConfig())
            .then(res => {
                toast.success("Producto eliminado correctamente")
                setcarrito([res.data])
            }
            )
            .catch(err => console.log(err))
    }

    const patchCantidad = (e: React.FormEvent) => {
        if (!('id' in e.target)) return
        e.preventDefault()
        axios.patch(`${url}/api/carrito/${e.target.id}`, {
            "cantidad": cantidadActualizada
        }, getConfig())
            .then(res => {
                toast.success("Producto actualizado correctamente")
                setcantidad(cantidadActualizada)
                setverify(false)
                setcarrito([res.data])

            })
            .catch(err => window.alert('You have asked too many requests , please update the page'))
    }


    return (
        <div className='flex flex-col gap-3 border-b-2 border-dotted border-black'>
            <div className='flex justify-between text-xl'>
                <div className='text-gray-400'>{product.categoria}</div>
                <button id={product.id.toString()} onClick={openNotification}><BiTrash className='text-red-600 text-2xl' id={product.id.toString()} /></button>
            </div>
            <div className='text-2xl font-bold'>{product.nombre}</div>
            <form onSubmit={patchCantidad} id={product.id.toString()} className='flex w-1/4 md:w-1/6'>
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
                }} id={product.id.toString()} className='flex-1 text-center cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold' >-</div>
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
            <div className='self-end text-lg font-bold'>Total: <span className='font-bold text-green-600'>${(product.precio * product.cantidad)}</span></div>
        </div >
    )
}

export default CartProducts