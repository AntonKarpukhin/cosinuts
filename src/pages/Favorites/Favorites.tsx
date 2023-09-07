import { FavoritesProps } from "./Favorites.props";
import { Card, Htag} from "../../components";
import { DataProps } from "../../helpers/HTTPData";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { motion } from "framer-motion";

import styles from './Favorites.module.css'
import cn from "classnames";


export const Favorites = ( { className, ...props }: FavoritesProps ): JSX.Element => {

	const product = useSelector<ReducerProps, DataProps[]>(state => state.product.product);

	const renderCard = (cardArray: DataProps[]) => {
		return cardArray.map((card: DataProps, i: number) => {
			if (card.isFavorite) {
				return (
					<Card key={i} data={card}/>
				)
			}
		})
	}

	const cards = renderCard(product)


	return (
		<section className={ cn(className, styles.wrapper) } {...props}>
			<Htag className={ styles.h2 } tag="h2">Избранное</Htag>
				<motion.div className={styles.wrapperAssortment} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
					<div className={styles.wrapperSlider}>
					</div>
					<div className={styles.card}>
						{cards}
					</div>
				</motion.div>
		</section>
	)
}