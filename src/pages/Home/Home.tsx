import { Card, Htag, P, Spinner, SubMenu } from "../../components";
import { useDispatch, useSelector } from 'react-redux'
import { HTTPAllFilters, HTTPAllFiltersProps } from "../../helpers/HTTPMenu";
import { data, DataProps } from "../../helpers/HTTPData";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { useEffect } from "react";
import { fetchProduct } from "../../reducers/Product.Slice";
import { AppDispatch } from "../../store";
import { fetchFilters, filtersChange } from "../../reducers/Filters.Slice";
import { createSelector } from "@reduxjs/toolkit";
import MainIcon from './main.png'
import { motion } from "framer-motion";

import styles from './Home.module.css';


export const Home = (): JSX.Element => {

	const filteredProduct = createSelector(
		(state: ReducerProps) => state.product.product,
		(state: ReducerProps) => state.filters.activeFilters,
		(product, filter) => {
			return product.filter(item => item.category === filter)
		}
	)

	const product = useSelector<ReducerProps, DataProps[]>(filteredProduct);
	const loadingStatus = useSelector<ReducerProps, string>(state => state.product.productLoadingStatus)
	const mainFilter = useSelector<ReducerProps, HTTPAllFiltersProps['main']>(state => state.filters.mainFilters)
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProduct(data))
		dispatch(fetchFilters(HTTPAllFilters))
	}, [])

	if (loadingStatus === 'loading') {
		return <Spinner/>
	} else if (loadingStatus === 'error') {
		return <h1>Произошла ошибка, попробуйте перезагрузить страницу</h1>
	}

	const renderCard = (cardArray: DataProps[]) => {
		return cardArray.map((card: DataProps, i: number) => {
			return (
				<Card key={i} data={card}/>
			)
		})
	}

	const cards = renderCard(product)

	const renderFilters = (filtersArray: HTTPAllFiltersProps['main']) => {
		return filtersArray.map((filter: string, i: number) => {
			return <SubMenu key={i} HTTPSubMenu={filter} onClick={() => dispatch(filtersChange(filter))}></SubMenu>
		})
	}

	const filters = renderFilters(mainFilter)

	return (
		<>
			<section className={ styles.wrapper }>
				<Htag tag='h1'><span>Dried</span><br/>Fruits</Htag>
				<P className={ styles.p } size='s'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
					вэб-дизайне. Lorem Ipsum является стандартной</P>
				<motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={ styles.mainIcon } src={MainIcon} alt="MainIcon"/>
			</section>
			<section className={styles.assortment}>
				<Htag className={styles.h2} tag='h2'>Наш ассортимент</Htag>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.wrapperButton}>
					{filters}
				</motion.div>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.wrapperCard} >
				{cards}
				</motion.div>
			</section>
		</>
	)
}