import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        {id:1, name: "PRODUCTO A", price: 10},
        {id:2, name: "PRODUCTO B", price: 50},
        {id:3, name: "PRODUCTO C", price: 100},
        {id:4, name: "PRODUCTO D", price: 150},
        {id:5, name: "PRODUCTO E", price: 200},
    ],
    cart: [
        {id:1, name: "PRODUCTO A", price: 10},
        {id:2, name: "PRODUCTO B", price: 50},
        {id:3, name: "PRODUCTO C", price: 100},
        {id:4, name: "PRODUCTO D", price: 150},
        {id:5, name: "PRODUCTO E", price: 200},
    ],
};

export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {}
        case TYPES.REMOVE_ONE_PRODUCT: {}
        case TYPES.REMOVE_ALL_PRODUCTS: {}
        case TYPES.CLEAR_CART: {}
        default:
            return state
    }
}