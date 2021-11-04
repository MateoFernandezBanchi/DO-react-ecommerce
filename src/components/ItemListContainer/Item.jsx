import React from 'react'

export const Item = ({prod}) => {
    return (
        <div className='card w-25 mt-5 card-margin' key={prod.id}>
                    <div className='card-header'>
                        {`${prod.nombre} - ${prod.categoria}`}
                    </div>
                    <div className='card-body'>
                        <img className='cardFoto' src={prod.foto} alt="" ></img>
                        <p>$ {prod.precio} </p>
                    </div>
                    <div className='card-footer'>
                       <button className='btn btn-outline-primary btn-block'>Detalle del producto</button>
                       
                    </div>
                 </div>
    )
}
