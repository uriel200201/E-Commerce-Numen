import { createContext, useReducer, useEffect } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import { TYPES } from '../actions/shoppingActions';


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id});

    const deleteFromCart = () => {console.log('')};

    const clearCart = () => {console.log('')};

  return (
    <ShoppingContext.Provider value={{state,addToCart,deleteFromCart,clearCart}}>
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider