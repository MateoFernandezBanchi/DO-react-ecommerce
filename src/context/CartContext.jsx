import {createContext} from 'react'


export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {
    return (
        <div>
            <CartContext.Provider>
            {children}
            </CartContext.Provider>
        </div>
    )
}


