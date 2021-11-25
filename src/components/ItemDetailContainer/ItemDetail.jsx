import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Carousel from '../Carousel/Carousel'
import { useCartContext } from '../../context/CartContext'

export const ItemDetail = ({prod, state, onAdd}) => {


            return (
              <>
                <div className="container">
                  <div className="detail-header">
                    <h2> {prod.nombre} </h2>
                  </div>
                  <div className="card-body row">
                    <div className="col carousel">
                      {/* <img className='cardFoto' src={prod.foto} alt="" ></img> */}
                      <Carousel
                        foto1={prod.imagen}
                        foto2={prod.imagen2}
                        foto3={prod.imagen3}
                      />
                    </div>
                    <div className="col">
                      <h3> $ {prod.precio}</h3>
                      <p>Categoria: {prod.categoria} </p>
                      <p>Stock {prod.stock}</p>
                      <p>{prod.descripcion}</p>
                      
                    </div>
                  </div>

                  <div className="card-footer footer-detail">
                    {state ? (
                      <><ItemCount stock={prod.stock} initial="1" onAdd={onAdd} /></>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="buttonCount2">Seguir comprando</button>
                        </Link>
                        <Link to="/Cart">
                          <button className="buttonCount">Ir al Carrito</button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </>
            );
}
// }
