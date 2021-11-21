import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext'




function App() {
  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
     
       <NavBar />
       <Switch>
 
        <Route exact path='/'> 
        <ItemListContainer saludo= {"¿Qué esperas para mejorar tu hogar?"}/></Route> 
        <Route exact path='/categoria/:categoryID'> 
        <ItemListContainer saludo= {"¿Qué esperas para mejorar tu hogar?"}/></Route> 
        
       <Route exact path='/detail/:detailID' component ={ ItemDetailContainer}></Route>
       <Route exact path='/Cart' component ={Cart}></Route>
      </Switch>
     
       <Footer />
      
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
