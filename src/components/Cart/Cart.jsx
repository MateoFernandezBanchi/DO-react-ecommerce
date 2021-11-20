import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {

    const { CartList, borrarCarrito, borrarItem} = useCartContext ()
    console.log (CartList)
    return (
        
        <div>
        {CartList.length === 0 ?   <h2 className='cartTitle'>Aun no ha comprado nada</h2>
        :
        
        <>
        <div className='cartContent container'>
                    {CartList.map(prod => <li className=''
                        key={prod.id}> <img className='fotoCart'
                            src={prod.foto1} alt="" />
                        <span className='prodName'>{prod.nombre}
                        </span> - Cantidad {prod.cantidad}
                        <span>- Precio: $ {prod.precio} </span>
                        <a> <FontAwesomeIcon icon={faTrashAlt} onClick={() => { borrarItem(prod.id) } } /></a>
                    </li>
                    )}

                </div><a className='btnTrash'> <FontAwesomeIcon icon={faTrashAlt} onClick={borrarCarrito} /></a>
                </>
        }
     
        </div>
    )
}
