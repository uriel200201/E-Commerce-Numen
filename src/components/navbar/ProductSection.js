import { useContext} from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Product from './Product'




const ProductSection = () => {

  const {state , addToCart} = useContext(ShoppingContext)
  return (
    <section className='section-products text-center bg-red-300'>
        <h2 className='py-[40px] text-xl'>Nuestros productos</h2>
        <ul className='flex flex-wrap justify-evenly gap-y-5'>
          {state.products.map((product, index) => <Product key={product.id} index={index} product={product} addToCart={addToCart}/>)}
        </ul>
        <div className='h-[100px]'>{/* padding temporal */}</div>
    </section>
  )
}

export default ProductSection