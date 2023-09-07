import { ReactComponent as HomeIcon} from "./Home.svg";
import {NavLink} from "react-router-dom";
import { MenuProps } from "./Menu.props";

import styles from './Menu.module.css';

export const Menu = ( {HTTPMenu }: MenuProps ): JSX.Element => {

	return (
		<nav className={styles.wrapper}>
			<HomeIcon/>
			{ HTTPMenu.map( menu => (
				<NavLink end style={({ isActive }) =>  isActive ? { color: 'black' } : { color: '' } } to={menu.link} key={menu.title} className={styles.link}>{ menu.title }</NavLink>
			) ) }
		</nav>
	)
}