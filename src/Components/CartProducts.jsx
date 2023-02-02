import { BiTrash } from 'react-icons/bi'
import { useRef, useEffect } from 'react'
import axios from 'axios'
import getConfig from '../Utils/getConfig'


const CartProducts = ({ product }) => {
    const Reference = useRef()

    useEffect(() => {
        if (Reference.current) {
            Reference.current.childNodes[0].childNodes[0].id = Reference.current.id
            Reference.current.childNodes[0].childNodes[1].id = Reference.current.id
        }
    })

    const deleteProduct = e => {
        URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${e.target.id}`
        axios.delete(URL, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const NewCartRest = e => {
        if (+e.target.className > 1) {
            URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
            axios.patch(URL, {
                "id": e.target.id,
                "newQuantity": +e.target.className - 1
            }, getConfig())
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
    }

    const NewCartPlus = e => {
        URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        axios.patch(URL, {
            "id": e.target.id,
            "newQuantity": +e.target.className + 1
        }, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between text-xl'>
                <div className='text-gray-400'>{product.brand}</div>
                <button ref={Reference} id={product.id} onClick={deleteProduct}><BiTrash className='text-red-600 text-2xl' id={product.id} /></button>
            </div>
            <div className='text-2xl font-bold'>{product.title}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={NewCartRest} id={product.id} className={product.productsInCart.quantity} >-</button>
                <div id={product.id} className='card_quantityCart'>{product.productsInCart.quantity}</div>
                <button onClick={NewCartPlus} id={product.id} className={product.productsInCart.quantity}>+</button>
            </div>
            <div className='self-end text-lg'>Total: <span className='font-bold'>${product.price * product.productsInCart.quantity}</span></div>
        </div>
    )
}

export default CartProducts