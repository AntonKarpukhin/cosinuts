import { ButtonProps } from "./Button.props";

import styles from './Button.module.css';
import cn from "classnames";


export const Button = ( { appearance, children, className, ...props }: ButtonProps ): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.small]: appearance === 'small',
				[styles.large]: appearance === 'large'
			})}
			{...props}
			>
			{children}
		</button>


	)
}

