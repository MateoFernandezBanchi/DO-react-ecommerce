import {useState, useEffect} from 'react';
import { getFetch } from '../../services/getFetch';
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState ({})
    const [loading, setLoading] = useState (true)
    const {detailID} = useParams();
    useEffect (() => {
        getFetch
        .then (res => {
            setProductos(res.find(prod => prod.id == detailID))
            
        })
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    },[detailID])

    // const productoSeleccionado = productos.find (prod => (prod.id === 3))


    return (
        <div>
            { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span> 
</div>   :  <ItemDetail prod={productos}/>
                
        
    }

        
        </div>
    )
}
