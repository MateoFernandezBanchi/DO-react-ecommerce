import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({saludo}) {
    return (
        <div>
           <p className="bienvenida">{saludo}</p> 
           <ItemCount />
        </div>
    )
}

export default ItemListContainer
