import React, { useState } from 'react'
import ModalProduct from '../modal/ModalProduct'

const Product = ({ info, addToCart, index }) => {
	const [open, setOpen] = useState(false)

	let { id, name, price, imageSrc } = info

	const showImg = (index) => {
		const $products = document.getElementsByClassName('product')

		$products[index].classList.remove('opacity-0')
		$products[index].classList.remove('scale-75')
		$products[index].classList.add('scale-100')
	}

	return (
		<div className='product w-[300px] shadow-lg p-2 mt-3 opacity-0 scale-75'>
			<div onClick={() => setOpen(true)}>
				<h3>{name}</h3>
				<div className='flex h-[100px] justify-center relative items-center'>
					<img
						onLoad={() => {
							showImg(index)
						}}
						className='product-img h-full'
						src={imageSrc}
						alt={`img_${name}`}
					/>
				</div>
				<p>${price}</p>
			</div>
			<button
				className='p-2 hover:bg-red-400 hover:text-white'
				onClick={() => addToCart(id)}
			>
				Agregar al cart
			</button>
			<ModalProduct
				open={open}
				setOpen={setOpen}
				info={info}
				addToCart={addToCart}
			/>
		</div>
	)
}

export default Product
