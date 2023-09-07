import { LeftMenuProps } from "./LeftMenu.props";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";

import styles from './LeftMenu.module.css';
import cn from "classnames";




export const LeftMenu = ( { data, className, ...props }: LeftMenuProps ): JSX.Element => {

	const activeFilter = useSelector<ReducerProps, string>(state => state.filters.activeFilters)

	return (
		<button className={ cn(styles.button, className, {
			[styles.active]: activeFilter === data
		}) } { ...props }>{ data }</button>
	)
}
//