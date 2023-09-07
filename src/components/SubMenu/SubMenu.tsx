import { SubMenuProps } from "./SubMenu.props";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";

import styles from './SubMenu.module.css';
import cn from "classnames";

export const SubMenu = ( { HTTPSubMenu, className, ...props }: SubMenuProps ): JSX.Element => {

	const activeFilter = useSelector<ReducerProps, string>(state => state.filters.activeFilters)

	return (
		<button className={ cn(styles.button, className, {
			[styles.active]: activeFilter === HTTPSubMenu
		})  } { ...props }>{ HTTPSubMenu }</button>
	)
}