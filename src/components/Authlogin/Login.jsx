import React from 'react'
import { Link } from 'react-router-dom';
import {useAuthContext } from '../../context/AuthContext';


export const Login = () => {
    const {setLoading, email, setEmail, setError, 
        login, loginGoogle, password , setPassword} = useAuthContext () 

    //  async function handleSubmit() {
    //  try {
    //      setError('')
    //      setLoading(true)
    //      await login(email.value,password.value)
    //  } catch {
    //      setError ('fallo en iniciar sesion')
    //  }

    // }

    return (
        <div>
            

             <div className="container formContainer col-lg-3">
              <h1>Iniciar Sesión</h1>
                <form className="d-flex flex-column container pt-5 pb-5 formContainer"
                onSubmit={login}
                >
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
                    name="password" placeholder="contraseña" ></input>
                  </div>
                                 
                  <div>
                    <button className='buttonCount2' type='submit'> Iniciar Sesión</button> 
                  </div>
                  <div>
                      <button className='buttonCount' onClick={loginGoogle}>Iniciar sesión con Google</button>
                  </div>
                  
                  <div>
                    ¿No tienes cuenta? <Link to='/CrearCuenta'>¡Regístrate! </Link>
                  </div>
                  
                </form>

               
            </div>
            
        </div>
    )
}
