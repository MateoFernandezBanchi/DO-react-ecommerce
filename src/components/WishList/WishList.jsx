import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { WishListItem } from './WishListItem';


export const WishList = () => {
    const { wishList} = useCartContext ()

    return ( 
       
        <div className='d-flex'>
       { wishList.map (prod => <WishListItem prod={prod} key={prod.id}/>)}
              
        </div>
        
        

     );
}
 
