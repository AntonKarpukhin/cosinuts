import { FormProps } from "./Form.props";
import {ReactComponent as DeleteIcon} from "./delete.svg";
import { useDispatch } from "react-redux";
import { cartDeleteProducts } from "../../reducers/ShoppingCart";

import styles from './Form.module.css';



export const Form = ( { card, className, ...props }: FormProps ): JSX.Element => {

	const dispatch = useDispatch()

	const onDeleteProduct = (id: number) => {
		if (card.id === id) {
			dispatch(cartDeleteProducts(id))
		}
	}


	return (
		<div className={styles.orderProduct} {...props}>
			<div>{card.name}</div>
			<div>{card.weight}</div>
			<div>{card.price}</div>
			<DeleteIcon className={styles.icon} onClick={() => onDeleteProduct(card.id)}/>
		</div>
	)
}
