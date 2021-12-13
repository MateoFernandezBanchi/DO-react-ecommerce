import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import FormatPrice from "../../hooks/FormatPrice";
import FormBuyer from './FormBuyer'


export const Cart = () => {
  
    const { CartList, borrarCarrito, borrarItem, cartTotal} = useCartContext ()

    return (
      <div>
        {CartList.length === 0 ? (
          <>
            <h2 className="cartTitle mt-5">Carrito vacío ¡Elija un producto!</h2>
            <img className="gifWaiting" src="https://cdn.dribbble.com/users/1813781/screenshots/5597337/dribbble-girl-with-clock.gif" alt=""/>
            <div>
              <Link to="/productos">
                <button className="buttonCount mt-5">
                  Seleccionar un producto
                </button>
              </Link>
            </div>
          </>
        ) : (
          <><div className="row mr-3 ml-3">
              <div className="cartContent container col-lg-7">
                <table>
                <thead>
                  <tr className="headerTable">
                    <td>Producto</td>
                    <td>Nombre</td>
                    <td>Cantidad</td>
                    <td className="pl-5 pr-5">Precio</td>
                    <td>Subtotal</td>
                    <td>Borrar item</td>
                  </tr>
                  </thead>
                  {CartList.map((prod) => (
                    <tbody key={prod.id}>
                    <tr>
                      <td>
                        <img className="fotoCart" src={prod.imagen} alt="" />
                      </td>
                      <td className="prodName">{prod.nombre}</td>
                      <td>{prod.cantidad}</td>
                      <td>{FormatPrice(prod.precio)} </td>
                      <td> {FormatPrice(prod.subtotal)} </td>
                      <td>
                        <button className='buttonCount2 '>
                          <FontAwesomeIcon icon={faTrashAlt} onClick={() => {borrarItem(prod.id)}} />
                          </button>
                      </td>
                    </tr>
                    </tbody>
                  ))}
                  <tfoot>
                  <tr className="totalCountContainer  ">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="totalCount p-2 pr-3">
                      <p> Total a pagar: {FormatPrice(cartTotal)} </p>
                    </td>
                    <td className="pr-3">
                      <span className='pr-3'>Borrar Carrito</span>
                      <button className='buttonCount '>
                        <FontAwesomeIcon icon={faTrashAlt} onClick={borrarCarrito} />
                      </button>
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <FormBuyer />
                  
              </div> 
            </>                  
        )}
      </div>
    );
}
