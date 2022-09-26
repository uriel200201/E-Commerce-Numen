import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        {id:1, name: "PRODUCTO A", price: 10},
        {id:2, name: "PRODUCTO B", price: 50},
        {id:3, name: "PRODUCTO C", price: 100},
        {id:4, name: "PRODUCTO D", price: 150},
        {id:5, name: "PRODUCTO E", price: 200},
    ],
    cart: [],
};

export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemInCart = state.cart.find((item) => item.id === newItem.id);
            let $dropdownItems = document.querySelector('.dropdown-items')
            if (state.cart.length > 0) {
                $dropdownItems.style.maxHeight = `${$dropdownItems.children[0].clientHeight * 2}px`
            }
            return itemInCart
            ? {
                ...state,
                cart: state.cart.map((item) => 
                item.id === newItem.id
                ? {...item, quantity: item.quantity + 1}
                : item
                ),
            }
            : {
                ...state,
                cart:[...state.cart,{...newItem, quantity: 1}]
            };
        } 
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
           return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
           }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
            return state
    }
}