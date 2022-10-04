import { useContext } from 'react'
import Loader from '../Loader';
import { ShoppingContext } from '../ShoppingContextProvider'

const CartItem = ({info, deleteFromCart}) => {

    const { id, name, price, quantity} = info;
    const { loading } = useContext(ShoppingContext)


  return (
    <div className="dropdown-item p-1 text-center rounded-[3px] space-y-[10px]">
        <div className="flex flex-col items-center space-y-[10px]">
            <div className="w-1/2 flex items-center bg-black">
                <img className="w-full h-[100px]" src="product_img" alt="" />
            </div>
            <h3 className="w-1/2">{name}</h3>
        </div>
        <div className="space-y-[10px]">
            <span>${price} x {quantity} = ${price * quantity}</span>
            <div className="options flex justify-around">
                <button onClick={() => deleteFromCart(id)} className="p-[5px] w-[125px] rounded-[3px] hover:bg-red-400 hover:text-white">{loading ? <Loader /> : <span>Eliminar uno</span>}</button>
                <button onClick={() => deleteFromCart(id, true)} className="p-[5px] w-[125px] rounded-[3px] hover:bg-red-400 hover:text-white">{loading ? <Loader /> : <span>Eliminar todos</span>}</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem