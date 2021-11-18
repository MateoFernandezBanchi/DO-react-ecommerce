import {createContext, useState} from 'react'


export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {

    const [CartList, setCartList] = useState([])

    const agregarCarrito = (item) => {
        setCartList( [...CartList, item])
    }
    return (
        <div>
            <CartContext.Provider value={{
                CartList, 
                agregarCarrito
            }}>
            {children}
            </CartContext.Provider>
        </div>
    )
}


