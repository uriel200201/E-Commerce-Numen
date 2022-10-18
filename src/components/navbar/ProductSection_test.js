import { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Product from './Product_test'

const ProductSection = () => {
	const { state, addToCart } = useContext(ShoppingContext)
	return (
		<section className='section-products text-center min-h-screen'>
			<h2>Tortas y alfajores</h2>
			<div className='flex flex-wrap justify-evenly'>
				{state.products.map((product, index) => (
					<Product
						key={product.id}
						index={index}
						info={product}
						addToCart={addToCart}
					/>
				))}
			</div>
		</section>
	)
}

export default ProductSection
