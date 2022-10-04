import { createContext, useReducer, useEffect, useState } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import { TYPES } from '../actions/shoppingActions';
import axios from 'axios'


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [loading, setLoading] = useState(false)
  const delay = 100

  const updateState = async () => {
      const productsURL = "http://localhost:3001/products";
      const cartURL = "http://localhost:3001/cart";
      const resProducts = await axios.get(productsURL);
      const resCart = await axios.get(cartURL);
      const newProduct = await resProducts.data
      const newCartItem = await resCart.data
      
      dispatch({type: TYPES.READ_STATE, payload: [newProduct, newCartItem]})
  }
  
  useEffect(() => {
    setLoading(true)
    updateState()
    setLoading(false)
  }, [])
    
  const addToCart = async (id) => {

    setLoading(true)

    let newItem = state.products.find(product => product.id === id)
    let itemInCart = state.cart.find(item => item.id === newItem.id)



    let endpoint
    let options = {
        headers: { "content-type": "application/json" },
    }

    if (!itemInCart) {
        options.method = "POST"
        endpoint = `http://localhost:3001/cart`
        newItem.quantity = 1;
        options.data = JSON.stringify(newItem)
    } else {
        options.method = "PUT"
        endpoint = `http://localhost:3001/cart/${itemInCart.id}`
        itemInCart.quantity = itemInCart.quantity + 1;
        options.data = JSON.stringify(itemInCart)
    }

    await axios(endpoint, options)

    // dispatch({type: TYPES.ADD_TO_CART, payload: id})

    setTimeout(() => {
      updateState()
      setLoading(false)
    }, delay)
  };

  const deleteFromCart = async (id, all = false) => {

    setLoading(true)
    
    let cartItem = state.cart.find(item => item.id === id)
    let endpoint = `http://localhost:3001/cart/${cartItem.id}`

    if(!all) {
      let options = {
        headers: { "content-type": "application/json" },
      }

      if (cartItem.quantity > 1) {
        options.method = "PUT"
        cartItem.quantity = cartItem.quantity - 1;
        options.data = JSON.stringify(cartItem)
      } else {
        options.method = "DELETE"
      }

      await axios(endpoint, options)

      // dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})

    } else {

      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }

      await axios(endpoint, options)

      // dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})

    }

    setTimeout(() => {
      updateState()
      setLoading(false)
    }, delay)
  };

  const clearCart = async () => {

    setLoading(true)

    await state.cart.forEach(item => {
     let endpoint = `http://localhost:3001/cart/${item.id}`
      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }
      axios(endpoint, options)
    });
    
      // dispatch({type: TYPES.CLEAR_CART})
    setTimeout(() => {
      updateState()
      setLoading(false)
    }, delay)
  };

  return (
    <ShoppingContext.Provider value={{state,addToCart,deleteFromCart,clearCart,loading}}>
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider