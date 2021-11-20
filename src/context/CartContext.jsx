import {createContext, useState, useContext} from 'react'


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext) 
}


export const CartContextProvider = ({children}) => {

    const [CartList, setCartList] = useState([])

    // const agregarCarrito = (item) => {
    //     setCartList( [...CartList, item])
    // }
const agregarCarrito = (item) => {
    
    const index = CartList.findIndex(i => i.id === item.id)

    if (index > -1 ) {
        const OldQuantity = CartList [index].cantidad

        CartList.splice(index, 1)
        setCartList([...CartList, {...item, cantidad:item.cantidad + OldQuantity}])

    }
    else {
        setCartList( [...CartList, item])
    }
 
}
    
    
        const borrarCarrito = () => {
        setCartList ([])
    }

    const cantidadItem = () => {
        return CartList.reduce((acum, item) => acum = acum + item.cantidad, 0)

    }

    const borrarItem = (id) => {
        setCartList(CartList.filter((i)=> i.id != id))
    }

    return (
        <div>
            <CartContext.Provider value={{
                CartList, 
                agregarCarrito,
                borrarCarrito,
                cantidadItem, 
                borrarItem
            }}>
            {children}
            </CartContext.Provider>
        </div>
    )
}


