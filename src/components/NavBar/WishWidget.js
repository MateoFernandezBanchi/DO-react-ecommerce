import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext';

function WishWidget() {
    const {wishList } = useCartContext();

   

  
    return (
        <div>
            {/* <img src="imagenes/cartlogo.png" width="15%"></img> */}
            <FontAwesomeIcon style={{color: wishList.length > 0 ? 'red' : '#47320A'}} icon={faHeart} />
        </div>
    )
}

export default WishWidget
