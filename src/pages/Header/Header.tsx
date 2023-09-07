import { HTTPMenu } from "../../helpers/HTTPMenu";
import { Menu, CartShop } from "../../components";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {

	return (
		<header className={ styles.header }>
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				<Menu HTTPMenu={HTTPMenu} />
			</motion.div>
			<motion.div className={styles.CartShop} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				<CartShop />
			</motion.div>
		</header>
	)
}
