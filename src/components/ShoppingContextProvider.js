import { createContext, useReducer, useEffect, useState } from 'react'
import {
	shoppingInitialState,
	shoppingReducer,
} from '../reducer/shoppingReducer'
import { TYPES } from '../actions/shoppingActions'
import axios from 'axios'
import useLocalStorage from '../hooks/useLocalStorage'

export const ShoppingContext = createContext()

const ShoppingContextProvider = (props) => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
	const [loading, setLoading] = useState(false)
	const [cart, setCart] = useLocalStorage('cart', [])
	const delay = 100

	const getData = async () => {
		return {
			resProducts: await axios.get(
				'https://json-server-snowy-seven.vercel.app/products'
			),
			resCart: cart,
		}
	}

	const updateCart = async () => {
		const { resProducts, resCart } = await getData()

		dispatch({
			type: TYPES.READ_STATE,
			payload: [resProducts.data, resCart],
		})
		//console.log(resCart)
	}

	useEffect(() => {
		setLoading(true)
		updateCart()
		setLoading(false)
		// eslint-disable-next-line
	}, [])

	const addToCart = async (id) => {
		setLoading(true)

		const { resProducts, resCart } = await getData()
		//console.log(resCart)

		let newItem = resProducts.data.find((product) => product.id === id)
		let itemInCart = resCart.find((item) => item.id === id)

		if (!itemInCart) {
			resCart.push({ ...newItem, quantity: 1 })
		} else {
			resCart.forEach((item) =>
				item.id === newItem.id ? (item.quantity += 1) : item
			)
		}

		setTimeout(async () => {
			setCart(resCart)
			await updateCart()
			setLoading(false)
		}, delay)
	}

	const deleteFromCart = async (id, all = false) => {
		setLoading(true)

		const { resCart } = await getData()

		let cartItem = resCart.find((item) => item.id === id)
		//console.log(cartItem)
		if (cartItem) {
			//console.log({ all, quantity: cartItem.quantity })
			if (!all && cartItem.quantity > 1) {
				resCart.map((item) =>
					Number(item.id) === Number(cartItem.id)
						? (item.quantity -= 1)
						: item
				)

				setCart(resCart)
			} else {
				const newCart = resCart.filter((item) => item.id != cartItem.id)
				if (newCart.length > 0) {
					//console.log(newCart)
					setCart(newCart)
				} else {
					const cart = resCart.pop()
					setCart(cart)
					//localStorage.removeItem('cart')
				}
			}
		}

		setTimeout(async () => {
			await updateCart()
			setLoading(false)
		}, delay)
	}

	const clearCart = async () => {
		setLoading(true)

		const { resCart } = await getData()

		await resCart.forEach((item) => {
			deleteFromCart(item.id, true)
		})

		setTimeout(async () => {
			await updateCart()
			setLoading(false)
		}, delay)
	}

	return (
		<ShoppingContext.Provider
			value={{ state, addToCart, deleteFromCart, clearCart, loading }}>
			{props.children}
		</ShoppingContext.Provider>
	)
}

export default ShoppingContextProvider
