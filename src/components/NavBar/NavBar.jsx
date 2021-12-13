import React from 'react'
import './NavBar.css';
import CartWidget from './CartWidget'
import WishWidget from './WishWidget'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import SearchUI from '../Search/SearchUI';
import {useAuthContext } from '../../context/AuthContext';


const NavBar = () => {
// const resetSearch = () => {
//   saveSearch('')
// }

const {photo, displayName, user, cerrarSesion} = useAuthContext () 
const { cantidadItem } = useCartContext()
  return (
        <div className='navContainer'>
          <header className="d-flex flex-wrap">
            <div className="d-flex header">
            <Link to='/'> 
              <img className="logoNav navbar-brand" srcSet="https://lh3.googleusercontent.com/vxD_NrZMz5nYaPKTgJ9l6q9aZN63QjRP6_TI63BwU4Y2pm3OXc3k56wvHcar2uN1nXBkqr4kQ2LZPOVJDDEVOgmr_-rVcovmdQaGrTQeJLZ32UGlBdww4gwpcdGwTgJsd-TcLQp_owPsgWqaREDlN0YCmWIoDDbWpdRdmjF57UVCvClnZ6cIfktySb3q9HhMdC39rdsUi0pOIkjNqXS6vlzcfu0nsZ5P5xHnc5VQpPM3MxEc5-uk2QwkCP6G8yRR7JkhYpRa3vsPLJID-GpK7BQUvi8jCj4FJKT2LsQy3tuPtPKEpqItGLrX59q0_pORj8UaryOQtfrT-yLDp8X289QeKeu1b5ZvMRdM4uQKFH3O-qlI-otTv3VpFmcGqqamYyULT3GPoCvUXf5fQ7usCP74VR6AL-X3gtq6Pg9qsz6C1uDlAd2iJfScgaQ_50M2pFEkwxlPiNd0z4X50hT1ggbEurwEMZWraSNKOB3IPyllsAAGocWZtnMVq80AAHJ53Nhfq97SMQ9fUlmrKogAJtq8_INPPtr6mSEuGSkoWMZzFLE1p27bx1MZ59P5Y2gJ3Y8ypK2x7ijiwUfp9vX95pB21D4F5yMqiDV1UEjmlRjYRIGenM8OySo0iJbdPxgDrNlyN4Csa_PRA39LyB3ihW4JK72K3mukt7f7EFb10qJHriItpfekdBjTgyrs-khpGOUo8l7k44ukhvtBliFFtnVq=s526-no?authuser=0" alt="logo"/>
              </Link>        
              <h1 className="tituloNav">DO - MUEBLES A MEDIDA</h1>
            </div>
            <div>
                <SearchUI />
            </div>
           </header>
          <nav className="navbar navbar-expand-lg navbar-light  d-flexCenter">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto d-flexCenter">
                
              <Link to='/'> <li className="nav-item nav-link">Inicio</li></Link>
              <Link to='/productos'> <li className="nav-item nav-link">Todos los productos</li></Link>
                <Link to='/productos/categoria/Placards'><li className="nav-item nav-link" >Placards</li></Link>
                <Link to='/productos/categoria/Cama' > <li className="nav-item nav-link" >Camas</li></Link>
                <Link to='/productos/categoria/Escritorios'> <li className="nav-item nav-link" >Escritorios</li></Link>
                <Link to='/Cart'> 
                <li className="nav-item d-flex nav-link cartItem"><CartWidget />
                  <div className='cantidadItem'>{cantidadItem() !== 0 && cantidadItem()}</div></li>
                  </Link>
                  <Link to='/Wishlist'> 
                <li className="nav-item ml-3 nav-link cartItem"><WishWidget /></li>
                  </Link>
                   <Link to='/CrearCuenta'> 
                <li className="nav-item ml-3 nav-link cartItem">Crear Cuenta</li>
                  </Link>
                 <Link to='/IniciarSesion'> 
                <li className="nav-item ml-3 nav-link cartItem">Iniciar Sesion</li>
                  </Link>
                  <li class="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" 
                  role="button" data-toggle="dropdown" aria-expanded="false">
        {photo ?
                    <div className='d-flex align-items-center'>
                        <img src={photo} alt="user photo" className='userPhoto'/>
                        <span className='ml-2 align-self-center'> {displayName} </span>
                    </div>
                    : user ? <span> {user.email}  </span> : <span></span>
                    }  
                    </Link>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" onClick={cerrarSesion}>Cerrar Sesión</Link>
         
        </div>
      </li>
                   
              </ul>
            </div>
          </nav>
        </div>

)
}

export default NavBar