import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import FormatPrice from "../../PriceHook/FormatPrice";
import ItemCount from '../ItemCount/ItemCount'
import {useCartContext } from '../../context/CartContext';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuthContext } from '../../context/AuthContext';

export const WishListItem = ({prod}) => {
 
     const [addCart, setAddCart] = useState (true)
    const { agregarCarrito} = useCartContext () 
    const {borrarItemWish} = useAuthContext () 
     const [count, setCount] = useState (0)
     const onAdd = (cant) => {
         setCount (cant)
         setAddCart(false);
         agregarCarrito({...prod, cantidad: cant})
     }

    return (
        
        <div className='container'>
               <div className='card mt-4 card-margin '>
            
            <div className='card-header d-flex'>
                <h3 className='titleCardHeader'>{prod.nombre} </h3>
               
            </div>
            <div className='card-body row'>
              <div className='col'>
              <img className='cardFotoWish ' srcSet={prod.imagen} alt="Foto producto" ></img>
                <p className='categoria'>{prod.categoria}</p>  
                <p>Stock: {prod.stock} </p>
              </div>
               <div className='col'>
                  <p>{prod.descripcion}</p>
                  <button onClick={() => {borrarItemWish(prod.id)}} className='ml-5 mt-5 titleCardHeader buttonCount2'>
                  Eliminar <FontAwesomeIcon icon={faTrashAlt}  /></button>
               </div>
            </div>
            <div className='card-footer'>
                <p className='precio'> {FormatPrice(prod.precio)} </p>
                 {addCart ? (
                      <><ItemCount stock={prod.stock} initial="1" onAdd={onAdd} /></>) 
                      : (<>
                        <Link to="/">
                          <button className="buttonCount2">Seguir comprando</button>
                        </Link>
                        <Link to="/Cart">
                          <button className="buttonCount">Ir al Carrito</button>
                        </Link>
                      </>)} 
                      
                
            </div> 
    
</div>
        </div>
    )
}
