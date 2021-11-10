import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
       <NavBar />
       <Routes>
 
        <Route exact path='/' element ={ 
        <ItemListContainer saludo="¿Qué esperas para mejorar tu hogar?"/>}></Route> 
        <Route exact path='/categoria/:categoryID' element ={ 
        <ItemListContainer saludo="¿Qué esperas para mejorar tu hogar?"/>}></Route> 
        
       <Route exact path='/detail/:detailID' element ={ <ItemDetailContainer/>}></Route>
       <Route exact path='/Cart' element ={ <Cart/>}></Route>
</Routes>
     
      <Footer />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
