import { HtagProps } from "./Htag.props";
import { motion } from "framer-motion";
import styles from './Htag.module.css';
import cn from "classnames";


export const Htag = ( { tag, children, className}: HtagProps ): JSX.Element => {
	switch ( tag ) {
		case "h1":
			return <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.h1}>{children}</motion.h1>
		case "h2":
			return <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={cn(styles.h2, className)}>{children}</motion.h2>
		case "h3":
			return <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={cn(styles.h3, className)}>{children}</motion.h3>
		default:
			return  <></>
	}
}

