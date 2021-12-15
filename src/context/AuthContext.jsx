import {createContext, useState, useContext, useEffect} from 'react'

import { auth, google } from '../services/getFirestore'


const AuthContext = createContext([])

export const useAuthContext = () => {
    return useContext(AuthContext) 
}

export const AuthContextProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState ('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState('')
    const [user, setUser] = useState (null)
    const [photo, setPhoto] = useState (null)
    const [displayName, setDisplayName] = useState (null)
    const [mensajeError, setMensajeError] = useState ('')
 
   function registrarUsuario (e)  {
      
        e.preventDefault()
        if (password !== passwordConfirmation) {
          setError(true)
          setMensajeError('Debe ingresar la misma contraeña')  }
          else {
        auth.createUserWithEmailAndPassword(email, password)
        .then ((res)=> 
        console.log(res))}
    }

    const login = (e) => {
      e.preventDefault()
      auth.signInWithEmailAndPassword(email, password)
      .then ((res)=>  console.log(res)   
      )
    }

    const loginGoogle = () => {
    auth.signInWithPopup(google)
    .then (res => {
        console.log(res.user)
        setUser(res.user)
        setPhoto(res.user.photoURL)
        setDisplayName(res.user.displayName)
    }).catch(err=> {console.log(err)}) 
    }

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setUser(user)
          setLoading(false)  
          console.log(user.uid)   
        })
        return unsubscribe
    },[])

    const cerrarSesion= () => {
      auth.signOut()
      setPhoto(null)
      setUser(null)
      }
    
    return (
        <div>
          <AuthContext.Provider
            value={{
              setUser, 
              user, 
              setPassword,
              setEmail,
              setName,
              name,
              passwordConfirmation,
              password,
              setPasswordConfirmation,
              photo,
              displayName,
              registrarUsuario,
              login,
              loginGoogle,
              cerrarSesion, 
              setError, 
              error, 
              mensajeError
            }}
          >
            {!loading && children}
          </AuthContext.Provider>
        </div>
      );
}