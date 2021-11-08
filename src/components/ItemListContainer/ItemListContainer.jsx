import {useState, useEffect} from 'react'
import { getFetch } from '../../services/getFetch';
import './Item.css';
import { ItemList } from './ItemList';



function ItemListContainer({saludo}) {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
        getFetch
        .then (res => {
            setProductos(res)
        })
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    })

    return (
        <>
        <div>
           <p className="bienvenida">{saludo}</p> 
            </div> 
<div className='d-flex flex-wrap justify-content-around'>

        { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span> 
</div>   : <ItemList productos={productos}/>

        }
        </div>
        </>
    )
}
export default ItemListContainer
