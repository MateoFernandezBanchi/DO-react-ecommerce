import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Carousel from '../Carousel/Carousel'
import { useCartContext } from '../../context/CartContext'

export const ItemDetail = ({prod, state, onAdd}) => {
  const {disponibleProd } = useCartContext ()

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
                        foto1={prod.foto1}
                        foto2={prod.foto2}
                        foto3={prod.foto3}
                      />
                    </div>
                    <div className="col">
                      <h3> $ {prod.precio}</h3>
                      <p>Categoria: {prod.categoria} </p>
                      <p>Stock {prod.stock}</p>
                      <p>{prod.descripcion}</p>
                      <p> {disponibleProd} </p>
                    </div>
                  </div>

                  <div className="card-footer">
                    {state ? (
                      <><ItemCount stock={prod.stock} initial="1" onAdd={onAdd} /></>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="buttonCount">Seguir comprando</button>
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
