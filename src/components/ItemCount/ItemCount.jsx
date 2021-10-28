import {useState}  from 'react'
import './ItemCount.css'

const ItemCount = () => {
    
    const [count, setCount] = useState(0)
    let stock = 5
    
    return (
       
        <div>
            <button className='buttonCount'  onClick={()=>{if (count > 0) {setCount(count-1)} else {}; console.log(count)}} > - </button>
            <span className='white'>{count}</span>
            <button className='buttonCount' onClick={()=>{if (count <= stock) {setCount(count+1)} else {}; console.log(count)}} > + </button>
            <button className='buttonCount' > Agregar al carrito </button>
        </div>
    )
}

export default ItemCount
