

import styles from "./Footer.module.css";
import { Footers } from "../../components";
import { HTTPAllFilters, HTTPContacts } from "../../helpers/HTTPMenu";


export const Footer = (): JSX.Element => {
	return (
		<footer className={ styles.footer }>
			<Footers contactsTel={HTTPContacts} data={HTTPAllFilters.footerFilters}/>
		</footer>
	)
}