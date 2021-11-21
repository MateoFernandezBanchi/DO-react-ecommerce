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
              <img className="logoNav" src="https://lh3.googleusercontent.com/vxD_NrZMz5nYaPKTgJ9l6q9aZN63QjRP6_TI63BwU4Y2pm3OXc3k56wvHcar2uN1nXBkqr4kQ2LZPOVJDDEVOgmr_-rVcovmdQaGrTQeJLZ32UGlBdww4gwpcdGwTgJsd-TcLQp_owPsgWqaREDlN0YCmWIoDDbWpdRdmjF57UVCvClnZ6cIfktySb3q9HhMdC39rdsUi0pOIkjNqXS6vlzcfu0nsZ5P5xHnc5VQpPM3MxEc5-uk2QwkCP6G8yRR7JkhYpRa3vsPLJID-GpK7BQUvi8jCj4FJKT2LsQy3tuPtPKEpqItGLrX59q0_pORj8UaryOQtfrT-yLDp8X289QeKeu1b5ZvMRdM4uQKFH3O-qlI-otTv3VpFmcGqqamYyULT3GPoCvUXf5fQ7usCP74VR6AL-X3gtq6Pg9qsz6C1uDlAd2iJfScgaQ_50M2pFEkwxlPiNd0z4X50hT1ggbEurwEMZWraSNKOB3IPyllsAAGocWZtnMVq80AAHJ53Nhfq97SMQ9fUlmrKogAJtq8_INPPtr6mSEuGSkoWMZzFLE1p27bx1MZ59P5Y2gJ3Y8ypK2x7ijiwUfp9vX95pB21D4F5yMqiDV1UEjmlRjYRIGenM8OySo0iJbdPxgDrNlyN4Csa_PRA39LyB3ihW4JK72K3mukt7f7EFb10qJHriItpfekdBjTgyrs-khpGOUo8l7k44ukhvtBliFFtnVq=s526-no?authuser=0" alt="logo"/>
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