import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <div>
            {/* <img src="imagenes/cartlogo.png" width="15%"></img> */}
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget
