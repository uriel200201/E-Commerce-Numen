import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [],
    cart: [],
};

export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1]
            }
        }
        case TYPES.ADD_TO_CART: {
            return {
                ...state,
            }
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
            return {
                ...state,
                cart: shoppingInitialState.cart
            }
        }
        default:
            return state
    }
}