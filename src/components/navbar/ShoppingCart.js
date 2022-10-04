import { useContext} from "react";
import Loader from "../Loader";
import { ShoppingContext } from '../ShoppingContextProvider'
import CartItem from './CartItem';


const ShoppingCart = () => {

  const { state , deleteFromCart, clearCart, loading } = useContext(ShoppingContext)

  
  return (
    <>
        <div className='dropdown-menu flex flex-col w-[285px] items-center absolute translate-y-[26px] pointer-events-none opacity-0 bg-white text-black p-1 rounded-[5px] shadow'>
            <div className="dropdown-items overflow-y-scroll">
              {state.cart.map((item, index) => <CartItem key={index} info={item} deleteFromCart={deleteFromCart}/>)}
            </div>
            <div className="w-11/12 pt-2 my-2 border-t border-black">
              <button onClick={clearCart} className="w-full p-[5px] bg-red-400 text-white rounded-[3px] hover:bg-red-500">{loading ? <Loader /> : <span>Clear cart</span>}</button>
            </div>
        </div>
    </>
  )
}

export default ShoppingCart