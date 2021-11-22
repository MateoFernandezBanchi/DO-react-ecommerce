import {useState, useEffect} from 'react'
import { getFetch } from '../../services/getFetch';
import './Item.css';
import { ItemList } from './ItemList';
import {useParams} from 'react-router-dom'



function ItemListContainer({saludo}) {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryID} = useParams();
    
    useEffect (() => {
        if (categoryID) {
            getFetch
            .then (res => {
                setProductos(res.filter(prod => prod.categoria === categoryID))
         })
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }
       else {
     getFetch
     .then (res => {
         setProductos(res)
        })
     .catch(err=> console.log(err))
     .finally(()=> setLoading(false))}
 },[categoryID])

    return (
        <>
        <div>
           <p className="bienvenida">{saludo}</p> 
            </div> 
<div 
 className='d-flex flex-wrap justify-content-around'
>

        { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span> 
</div>   : <ItemList productos={productos}/>

        }
        </div>
        </>
    )
}
export default ItemListContainer
