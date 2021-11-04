import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { getFetch } from '../../services/getFetch';
import './Item.css';
import { ItemList } from './ItemList';



function ItemListContainer({saludo}) {

    const [productos, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
        getFetch
        .then (res => {
            setProducts(res)
        })
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    })

    return (
        <>
<div className='d-flex flex-wrap justify-content-around'>

        { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span> 
</div>   : <ItemList productos={productos}/>
            



        }
        </div>
        {/* <div>
           <p className="bienvenida">{saludo}</p> 
           <ItemCount stock={5} initial={0} />
        </div> */}

        
        </>
    )
}

export default ItemListContainer
