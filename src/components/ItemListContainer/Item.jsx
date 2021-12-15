import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import FormatPrice from "../../PriceHook/FormatPrice";
import {useAuthContext } from '../../context/AuthContext';
import { useEffect } from 'react/cjs/react.development';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
export const Item = ({prod}) => {

    const {agregarWish, wishList} = useAuthContext () 
    const [wishAdded, setWishAdded] = useState (false)
    const insertWishList = () => {
        agregarWish(prod)    
    }
    useEffect (() => {
          if (wishList.find((i) => i.id === prod.id)) {
        setWishAdded(true)
       
    } else {setWishAdded(false)} },[wishList])
  
    return (
       
        <div className='card w-25 mt-4 card-margin'>
            
                    <div className='card-header'>
                        <h3 className='titleCardHeader'>{prod.nombre} </h3>
                       
                    </div>
                    <div className='card-body'>
                        <img className='cardFoto' srcSet={prod.imagen} alt="" ></img>
                        <p className='categoria'>{prod.categoria}</p>  
                    </div>
                    <div className='card-footer'>
                        <p className='precio'> {FormatPrice(prod.precio)} </p>
                        <div className='d-flex'>
                        
                        <Link to= {`/detail/${prod.id}`}>
                        <button className='buttonCount2'>Ver detalles</button>  
                        </Link>
                       
                        <button style={{color: wishAdded ? 'red' : 'black' } } onClick= {insertWishList} className='ml-5 heartSize buttonWish'>
                        <FontAwesomeIcon icon={faHeart} />
                        </button>
                        </div>
                    </div> 
                
             
        </div>
               
    )
}
