import {createContext, useState, useContext, useEffect} from 'react'
import { auth, google } from '../services/getFirestore'


const AuthContext = createContext([])

export const useAuthContext = () => {
    return useContext(AuthContext) 
}

export const AuthContextProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState('')
    const [user, setUser] = useState (null)
    const [photo, setPhoto] = useState (null)
    const [displayName, setDisplayName] = useState (null)


const registrarUsuario = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then ((res)=> alert ('usuario registrado'))
}

const login = (e) => {
  e.preventDefault()
  auth.signInWithEmailAndPassword(email, password)
  .then ((res)=> alert ('Bienvenido!'))
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

const cerrarSesion= () => {
auth.signOut()
}



useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)      
      setLoading(false)     
    })
    return unsubscribe
},[])

return (
    <div>
      <AuthContext.Provider
        value={{
          setUser, 
          user, 
          setPassword,
          setEmail,
          passwordConfirmation,
          password,
          setPasswordConfirmation,
          photo,
          displayName,
          registrarUsuario,
          login,
          loginGoogle,
          cerrarSesion, 
          setError
        }}
      >
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}