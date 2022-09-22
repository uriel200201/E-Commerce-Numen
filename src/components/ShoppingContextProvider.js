import { createContext, useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = () => {console.log('Agregado papu')};

    const deleteFromCart = () => {console.log('Chupame la verga')};

    const clearCart = () => {console.log('alla le limpian bien el ojete')};

    const data = [state,addToCart,deleteFromCart,clearCart]

  return (
    <ShoppingContext.Provider value={data}>
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider