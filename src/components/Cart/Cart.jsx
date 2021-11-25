import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {getFirestore} from '../../services/getFirestore';
import firebase from 'firebase';
import ModalBuyer from '../ModalBuyer/ModalBuyer'


export const Cart = () => {

    const { CartList, borrarCarrito, borrarItem, cartTotal} = useCartContext ()
    const [formData, setFormData] = useState ( {
      name: '',
      email: '',
      phone: ''

    } ) 
    const [error, guardarError] = useState (false)
   
    const generarOrden = (e) => {
          e.preventDefault()

          if (formData.email.trim() === '' || formData.name.trim() === '' || formData.phone.trim()=== '') {
            guardarError(true)
            return;
          }
          guardarError(false)
          let orden = {}
          orden.date = firebase.firestore.Timestamp.fromDate(new Date());
          orden.buyer = formData
          orden.total = cartTotal

          orden.items = CartList.map (cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.subtotal;

            return {id, nombre, precio}
          } )

          const dbQuery = getFirestore ()
          dbQuery.collection ('orders').add(orden)
          .then(resp => console.log(resp))
          .catch (err=> console.log (err))
          
    }

    const handleChange = (e) => {

      setFormData ( {
        ...formData,
        [e.target.name]: e.target.value
      } )

    }

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
          <><div className="row mr-3 ml-3">
              <div className="cartContent container col-lg-7">
                <table>
                  <tr className="headerTable">
                    <td>Producto</td>
                    <td>Nombre</td>
                    <td>Cantidad</td>
                    <td className="pl-5 pr-5">Precio</td>
                    <td>Subtotal</td>
                    <td>Borrar item</td>
                  </tr>
                  {CartList.map((prod) => (
                    <tr className="" key={prod.id}>
                      <td>
                        <img className="fotoCart" src={prod.imagen} alt="" />
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
                              borrarItem(prod.id)
                            } } />
                        </a>
                      </td>
                    </tr>
                  ))}

                  <tr className="totalCountContainer  ">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="totalCount p-2 pr-3">
                      <p> Total a pagar: $ {cartTotal} </p>
                    </td>
                    <td className="pr-3">
                      <span className='pr-3'>Borrar Carrito</span>
                      <a className="btnTrash">
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={borrarCarrito} />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="container formContainer col-lg-3">
                {error? <p className='btn-danger'>todos los campos son obligatorios</p> : null}
                <form
                  className="d-flex flex-column container pt-5 pb-5 formContainer"
                  onSubmit={generarOrden}
                  onChange={handleChange}
                >
                  <div className='form-group'>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="nombre"
                      value={formData.name}
                    ></input>
                  </div>
                  <div className='form-group'>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      placeholder="telefono"
                      value={formData.phone}
                    ></input>
                  </div>
                  <div className='form-group'>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="email"
                      value={formData.email}
                    ></input>
                  </div>
                  <div>
                    <ModalBuyer data= {formData} total= {cartTotal} errorValue= {error} />
                      
                  </div>
                </form>
              </div>
                  
              </div> 
            </>                  
        )}


      </div>
    );
}
