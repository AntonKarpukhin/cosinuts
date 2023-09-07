import {configureStore} from "@reduxjs/toolkit";
import product from '../reducers/Product.Slice';
import filters from '../reducers/Filters.Slice';
import cart from '../reducers/ShoppingCart';

const store = configureStore({
	reducer: {product, filters, cart},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})

export default store;


export type AppDispatch = typeof store.dispatch;