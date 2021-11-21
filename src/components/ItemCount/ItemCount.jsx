import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);
  const [stockMessage, setStockMessage ] = useState();

  const sumarContador = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setStockMessage ('No hay más stock disponible')
      eraseStockMessage()
      
    }
    console.log(count);
  };
  const restarContador = () => {
    if (count > initial) {
      setCount(count - 1);
    }
    console.log(count);
  };

  const eraseStockMessage=()=> {
  setTimeout(()=> {
    setStockMessage ()
}, 3000)}

  return (
    <>
    <div>
      <p className='btn-danger'> {stockMessage} </p>
    </div>    
    <div>
      <button className="buttonCount" onClick={() => restarContador()}>
        -
      </button>
      <span className="count">{count}</span>
      <button className="buttonCount" onClick={() => sumarContador()}>+</button>
      <button className='buttonCount' onClick={() => { onAdd(count) } }> Agregar al Carrito </button>
    </div>
    </>
  );
};

export default ItemCount;
