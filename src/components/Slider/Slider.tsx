import { SliderProps } from "./Slider.props";
import {ReactComponent as ArrowIcon} from "./arrow.svg";

import styles from './Slider.module.css';
import cn from "classnames";


export const Slider = ( { numberSlider, select, className, ...props }: SliderProps ): JSX.Element => {

	const [slide1, slide2] = numberSlider

	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<button className={styles.button} onClick={ slide1 >= 6 ? () => select(- 6) : undefined}>
				<ArrowIcon className={styles.arrowLeft} />
			</button>
			<div className={styles.count}>
				<div className={cn({
					[styles.activeNumber]: slide1 < 6
				})}>1</div>
				<div className={cn({
					[styles.activeNumber]: slide1 >= 6
				})} >2</div>
			</div>
			<button className={styles.button} onClick={ slide2 <= 6 && slide2 <= 12 ? () => select(6) : undefined}>
				<ArrowIcon className={styles.arrowRight} />
			</button>
		</div>
	)
}