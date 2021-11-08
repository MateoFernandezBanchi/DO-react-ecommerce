import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ({prod, key}) => {
    
        //    if (prod.id > 2) {
            return (
                <>
           <div className='card w-25 mt-5 card-margin' key={prod.id}>
                    <div className='card-header'>
                        {`${prod.nombre} - ${prod.categoria}`}
                    </div>
                    <div className='card-body'>
                        <img className='cardFoto' src={prod.foto} alt="" ></img>
                        <p>$ {prod.precio} </p>
                        <p>Stock {prod.stock}</p>
                        <p>{key}</p>
                    </div>
                    
                    <div className='card-footer'>
                       <button className='btn btn-outline-primary btn-block'>Detalle del producto</button>
                       
                    </div>
                    <ItemCount stock={prod.stock} initial='0'/>
                    
                 </div>
     </> 
    )
}
// }
