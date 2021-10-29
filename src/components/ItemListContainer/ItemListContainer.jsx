import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({saludo}) {
    return (
        <div>
           <p className="bienvenida">{saludo}</p> 
           <ItemCount stock={5} initial={0} />
        </div>
    )
}

export default ItemListContainer
