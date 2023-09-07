import { ButtonsWeightProps } from "./ButtonsWeight.props";
import { useDispatch, useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { filtersChangeProductWeight } from "../../reducers/Filters.Slice";

import styles from './ButtonsWeight.module.css';
import cn from "classnames";

export const ButtonsWeight = ( { appearance }: ButtonsWeightProps ): JSX.Element => {

	const weight = useSelector<ReducerProps, number>(state => state.filters.productWeight)
	const dispatch = useDispatch();

	const onSetActiveWeight = (weight: number) => {
		dispatch(filtersChangeProductWeight(weight))
	}

	return (
		<>
			<div
				onClick={() => onSetActiveWeight(100)}
				className={cn(styles.weightLeft, {
					[styles.weightLeftLarge]: appearance === 'large',
					[styles.weightLeftSmall]: appearance === 'small',
					[styles.active]: weight === 100
				})}>100г</div>
			<div
				onClick={() => onSetActiveWeight(500)}
				className={cn(styles.weightMiddle,{
					[styles.weightMiddleLarge]: appearance === 'large',
					[styles.weightMiddleSmall]: appearance === 'small',
					[styles.active]: weight === 500
				})}>500г</div>
			<div
				onClick={() => onSetActiveWeight(1000)}
				className={cn( styles.weightRight,{
					[styles.weightRightLarge]: appearance === 'large',
					[styles.weightRightSmall]: appearance === 'small',
					[styles.active]: weight === 1000
				})}>1000г</div>
		</>
	)
}

