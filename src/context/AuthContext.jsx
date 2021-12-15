import {createContext, useState, useContext, useEffect} from 'react'
import {auth, google } from '../services/getFirestore'


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
    const [wishList, setWishList ] = useState([]); 
    const [success, setSuccess] = useState(false)
    const [mensajeSuccess, setMensajeSuccess] = useState ()
    
//-------------- Funciones WishList-------------------
const agregarWish = (item) => {
  const index = wishList.findIndex((i) => i.id === item.id);
  if (index > -1) {setWishList([...wishList]);
console.log (wishList)
} else {
  setWishList([...wishList, item]);
} }

const borrarItemWish = (id) => {
  setWishList(wishList.filter((i) => i.id !== id));
};
//--------------- Funciones Crear cuenta e Iniciar Sesion----------------
   function registrarUsuario (e)  {
      
        e.preventDefault()
        if (password !== passwordConfirmation) {
          setError(true)
          setMensajeError('Debe ingresar la misma contraeña')  }
          else if (password.length < 6) {
            setError(true)
            setMensajeError('La contraseña debe tener mínimo 6 caracteres')
          } else if (email.includes('.' && '@')) {
        auth.createUserWithEmailAndPassword(email, password)
        .then ((res)=> 
        setMensajeSuccess('Cuenta creada con éxito'),setError(false), setSuccess(true))}
      else {
        setError(true)
            setMensajeError('El email ingresado no es valido')
      }}

    const login = (e) => {
      e.preventDefault()
      auth.signInWithEmailAndPassword(email, password)
      .then ((res)=> console.log(res)   
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
        })
       return unsubscribe

     },[wishList])

    const cerrarSesion= () => {
      auth.signOut()
      setPhoto(null)
      setUser(null)
      setWishList([])
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
              mensajeError,
              agregarWish,
              wishList,
              borrarItemWish,
              success, 
              mensajeSuccess
            }}
          >
            {!loading && children}
          </AuthContext.Provider>
        </div>
      );
}  