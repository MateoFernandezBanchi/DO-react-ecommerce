import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

function WishWidget() {
    return (
        <div>
            {/* <img src="imagenes/cartlogo.png" width="15%"></img> */}
            <FontAwesomeIcon icon={faHeart} />
        </div>
    )
}

export default WishWidget
