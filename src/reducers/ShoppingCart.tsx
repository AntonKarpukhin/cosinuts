import { createSlice } from "@reduxjs/toolkit";
import { CartReducerProps } from "./Reducers.Props";
import { newOrdered } from "../helpers/getLocalStorageProduct";

const initialState: CartReducerProps = {
	cartProducts: newOrdered,
}

const cartSlice = createSlice( {
	name: 'cart',
	initialState,
	reducers: {
		cartAddProducts: (state, action) => {
			state.cartProducts = [...state.cartProducts, action.payload]
			localStorage.setItem('addProduct', JSON.stringify(state.cartProducts))
		},
		cartDeleteProducts: (state, action) => {
			state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload)
			localStorage.setItem('addProduct', JSON.stringify(state.cartProducts))
		},
		cartClearProducts: (state, action) => {
			state.cartProducts = action.payload;
			localStorage.setItem('addProduct', JSON.stringify(state.cartProducts))
		}
	}
} )

const { actions, reducer } = cartSlice;

export default reducer;
export const {
	cartAddProducts,
	cartDeleteProducts,
	cartClearProducts
} = actions;