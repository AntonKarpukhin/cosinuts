import { DataProps } from "../helpers/HTTPData";
import { HTTPAllFiltersProps } from "../helpers/HTTPMenu";


export interface ProductReducerProps {
	product: DataProps[];
	productLoadingStatus: string;
	activeProduct: DataProps;
	isFavorite: number;
}

export interface FiltersReducerProps {
	allFilters: HTTPAllFiltersProps['all'],
	mainFilters: HTTPAllFiltersProps['main'],
	footerFilters: HTTPAllFiltersProps['footerFilters'],
	filtersLoadingStatus: string,
	activeFilters: string,
	productWeight: 100 | 500 | 1000
}

export interface CartReducerProps {
	cartProducts: DataProps[];
}


export interface ReducerProps {
	product: ProductReducerProps;
	filters: FiltersReducerProps;
	cart: CartReducerProps;
}
