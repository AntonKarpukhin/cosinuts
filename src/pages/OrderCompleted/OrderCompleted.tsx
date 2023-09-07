import React from "react";
import { OrderCompletedProps } from "./OrderCompleted.props";

import styles from './OrderCompleted.module.css';
import { Htag} from "../../components";


export const OrderCompleted = ( { className, ...props }: OrderCompletedProps ): JSX.Element => {
	return (
		<section className={ styles.wrapper } { ...props }>
			<Htag className={ styles.h2 } tag="h2">Оформление заказа</Htag>
			<Htag className={ styles.h3 } tag='h3'>Ваш заказ успешно оформлен!</Htag>
		</section>
	)
}