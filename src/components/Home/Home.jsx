import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {

    
    
    return ( 
        <div className='container'>
    <div className='position-relative d-flex'>
            <img className='imgHomeHero' src="https://micasa10.com/wp-content/uploads/comprar-muebles-online-para-salon.jpg" alt="" srcset="" />
            <div className='position-absolute justify-content-center pt-100'>
                <div><h2>Mejora tu hogar en un solo click</h2></div>
                <div  className='buttonHome'>
                <Link to='./productos' className='buttonCount2'>Ver Productos</Link></div>
            </div>

    </div>
    
    <div>
        <h3>Categorías</h3>

        <div className='d-flex'>
        <div className='categoryCard'><Link to='/productos/categoria/Cama'><h4>Camas</h4></Link></div>
        <div className='categoryCard'><Link to='/productos/categoria/Escritorios'><h4>Escritorios</h4></Link></div>
        <div className='categoryCard'><Link to='/productos/categoria/Placards'><h4>Placards</h4></Link></div>
          
            
        </div>

    </div>
    </div>
     );
}
 
export default Home;