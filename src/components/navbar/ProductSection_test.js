import { useContext} from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Product from './Product_test'




const ProductSection = () => {

  const {state , addToCart} = useContext(ShoppingContext)
  return (
    <section className='section-products'>
        <h2>Tortas y alfajores</h2>
        {state.products.map ((product) => <Product key={product.id} info={product} addToCart={addToCart}/>)}

    </section>
  )
}

export default ProductSection