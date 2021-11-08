import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Carousel from '../Carousel/Carousel'


export const ItemDetail = ({prod}) => {
    
        //    if (prod.id > 2) {
            return (
                <>
           <div className='container'>
                    <div className='detail-header'>
                       <h2> {prod.nombre} </h2>
                       
                    </div>
                    <div className='card-body row'>
                        <div className='col'> 
                        {/* <img className='cardFoto' src={prod.foto} alt="" ></img> */}
                         <Carousel foto1={prod.foto1}
                                    foto2={prod.foto2}
                                    foto3={prod.foto3}/> 
                        
                        </div>
                        <div className='col'>
                        <h3> $ {prod.precio}</h3> 
                    <p>Categoria: {prod.categoria} </p>
                        <p>Stock {prod.stock}</p>
                        <p>{prod.descripcion}</p>
                        </div>
                        
                    </div>
                    
                    <div className='card-footer'>
                    <ItemCount stock={prod.stock} initial='0'/>
                       
                    </div>
                    
                    
                 </div>
     </> 
    )
}
// }
