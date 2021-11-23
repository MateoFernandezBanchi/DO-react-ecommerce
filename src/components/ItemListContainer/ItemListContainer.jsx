import {useState, useEffect} from 'react'
import './Item.css';
import { ItemList } from './ItemList';
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../services/getFirestore';


function ItemListContainer({saludo}) {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryID} = useParams();
    
    useEffect (() => {
            const dbQuery = getFirestore()

            if (categoryID) {
            // dbQuery.collection('items').doc('E9XEpPwUI5dJMgR2qQuZ').get()
            // .then (resp => setProd({ id:resp.id,...resp.data() }))
            
            dbQuery.collection('items').where('categoria','==',categoryID).get()
            .then (data => setProductos(data.docs.map(pro =>({id:pro.id,...pro.data()}))))
            .catch(err=> console.log(err))
             .finally(()=> setLoading(false))
    } else {
        dbQuery.collection('items').get()
        .then (data => setProductos(data.docs.map(pro =>({id:pro.id,...pro.data()}))))
        .catch(err=> console.log(err))
         .finally(()=> setLoading(false))

    }


},[categoryID])
 
//     {
//         if (categoryID) {
//             getFetch
//             .then (res => {
//                 setProductos(res.filter(prod => prod.categoria === categoryID))
//          })
//             .catch(err=> console.log(err))
//             .finally(()=> setLoading(false))
//         }
//        else {
//      getFetch
//      .then (res => {
//          setProductos(res)
//         })
//      .catch(err=> console.log(err))
//      .finally(()=> setLoading(false))}
//  },[categoryID])

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
