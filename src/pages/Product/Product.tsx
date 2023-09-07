import React, { useEffect } from "react";
import { ProductProps } from "./Product.props";
import { Htag, ProductCard, LeftMenu } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { HTTPAllFilters, HTTPAllFiltersProps } from "../../helpers/HTTPMenu";
import { AppDispatch } from "../../store";
import { fetchFilters } from "../../reducers/Filters.Slice";
import { DataProps } from "../../helpers/HTTPData";
import { Link } from "react-router-dom";

import styles from './Product.module.css';

export const Product = ( { className, ...props }: ProductProps ): JSX.Element => {

	const product = useSelector<ReducerProps, DataProps>(state => state.product.activeProduct)
	const mainFilter = useSelector<ReducerProps, HTTPAllFiltersProps['all']>(state => state.filters.allFilters)
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchFilters(HTTPAllFilters))
	}, [])

	const renderFilters = (filtersArray: HTTPAllFiltersProps['all']) => {
		return filtersArray.slice(0, 12).map((filter: string, i: number) => {
			return <LeftMenu className={styles.close} key={i} data={filter}/>
		})
	}

	const filters = renderFilters(mainFilter)

	return (
		<section className={ styles.wrapper } { ...props }>
			<Link to='/range' className={styles.backCatalog}>Вернуться в каталог</Link>
			<Htag className={ styles.h2 } tag="h2">{product.name}</Htag>
			<div className={styles.wrapperItems}>
				<div className={styles.wrapperCategory}>
					<div className={styles.wrapperCategoryHeader}>Категории</div>
					{filters}
				</div>
				<ProductCard product={product}/>

			</div>
		</section>
	)
}