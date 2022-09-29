import { createContext, useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import { TYPES } from '../actions/shoppingActions';


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id});

    const deleteFromCart = (id, all = false) => {
      if(all) {
        dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
      } else {
        dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
      }
    };

    const clearCart = () => {dispatch({type: TYPES.CLEAR_CART})};

  return (
    <ShoppingContext.Provider value={{state,addToCart,deleteFromCart,clearCart}}>
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider