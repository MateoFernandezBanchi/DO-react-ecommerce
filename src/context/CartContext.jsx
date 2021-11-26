import {createContext, useState, useContext} from 'react'


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext) 
}


export const CartContextProvider = ({children}) => {
  const [CartList, setCartList] = useState([]);
  const [disponibleProd, setDisponibleProd] = useState()
 

  const agregarCarrito = (item) => {
    const index = CartList.findIndex((i) => i.id === item.id);

    const subTotal = item.precio * item.cantidad
    
   
    // if ((index > -1) && (CartList[index].cantidad === item.stock) ) {

    //   setDisponibleProd('No hay stock disponible')
      
    // } 
    //  else
      if (index > -1) {
      
      const OldQuantity = CartList[index].cantidad;
      const OldSubTotal = CartList[index].subtotal;
      const stock = CartList[index].stock - CartList[index].cantidad
      CartList.splice(index, 1);
      setCartList([
        ...CartList,
        { ...item, cantidad: item.cantidad + OldQuantity, subtotal: OldSubTotal + subTotal, stock: stock  },
      ]);
    }
    
    else {
      
      setCartList([...CartList, { ...item, subtotal: subTotal}]);
    }
  };
  
      const cartTotal = CartList.reduce ((total,item)=> total + item.subtotal, 0)
      console.log (cartTotal)
  
  const borrarCarrito = () => {
    setCartList([]);
  };

  const cantidadItem = () => {
    return CartList.reduce((acum, item) => (acum = acum + item.cantidad), 0);
  };

  const borrarItem = (id) => {
    setCartList(CartList.filter((i) => i.id !== id));
  };

  

  return (
    <div>
      <CartContext.Provider
        value={{
          CartList,
          setCartList,
          agregarCarrito,
          borrarCarrito,
          cantidadItem,
          borrarItem,
          cartTotal,
          disponibleProd
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}


