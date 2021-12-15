import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../../context/AuthContext';

function WishWidget() {
    const {wishList } = useAuthContext();

    return (
        <div>
            <FontAwesomeIcon style={{color: wishList.length > 0 ? 'red' : '#47320A'}} icon={faHeart} />
        </div>
    )
}
export default WishWidget
