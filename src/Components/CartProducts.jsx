import React, { useState } from 'react'
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
        URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${e.target.id}`
        axios.delete(URL, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const NewCartRest = e => {
        if (+e.target.className > 1) {
            URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
            axios.patch(URL, {
                "id": e.target.id,
                "newQuantity": +e.target.className - 1
            }, getConfig())
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
    }

    const NewCartPlus = e => {
        URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.patch(URL, {
            "id": e.target.id,
            "newQuantity": +e.target.className + 1
        }, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div className='card_productCart'>
            <div className='card_deleteCart'>
                <div style={{ color: 'gray' }}>{product.brand}</div>
                <button ref={Reference} id={product.id} onClick={deleteProduct}><BiTrash id={product.id} /></button>
            </div>
            <div style={{ textAlign: 'start', fontWeight: '600' }}>{product.title}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={NewCartRest} id={product.id} className={product.productsInCart.quantity} >-</button>
                <div id={product.id} className='card_quantityCart'>{product.productsInCart.quantity}</div>
                <button onClick={NewCartPlus} id={product.id} className={product.productsInCart.quantity}>+</button>
            </div>
            <div style={{ textAlign: 'end', color: 'gray' }} className='card_totalCart'>Total: <span style={{ color: 'black', fontWeight: '600' }}>${product.price * product.productsInCart.quantity}</span></div>
        </div>
    )
}

export default CartProducts