import { ProductCardProps } from "./ProductCard.props";
import CardsIcon from '../../icons/cards.png'

import styles from './ProductCard.module.css';
import cn from "classnames";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { cartAddProducts } from "../../reducers/ShoppingCart";
import { ButtonsWeight } from "../ButtonsWeight/ButtonsWeight";


export const ProductCard = ( { product, className, ...props }: ProductCardProps ): JSX.Element => {

	const weight = useSelector<ReducerProps, number>(state => state.filters.productWeight)
	const dispatch = useDispatch();

	const setShoppingCartProduct = (id: number, weight: number) => {
		if ( product.id === id ) {
			const newProduct = {...product, weight}
			dispatch(cartAddProducts(newProduct))
		}
	}

	return (
		<div className={ cn( styles.wrapperCard, className ) } {...props}>
			<img className={styles.iconCard} src={CardsIcon} alt="cards"/>
			<div className={styles.info}>
				{product.title}
				<span>{product.price}.00 Р</span>
			</div>
			<div className={styles.weightButton }>
				<ButtonsWeight appearance="large"/>
			</div>
			<Button appearance="large" onClick={() => setShoppingCartProduct(product.id, weight)}>В корзину</Button>
		</div>
	)
}