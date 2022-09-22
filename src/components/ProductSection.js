import Product from './Product'
import { useContext } from 'react'
import { ShoppingContext } from './ShoppingContextProvider'




const ProductSection = () => {

  const data = useContext(ShoppingContext)

  const [ state , addToCart, deleteFromCart, clearCart ] = data;

  return (
    <section className='section-products'>
        <h2>Tortas y alfajores</h2>
        {state.products.map ((product) => <Product key={product.id} info={product} addToCart={addToCart}/>)}

    </section>
  )
}

export default ProductSection