import React from 'react'
import {useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const SignUp = () => {

    const {error, loginGoogle, setName, mensajeError,
      registrarUsuario, setEmail, setPassword, setPasswordConfirmation} = useAuthContext () 

      // const handleChange = (e) => { setUser ( {...user,[e.target.name]: e.target.value})}
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
                  : null}
                  <div>
                    <button className='buttonCount2' type='submit'> Crear cuenta</button> 
                  </div>
                  <div>
                  <button className='buttonGoogle' onClick={loginGoogle}>Iniciar sesión con Google
                     <img className='width-10 ml-2' src="https://lh3.googleusercontent.com/VJcbNKEi93AqtI3LZxGXYLZpYdIWVXYsj8e-QAZUcejGGlvtyraEp_8bjY9LLkNMDhuFuwOHpO03trxVHBHZ8I3b34N-NB4tbgjoc8ZjkP-1vXms568W9xRkcPKhFcfJglxtP9GbrlajPkKon1ctUz0LfgSx7QLvBZqJ3fz7--O21kvjkuW9JxpjbSGYG6ZnphNQe0ORLkq4InBzTsed01Vsgx2liTWv1X9xBY7BIdJoxkyYIwJPlOAw6wHR5VX4VMhp3ZQWpiTgTZvrmgvB_36u3gOnmc3pBlgtseiJjH1pHSPc49iDtoRU95vbzuuCfjUTsfMp9XVojhVpTEvWoYVdxV1RYvM6Vp7g0wwqXI36foAmvM0pRVGq9CvNixh0Vkdx9AgctsBI7c4p6GmQeKd_ILsPPAcQaMbz49yl8Fez32bl5TIhtF2An8qd4ZIIMlACMkmZNDrBfpc_tM_EYMBrQqgfeY5uEmqDhU_PQYn7RKNk8lRuLMx9lWA5-6RbQOvWmcyp2AvDVrD5y8cPDnMsykFkCxa9q4PgcU0oHzPE7MR0-YwqLmbFoOWZclbmH5iz4ecuWvZQVYg41AhVScDH51hI0dMweqlBucWNDMLiGN1hJdPFnRFbSuDwAnrZ3ELrh_6I6AGxrrgsPRCHc0k_mVCPCuVclUoE6TR4vxFzzqV7q_stg1-jd8qMk8mMjCJQeEEfoixRsPYM3-Qb_NQV=w500-h512-no?authuser=0" alt="google not found"  />
                      </button>
                  </div>
                  <div>
                    ¿Ya posees cuenta?<Link to='/IniciarSesion'>Inicia Sesión </Link> 
                  </div>      
                </form>
            </div>
            </>
        
    )
}


