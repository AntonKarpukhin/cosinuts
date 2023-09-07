import { PPorps } from "./P.porps";
import { motion } from "framer-motion";

import styles from './P.module.css';
import cn from 'classnames';


export const P = ( {size, children, className, ...props}: PPorps ) => {
	return (
		<div
			className={cn( className, styles.p, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm'
			})}
			{...props}
		>
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				{children}
			</motion.div>
		</div>
	)
}