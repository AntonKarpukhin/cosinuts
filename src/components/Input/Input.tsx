import { InputProps } from "./Input.props";
import { ReactComponent as SearchIcon } from './search.svg';

import styles from './Input.module.css';
import cn from "classnames";


export const Input = ( { className, ...props }: InputProps ): JSX.Element => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<input className={styles.input} placeholder="Кешью Австралийский" type="text" {...props}/>
			<button className={styles.button}><SearchIcon/></button>
		</div>
	)
}