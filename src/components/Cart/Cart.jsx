import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {

    const { CartList, borrarCarrito, borrarItem, cartTotal} = useCartContext ()
    console.log (CartList)
    return (
      <div>
        {CartList.length === 0 ? (
          <>
            <h2 className="cartTitle mt-5">Aun no ha comprado nada</h2>
            <img
              className="gifWaiting"
              src="https://cdn.dribbble.com/users/1813781/screenshots/5597337/dribbble-girl-with-clock.gif"
              alt=""
              srcset=""
            />
            <div>
              <Link to="/">
                <button className="buttonCount mt-5">
                  Seleccionar un producto
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="cartContent container">
              <table>
                <tr className="headerTable">
                  <td> </td>
                  <td>Nombre</td>
                  <td>Cantidad</td>
                  <td className="pl-5 pr-5">Precio</td>
                  <td>Subtotal</td>
                  <td>Borrar item</td>
                </tr>
                {CartList.map((prod) => (
                  <tr className="" key={prod.id}>
                    <td>
                      <img className="fotoCart" src={prod.foto1} alt="" />
                    </td>
                    <td className="prodName">{prod.nombre}</td>
                    <td>{prod.cantidad}</td>
                    <td>$ {prod.precio} </td>
                    <td> $ {prod.subtotal} </td>
                    <td>
                      <a>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => {
                            borrarItem(prod.id);
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}

                <tr className="totalCountContainer">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> <button className='buttonCount'>Finalizar Compra</button> </td>
                  <td className="totalCount">
                    <p> Total a pagar </p>
                    <p> $ {cartTotal} </p>
                  </td>
                  <td className="pr-5">
                    Borrar Carrito
                    <a className="btnTrash">
                      {" "}
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={borrarCarrito}
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    );
}
