import React, {memo} from 'react'
import { Item } from './Item'
import { useSearchContext } from '../../context/SearchContext'

export const ItemList = memo(({productos}) => {
    const { search} = useSearchContext ()

    return (
        <>
         {productos.filter((prod)=> {
           if  (search === '') {return prod} else if (prod.nombre.toLowerCase().includes(search.toLowerCase())) 
           {return prod}; 
         }).map (prod => <Item prod={prod} key={prod.id}/>)}
        </> 
    )
})

