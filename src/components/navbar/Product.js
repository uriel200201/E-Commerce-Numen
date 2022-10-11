import { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContextProvider'
import Loader from '../Loader';

const Product = ({ index, product, addToCart }) => {

  const { id, name, img, price } = product;
  const { loading } = useContext(ShoppingContext)

  const $products = document.getElementsByClassName('product')
  
  const showImg = (index) => {

    $products[index].classList.remove('pointer-events-none')
    $products[index].classList.remove('opacity-0')
    $products[index].classList.remove('scale-75')

  }
  
  return (
      <li className="product bg-white w-[200px] space-y-3 shadow-lg p-2 rounded-[5px] opacity-0 pointer-events-none scale-75 transition-all duration-300">
        <h3 className='p-2 mt-1 whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h3>
        <div className='flex h-[160px] px-3 justify-center items-center'>
          <img onLoad={() => {showImg(index)}} className='product-img h-full object-cover rounded-[3px]' src={img} alt={`img_${name}`} />
        </div>
        <p>US$ {price}</p>
        <button disabled={loading ? true : false} className='w-full h-[40px] rounded-[3px] text-red-500 hover:bg-red-400 hover:text-white disabled:pointer-events-none' onClick={() => addToCart(id)}>{loading ? <Loader /> : <span>Agregar</span>}</button>
      </li>
    )
}

export default Product