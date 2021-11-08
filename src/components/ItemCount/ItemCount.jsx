import {useState}  from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    
    const [count, setCount] = useState(0)
    
    
    const sumarContador=()=>  {
        if (count < stock) {setCount(count+1)} else {alert('no hay stock suficiente')}; console.log(count)
    }
    const restarContador=()=>  {
        if (count > initial) {setCount(count-1)}; console.log(count)
    }

    const onAdd=()=>  {
        if (count >= 1) alert(`agregaste ${count} productos`)
    }



    return (
       
        <div>
            <button className='buttonCount'  onClick={()=>restarContador()} > - </button>
            <span className='count'>{count}</span>
            <button className='buttonCount' onClick={()=>sumarContador()} > + </button>
            <button className='buttonCount' onClick={()=>onAdd()}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount
