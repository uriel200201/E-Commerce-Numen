import { createContext, useReducer, useEffect } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import { TYPES } from '../actions/shoppingActions';
import axios from 'axios'


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const updateState = async () => {
      const productsURL = "http://localhost:3001/products";
      const cartURL = "http://localhost:3001/cart";
      const resProducts = await axios.get(productsURL);
      console.log(resProducts)
      const resCart = await axios.get(cartURL);
      const newProduct = await resProducts.data
      const newCartItem = await resCart.data
      
      dispatch({type: TYPES.READ_STATE, payload: [newProduct, newCartItem]})
  }
  
  useEffect(() => {
    updateState()
  }, [])
    
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