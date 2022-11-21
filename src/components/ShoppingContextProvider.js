import { createContext, useReducer, useEffect, useState } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import { TYPES } from '../actions/shoppingActions';
import axios from 'axios'


export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [loading, setLoading] = useState(false)
  const delay = 100

  const getData = async () => {
    return {
      resProducts: await axios.get("https://json-server-snowy-seven.vercel.app/products"),
      resCart: await axios.get("https://json-server-snowy-seven.vercel.app/cart")
    }
  }

  const updateCart = async () => {
      const {resProducts, resCart} = await getData()
      
      dispatch({type: TYPES.READ_STATE, payload: [resProducts.data, resCart.data]})
  }
  
  useEffect(() => {
    setLoading(true)
    updateCart()
    setLoading(false)
    // eslint-disable-next-line
  }, [])
    
  const addToCart = async (id) => {

    setLoading(true)

    const {resProducts, resCart} = await getData()

    let newItem = resProducts.data.find(product => product.id === id)
    let itemInCart = resCart.data.find(item => item.id === id)



    let endpoint
    let options = {
        headers: { "content-type": "application/json" },
    }

    if (!itemInCart) {
        options.method = "POST"
        endpoint = `https://json-server-snowy-seven.vercel.app/cart`
        newItem.quantity = 1;
        options.data = JSON.stringify(newItem)
    } else {
        options.method = "PUT"
        endpoint = `http://localhost:3001/cart/${itemInCart.id}`
        itemInCart.quantity = itemInCart.quantity + 1;
        options.data = JSON.stringify(itemInCart)
    }

    await axios(endpoint, options)

    setTimeout(async () => {
      await updateCart()
      setLoading(false)
    }, delay)
  };

  const deleteFromCart = async (id, all = false) => {

    setLoading(true)

    const {resCart} = await getData()
    
    let cartItem = resCart.data.find(item => item.id === id)
    
    if (cartItem) {

      let endpoint = `https://json-server-snowy-seven.vercel.app/cart/${cartItem.id}`

      if (!all) {
  
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
  
      } else {
  
        let options = {
          method: "DELETE",
          headers: { "content-type": "application/json" }
        }
  
        await axios(endpoint, options)
  
      }

    }


      setTimeout(async () => {
        await updateCart()
        setLoading(false)
      }, delay)
  };

  const clearCart = async () => {

    setLoading(true)

    const {resCart} = await getData()

    await resCart.data.forEach(item => {
     let endpoint = `https://json-server-snowy-seven.vercel.app/cart/${item.id}`
      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }
      axios(endpoint, options)
    });
    
    setTimeout(async () => {
      await updateCart()
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
