import React, {memo} from 'react'
import { Item } from './Item'

export const ItemList = memo(({productos}) => {
    return (
        <>
         {productos.map (prod => <Item prod={prod} key={prod.id}/>)}
        </> 
    )
})

