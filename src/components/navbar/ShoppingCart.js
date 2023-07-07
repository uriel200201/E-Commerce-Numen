import { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Loader from '../Loader'
import CartItem from './CartItem'
import NoItemsText from './NoItemsText'

const ShoppingCart = () => {
	const { state, deleteFromCart, clearCart, loading } =
		useContext(ShoppingContext)

	console.log(state.cart)

	return (
		<>
			<div className='dropdown-menu flex flex-col w-[315px] items-center absolute z-50 translate-y-[40px] pointer-events-none opacity-0 bg-white text-black p-1 rounded-[5px] shadow-md border-2 border-red-400'>
				<div
					className={`dropdown-items max-h-[504px] rounded-[3px] space-y-2 p-2 ${
						state.cart.length !== 0
							? 'overflow-y-scroll bg-[#ddd]'
							: null
					}`}>
					{state.cart.length !== 0 ? (
						state.cart.map((product, index) => (
							<CartItem
								key={index}
								product={product}
								deleteFromCart={deleteFromCart}
							/>
						))
					) : (
						<NoItemsText />
					)}
				</div>
				<div className='w-11/12 pt-2 my-2 border-t-2 border-[#ff9f9f]'>
					<button
						disabled={
							loading || state.cart.length === 0 ? true : false
						}
						onClick={clearCart}
						className='w-full h-[40px] p-[5px] border-2 border-red-400 text-red-400 rounded-[3px] hover:text-white hover:bg-red-400 disabled:pointer-events-none'>
						{loading ? <Loader /> : <span>Limpiar carrito</span>}
					</button>
				</div>
			</div>
		</>
	)
}

export default ShoppingCart
