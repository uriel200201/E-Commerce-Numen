import { useContext } from "react"
import { ShoppingContext } from "../ShoppingContextProvider"

const ItemCount = () => {

    const { state } = useContext(ShoppingContext)

    let count = 0;

  return (
    <div className='item-counter absolute text-black'>{
        state.cart.forEach(item => {
            count += item.quantity
        })
    }
    {count !== 0 ? count : null}</div>
  )
}

export default ItemCount