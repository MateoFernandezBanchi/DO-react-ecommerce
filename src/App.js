import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext'
import {AuthContextProvider} from './context/AuthContext'
import Home from './components/Home/Home';
import { WishList } from './components/WishList/WishList';
import {SignUp} from './components/Authlogin/SignUp';
import {Login} from './components/Authlogin/Login'
// import { PrivateRoute } from './components/Authlogin/PrivateRoute';


function App() {
  return (
    <div className="App">
 <AuthContextProvider>
    <CartContextProvider>
    <BrowserRouter>
       <NavBar />
       <Routes>
       <Route index element={<Home/>}></Route>
        <Route path='/productos' element = {<ItemListContainer saludo= "¿Qué esperas para mejorar tu hogar?"/>}> 
       </Route> 
        <Route path='/productos/categoria/:categoryID' element = {<ItemListContainer saludo= "¿Qué esperas para mejorar tu hogar?"/>}> 
       </Route> 
        <Route path='/productos/search/:searchkey' element = {<ItemListContainer saludo= "¿Qué esperas para mejorar tu hogar?"/>}> 
        </Route> 
       <Route path='/detail/:detailID' element ={ <ItemDetailContainer/>}></Route>
       <Route path='/Cart' element ={<Cart/>}></Route>
       <Route path='/WishList' element ={<WishList/>}></Route>
       <Route path='/CrearCuenta' element ={<SignUp/>}></Route>
        <Route path='/iniciarSesion' element ={<Login/>}></Route> 
        </Routes>
      </BrowserRouter>
    
    </CartContextProvider>
    </AuthContextProvider>
       <Footer />
    </div>
  );
}

export default App;
