import React from 'react'
import {useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const {error, setName, mensajeError, mensajeSuccess, success,
      registrarUsuario, setEmail, setPassword, setPasswordConfirmation} = useAuthContext () 
    return (
        <>
        
             <div className="container formContainer col-lg-3">
              <h1 className='AuthTitle'>Crear Cuenta</h1>
                <form className="d-flex flex-column container pb-5 formContainer"
                onSubmit={registrarUsuario } 
                >
                   <div className='form-group'>
                    <input 
                    onChange={(e)=>{setName(e.target.value)}}
                    className="form-control" type="text" 
                    name="name" placeholder="Nombre y Apellido"
                    ></input>
                  </div>
                  <div className='form-group'>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control" type="email" 
                    name="email" placeholder="email"
                    ></input>
                  </div>
                  
                  <div className='form-group'>
                    <input 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control" type="password" 
                    name="password" placeholder="password"
                     ></input>
                  </div>
                  <div className='form-group'>
                    <input 
                   onChange={(e)=>{setPasswordConfirmation(e.target.value)}}
                    className="form-control" type="password" 
                    name="passwordConfirmation" placeholder="password confirmation" 
                    ></input>
                  </div>
                  {error? <p className='btn-danger'> {mensajeError} </p> 
                  : success ? <p className='btn-success'> {mensajeSuccess} </p> : null }
                  <div>
                    <button className='buttonCount2' type='submit'> Crear cuenta</button> 
                  </div>
                  <div>
                  </div>
                  <div>
                    ¿Ya posees cuenta?<Link to='/IniciarSesion'>Inicia Sesión </Link> 
                  </div>      
                </form>
            </div>
            </>
        
    )
}


