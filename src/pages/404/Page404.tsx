import React from "react";
import { AboutProps } from "./Page404.props";
import {ReactComponent as CosinusIcon} from "../../icons/cosinuts.svg";

import styles from './Page404.module.css';
import { Htag, P } from "../../components";
import { Link } from "react-router-dom";


export const Page404 = ({className, ...props}: AboutProps): JSX.Element => {
	return (
		<section className={styles.wrapper} {...props}>
			<Htag className={styles.h2} tag="h2">Ой...Мы не можем найти эту страницу</Htag>
			<Link className={styles.navLink} to='/'><P className={styles.p} size='s'>Вернуться на главную страницу</P></Link>
			<CosinusIcon className={styles.icon}/>
		</section>
	)
}