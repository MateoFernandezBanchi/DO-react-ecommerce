import React from 'react'
import {Link} from 'react-router-dom'
import FormatPrice from "../../hooks/FormatPrice";

export const Item = ({prod}) => {
    return (
       
        <div className='card mt-4 card-margin'>
             <Link to= {`/detail/${prod.id}`}>
                    <div className='card-header'>
                        <h3 className='titleCardHeader'>{prod.nombre} </h3>
                    </div>
                    <div className='card-body'>
                        <img className='cardFoto' srcSet={prod.imagen} alt="" ></img>
                        <p className='categoria'>{prod.categoria}</p>  
                    </div>
                    <div className='card-footer'>
                        <p className='precio'> {FormatPrice(prod.precio)} </p>  
                    </div> 
             </Link>
        </div>
               
    )
}
