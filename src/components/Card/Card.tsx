import { CardProps } from "./Card.props";
import { ReactComponent as HeartIcon } from "./Heart.svg";
import { P } from "../P/P";
import { Button } from "../Button/Button";
import card from '../../icons/cards.png'
import { useDispatch, useSelector } from "react-redux";
import { productActive, productFavorites } from "../../reducers/Product.Slice";
import { ButtonsWeight } from "../ButtonsWeight/ButtonsWeight";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { cartAddProducts } from "../../reducers/ShoppingCart";
import { ReactComponent as ShapeIcon} from "./Shape.svg";
import { Link } from "react-router-dom";

import styles from './Card.module.css';
import cn from "classnames";

export const Card = ( { data, className, ...props }: CardProps ): JSX.Element => {

	const weight = useSelector<ReducerProps, number>(state => state.filters.productWeight)

	const dispatch = useDispatch();

	const setShoppingCartProduct = (id: number, weight: number) => {
		if ( data.id === id ) {
			const newProduct = {...data, weight}
			dispatch(cartAddProducts(newProduct))
		}
	}

	const onActiveCard = (id: number) => {
		if ( id === data.id ) {
			dispatch(productActive(data));
		}
	}

	return (
		<div className={className}>
			<div className={ styles.item } key={ data.id } { ...props } onClick={() => onActiveCard(data.id)}>
				<img className={ styles.img } src={card} alt="card"/>
				<div className={ styles.name }>{ data.name }</div>
				<Link className={styles.shape} to={`/product/${data.id}`}>
					<div>Узнать больше</div>
					<div className={styles.shapeIcon}>
						<ShapeIcon />
						<ShapeIcon />
						<ShapeIcon />
					</div>
				</Link>
				<P className={ styles.title } size='m'>{ data.title }</P>
				<div className={ styles.price }>От { data.price }.00 P</div>
				<div className={ styles.oldprice }>От { data.oldprice }.00 P</div>
				<HeartIcon className={ cn(styles.icon , {
					[styles.iconActive]: data.isFavorite
				})} onClick={() => dispatch(productFavorites(data.id))}/>
				<div className={styles.weightButton }>
					<ButtonsWeight appearance="small"/>
				</div>
				<Button className={ styles.button } appearance='small' onClick={() => setShoppingCartProduct(data.id, weight)}>В корзину</Button>
			</div>
		</div>
	)
}