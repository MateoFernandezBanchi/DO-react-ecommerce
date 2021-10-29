import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer saludo="¿Que esperas para mejorar tu hogar?" />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
