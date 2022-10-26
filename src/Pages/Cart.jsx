import React from 'react'

const Cart = ({carActive}) => {
    return (

        <div className={carActive ? 'card_car_inactive' : 'card_car'}>
            Shoping cart
            <div>

            </div>
        </div>

    )
}

export default Cart