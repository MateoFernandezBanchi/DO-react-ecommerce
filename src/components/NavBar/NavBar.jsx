import React from 'react'
import './NavBar.css';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const NavBar = () => {

const { cantidadItem } = useCartContext()
  return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light d-flex">
            <div className="d-flex header">
            <Link to='/'> 
              <a className="navbar-brand" href="#"> 
              <img className="logoNav" src="imagenes/LogoFinal.png" alt="" srcset="" />
              </a>
              </Link>
              
              <h1 className="tituloNav">DO - MUEBLES A MEDIDA</h1>
            
            </div>

            <div className='search'>
              
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control2 mr-sm-2" type="search" placeholder="¿Que deseas buscar?" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                  </form>
                

            </div>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-light  d-flexCenter">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto d-flexCenter">
              <li class="nav-item">
                  <Link to='/'> 
                  <a class="nav-link " href="#">Inicio</a>
                  </Link>
                </li>
                
                <li class="nav-item">
                <Link to='/categoria/Placards'> 
                  <a class="nav-link " href="#">Placards</a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to='/categoria/Cama'> 
                  <a class="nav-link " href="#">Camas</a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to='/categoria/Escritorios'> 
                  <a class="nav-link " href="#">Escritorios</a>
                  </Link>
                </li>
                <li class="nav-item d-flex">
                <Link to='/Cart'> 
                
                  <a class="nav-link cartItem" href="#" tabindex="-1"><CartWidget /></a>
                  <div className='cantidadItem'>{cantidadItem() !== 0 && cantidadItem()}</div>
                  </Link>
                </li>
              </ul>

            </div>
          </nav>
        </div>

)
}

export default NavBar