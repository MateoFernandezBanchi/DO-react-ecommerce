import React from 'react'
import './NavBar.css';
import CartWidget from './CartWidget'

const NavBar = () => {


  return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <div className="d-flex">
              <a className="navbar-brand" href="#"> <img className="logoNav" src="imagenes/LogoFinal.png" alt="" srcset="" />
              </a>
              <h1 className="tituloNav">DO - MUEBLES A MEDIDA</h1>
            </div>

            <div>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control2 mr-sm-2" type="search" placeholder="¿Que deseas buscar?" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                  </form>
                </li>
               
              </ul>

            </div>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flexCenter">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto d-flexCenter">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Categorias
                  </a>
                  <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                    <a class="dropdown-item " href="#">Escritorios</a>
                    <a class="dropdown-item " href="#">Placards</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item " href="#">Camas</a>
                    <a class="dropdown-item " href="#">Muebles a medida</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Escritorios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Placards</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Camas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Muebles a medida</a>
                </li>
                <li class="nav-item d-flex">
                  <a class="nav-link cartItem" href="#" tabindex="-1"><CartWidget /></a>
                </li>
              </ul>

            </div>
          </nav>
        </div>

)
}

export default NavBar