import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({prod, key}) => {
    return (
       
        <div className='card w-25 mt-5 card-margin' key={key}>
             <Link to= {`/detail/${prod.id}`}>
                    <div className='card-header'>
                        <h3 className='titleCardHeader'>{prod.nombre} </h3>
                    </div>
                    <div className='card-body'>
                        <img className='cardFoto' src={prod.foto1} alt="" ></img>
                       
                    </div>
                    
                     <div className='card-footer'>
                     <p className='categoria'>{prod.categoria}</p>   
                     <p className='precio'> $ {prod.precio} </p> 
                       
                    </div> 
                    
                    </Link>
                 </div>
               
    )
}
