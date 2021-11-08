import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
       <NavBar />
       <Routes>
 
        <Route exact path='/' element ={ 
        <ItemListContainer saludo="¿Que esperas para mejorar tu hogar?"/>}></Route> 
       <Route exact path='/detail' element ={ <ItemDetailContainer/>}></Route>
</Routes>
      {/* <Carousel /> */}
      <Footer />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
