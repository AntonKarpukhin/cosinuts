import React, {useEffect, useState } from "react";
import {  RangeProps } from "./Range.props";
import { Card, Htag, Slider, LeftMenu } from "../../components";
import { data, DataProps } from "../../helpers/HTTPData";
import { useDispatch, useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { HTTPAllFilters, HTTPAllFiltersProps } from "../../helpers/HTTPMenu";
import { AppDispatch } from "../../store";
import { fetchFilters, filtersChange } from "../../reducers/Filters.Slice";
import { createSelector } from "@reduxjs/toolkit";
import { fetchProduct } from "../../reducers/Product.Slice";
import { motion } from "framer-motion";

import styles from './Range.module.css';



export const Range = ( { className, ...props }: RangeProps ): JSX.Element => {

	const [numberSlider, setNumberSlider] = useState<number[]>([0, 6]);


	const getSlides = () => {

		const filteredProduct = createSelector(
			(state: ReducerProps) => state.product.product,
			(state: ReducerProps) => state.filters.activeFilters,
			(product, filter) => {
				return product.filter(item => item.category === filter).slice(numberSlider[0], numberSlider[1])
			}
		)
		return filteredProduct
	}

	const product = useSelector<ReducerProps, DataProps[]>(getSlides());
	const mainFilter = useSelector<ReducerProps, HTTPAllFiltersProps['all']>(state => state.filters.allFilters)
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProduct(data))
		dispatch(fetchFilters(HTTPAllFilters))
	}, [])


	useEffect(() => {
		getSlides()
	}, [numberSlider])

	const renderCard = (cardArray: DataProps[]) => {
		return cardArray.map((card: DataProps, i: number) => {
			return (
				<Card key={i} data={card}/>
			)
		})
	}

	const cards = renderCard(product)

	const renderFilters = (filtersArray: HTTPAllFiltersProps['all']) => {
		return filtersArray.slice(0, 12).map((filter: string, i: number) => {
			return <LeftMenu key={i} data={filter} onClick={() => dispatch(filtersChange(filter))}/>
		})
	}

	const filters = renderFilters(mainFilter)

	const select = (count: number | undefined) => {
		if (count) {
			setNumberSlider(numberSlider =>  [numberSlider[0] + count, numberSlider[1] + count])
		}
	}


	return (
		<section className={ styles.wrapper } { ...props }>
			<Htag className={ styles.h2 } tag="h2">Наш ассортимент</Htag>
			<motion.div className={styles.wrapperRange} initial={{opacity: 0}} animate={{opacity: 3}} transition={{ease: 'easeOut', duration: 1}}>
				<div>
					<div className={styles.wrapperCategory}>
						<div className={styles.wrapperCategoryHeader}>Категории</div>
						{filters}
					</div>
				</div>
				<div className={styles.wrapperAssortment}>
					<div className={styles.wrapperSlider}>
						<Slider className={styles.slider} select={select} numberSlider={numberSlider}/>
					</div>
					<div className={styles.card} >
						{cards}
					</div>
				</div>

			</motion.div>
		</section>
	)
}