import React from 'react'
import {useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const SignUp = () => {

    const {setPass, setEmail, setPasswordConfirmation, loginGoogle, user, 
      registrarUsuario, setPassword} = useAuthContext () 

    return (
        <>
        
             <div className="container formContainer col-lg-3">
              <h1 className=''>Crear Cuenta</h1>
                <form className="d-flex flex-column container pt-5 pb-5 formContainer"
                onSubmit={registrarUsuario}
                >
                  <div className='form-group'>
                    <input 
                   
                    className="form-control" type="text" 
                    name="email" placeholder="Nombre" ></input>
                  </div>
                  <div className='form-group'>
                    <input 
                   
                    className="form-control" type="text" 
                    name="email" placeholder="Apellido" ></input>
                  </div>
                  <div className='form-group'>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control" type="email" 
                    name="email" placeholder="email" ></input>
                  </div>
                  
                  <div className='form-group'>
                    <input 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control" type="password" 
                    name="password" placeholder="password" ></input>
                  </div>
                  <div className='form-group'>
                    <input 
                    onChange={(e)=>{setPasswordConfirmation(e.target.value)}}
                    className="form-control" type="password" 
                    name="password" placeholder="password confirmation" ></input>
                  </div>
                 
                  <div>
                    <button className='buttonCount2' type='submit'> Crear cuenta</button> 
                  </div>
                  <div>
                      <button className='buttonCount' onClick={loginGoogle}>Iniciar sesión con Google</button>
                  </div>
                  <div>
                    ¿Ya posees cuenta?<Link to='/IniciarSesion'>Inicia Sesión </Link> 
                  </div>
                  
                </form>

               
            </div>
            </>
        
    )
}


