import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FiltersReducerProps } from "./Reducers.Props";
import { HTTPAllFiltersProps } from "../helpers/HTTPMenu";

const initialState: FiltersReducerProps = {
	allFilters: [],
	mainFilters: [],
	footerFilters: [],
	filtersLoadingStatus: 'idle',
	activeFilters: 'Сухофрукты экзотические',
	productWeight: 1000
}

export const fetchFilters = createAsyncThunk(
	'product/fetchFilters',
	async (arg: HTTPAllFiltersProps) => {
		return await arg
	}
)

const filtersSlice = createSlice( {
	name: 'filters',
	initialState,
	reducers: {
		filtersChange: (state, action) => {
			state.activeFilters = action.payload
		},
		filtersChangeProductWeight: (state, action) => {
			state.productWeight = action.payload
		}
	},
	extraReducers: ( builder ) => {
		builder
			.addCase( fetchFilters.pending, state => {
				state.filtersLoadingStatus = 'loading'
			} )
			.addCase( fetchFilters.fulfilled, ( state, action ) => {
				state.allFilters = action.payload.all
				state.mainFilters = action.payload.main
				state.footerFilters = action.payload.footerFilters
				state.filtersLoadingStatus = 'idle'
			} )
			.addCase( fetchFilters.rejected, state => {
				state.filtersLoadingStatus = 'error'
			} )
			.addDefaultCase( () => {
			} )
	}
} )

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
	filtersChange,
	filtersChangeProductWeight
} = actions;