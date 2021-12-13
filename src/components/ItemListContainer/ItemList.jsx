import React, {memo} from 'react'
import { Item } from './Item'
import {useParams} from 'react-router-dom'


export const ItemList = memo(({productos}) => {
  const {searchkey} = useParams();

    return (
        <>
  {productos.filter((prod)=> {

           if  (searchkey === undefined) {return prod} else if (prod.nombre.toLowerCase().includes(searchkey.toLowerCase())) 
           {return prod}; 
         }).map (prod => <Item prod={prod} key={prod.id}/>)}

        </> 
    )
})

