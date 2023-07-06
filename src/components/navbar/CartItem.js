import { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Loader from '../Loader'

const CartItem = ({ product, deleteFromCart }) => {
	const { id, name, img, price, quantity } = product
	const { loading } = useContext(ShoppingContext)

	const calcPrice = () => {
		let result = (price * quantity).toString()

		if (result === result.split('.').join('')) {
			return result
		} else {
			result = result.split('.')
			result[1] = result[1].slice(0, 2)
			return result.join('.')
		}
	}

	return (
		<div className='dropdown-item w-[270px] bg-[#fff] rounded-[3px] p-2 text-center space-y-[10px]'>
			<div className='flex flex-col items-center space-y-[10px]'>
				<div className='w-1/2 flex items-center'>
					<img
						className='w-full rounded-[3px] h-[100px]'
						src={img}
						alt={`img_${name}`}
					/>
				</div>
				<h4 className='w-full px-2 whitespace-nowrap overflow-hidden text-ellipsis'>
					{name}
				</h4>
			</div>
			<div className='space-y-[10px]'>
				<span className='text-sm'>
					US$ {price} x {quantity} = $US {calcPrice()}
				</span>
				<div className='options flex justify-around'>
					<button
						disabled={loading ? true : false}
						onClick={() => deleteFromCart(id)}
						className='w-[125px] h-[40px] rounded-[3px] text-red-500 hover:bg-red-400 hover:text-white disabled:pointer-events-none'>
						{loading ? <Loader /> : <span>Eliminar uno</span>}
					</button>
					<button
						disabled={loading ? true : false}
						onClick={() => deleteFromCart(id, true)}
						className='w-[125px] h-[40px] rounded-[3px] text-red-500 hover:bg-red-400 hover:text-white disabled:pointer-events-none'>
						{loading ? <Loader /> : <span>Eliminar todos</span>}
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
