import React from "react";
import { ShopsProps } from "./Shops.props";
import {ReactComponent as CosinusIcon} from "../../icons/cosinuts.svg";
import {ReactComponent as ShopsIcon} from "../../icons/shops.svg";
import { Htag, P } from "../../components";
import { motion } from "framer-motion";

import styles from './Shops.module.css';


export const Shops = ({className, ...props}: ShopsProps): JSX.Element => {
	return (
		<section className={styles.wrapper} {...props}>
			<Htag className={styles.h2} tag="h2">Наши магазины</Htag>
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.items}>
				<div className={styles.item}>
					<ShopsIcon className={styles.iconShops}/>
					<P className={styles.p} size='s'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</P>
				</div>
				<div className={styles.item}>
					<ShopsIcon className={styles.iconShops}/>
					<P className={styles.p} size='s'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</P>
				</div>
			</motion.div>
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				<CosinusIcon className={styles.icon}/>
			</motion.div>
		</section>
	)
}