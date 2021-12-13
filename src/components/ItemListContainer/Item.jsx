import React from 'react'
import {Link} from 'react-router-dom'
import FormatPrice from "../../hooks/FormatPrice";
import WishWidget from '../NavBar/WishWidget';
import {useCartContext } from '../../context/CartContext';

export const Item = ({prod}) => {

    const {agregarWish} = useCartContext () 
    // const [productosWish, setProductosWish] = useState ()
   
    const insertWishList = () => {
        // setProductosWish(prod)
        agregarWish(prod)
    }

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
                       
                        <button onClick= {insertWishList} className='ml-5 heartSize buttonCount2'>
                        <WishWidget />
                        </button>
                        </div>
                    </div> 
                
             
        </div>
               
    )
}
