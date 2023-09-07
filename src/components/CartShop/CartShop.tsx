import { CartShopProps } from "./CartShop.props";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import React from "react";

import styles from './CartShop.module.css';
import cn from "classnames";


export const CartShop: React.FC<CartShopProps> = (): JSX.Element => {

	const countProduct = useSelector<ReducerProps, number>(state => state.cart.cartProducts.length)
	const favoritesProduct = useSelector<ReducerProps, number>(state => state.product.isFavorite)

	return (
		<div className={cn(styles.wrapper)}>
			<NavLink className={ cn( styles.button) }  to='/favorites' end style={({ isActive }) =>  isActive ? { backgroundColor: 'orange' } : { color: '' } }>
				Избранное <span className={styles.state}>{favoritesProduct}</span>
			</NavLink>
			<NavLink className={ cn( styles.button, styles.button2) } to='/ordering' end style={({ isActive }) =>  isActive ? { backgroundColor: 'orange' } : { color: '' } }>
				Корзина <span className={cn(styles.state, styles.state2)}>{countProduct}</span>
			</NavLink>
		</div>
	)
}

