import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductReducerProps } from "./Reducers.Props";
import { data, DataProps } from "../helpers/HTTPData";

const initialState: ProductReducerProps = {
	product: [],
	productLoadingStatus: 'idle',
	activeProduct: {
		id: 0,
		category: '',
		subcategory: '',
		name: '',
		title: '',
		price: 0,
		oldprice: 0
	},
	isFavorite: 0
}

export const fetchProduct = createAsyncThunk(
	'product/fetchProduct',
	async (arg: DataProps[]) => {
		return await arg
	}
)

const productSlice = createSlice( {
	name: 'product',
	initialState,
	reducers: {
		productActive: (state, action) => {
			state.activeProduct = action.payload
		},
		productFavorites: (state, action) => {
			state.product = state.product.map(item => {
				if (item.id === action.payload) {
					return {...item, isFavorite: !item.isFavorite}
				}
				return item
			})
			data.map(dat => {
				if (dat.id === action.payload) {
					return {...dat, isFavorite: !dat.isFavorite}
				}
				return dat
			})
			state.isFavorite = state.product.filter(item => item.isFavorite).length
		}
	},
	extraReducers: ( builder ) => {
		builder
			.addCase( fetchProduct.pending, state => {
				state.productLoadingStatus = 'loading'
			} )
			.addCase( fetchProduct.fulfilled, ( state, action ) => {
				state.product = action.payload
				state.productLoadingStatus = 'idle'
			} )
			.addCase( fetchProduct.rejected, state => {
				state.productLoadingStatus = 'error'
			} )
			.addDefaultCase( () => {
			} )
	}
} )

const { actions, reducer } = productSlice;

export default reducer;
export const {productActive, productFavorites} = actions;