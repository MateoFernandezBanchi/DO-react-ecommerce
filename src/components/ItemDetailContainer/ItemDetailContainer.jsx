import {useState, useEffect} from 'react';
import { getFetch } from '../../services/getFetch';
import {ItemDetail} from './ItemDetail'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
        getFetch
        .then (res => {
            setProductos(res.find(prod => prod.id == 4))
            
        })
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    })

    // const productoSeleccionado = productos.find (prod => (prod.id === 3))


    return (
        <div>
            { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span> 
</div>   :  <ItemDetail prod={productos} key={prod.id}/>
                
                
                // (prod => <ItemDetail prod={prod} key={prod.id}/>
                //     )
    }

        
        </div>
    )
}
