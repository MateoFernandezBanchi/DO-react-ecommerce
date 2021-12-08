import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext'
import Home from './components/Home/Home';
import {SearchContextProvider} from './context/SearchContext'
import { WishList } from './components/WishList/WishList';


function App() {
  return (
    <div className="App">
    <SearchContextProvider>
    <CartContextProvider>
    <BrowserRouter>
     
       <NavBar />
       <Switch>
       <Route exact path='/'> <Home/></Route>
        <Route exact path='/productos'> 
        <ItemListContainer saludo= {"¿Qué esperas para mejorar tu hogar?"}/></Route> 
        <Route exact path='/productos/categoria/:categoryID'> 
        <ItemListContainer saludo= {"¿Qué esperas para mejorar tu hogar?"}/></Route> 
        
       <Route exact path='/detail/:detailID' component ={ ItemDetailContainer}></Route>
       <Route exact path='/Cart' component ={Cart}></Route>
       <Route exact path='/WishList' component ={WishList}></Route>
      </Switch>
   
       
    </BrowserRouter>
    </CartContextProvider>
    </SearchContextProvider>
       <Footer />
    </div>
  );
}

export default App;
