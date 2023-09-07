import React from "react";
import { ContactsProps } from "./Contacts.props";
import {ReactComponent as CosinusIcon} from "../../icons/cosinuts.svg";
import { motion } from "framer-motion";
import { Htag, P } from "../../components";

import styles from './Contacts.module.css';



export const Contacts = ({className, ...props}: ContactsProps): JSX.Element => {
	return (
		<section className={styles.wrapper} {...props}>
			<Htag className={styles.h2} tag="h2">Контакты</Htag>
			<P className={styles.p} size='s'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</P>
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				<CosinusIcon className={styles.icon}/>
			</motion.div>
		</section>
	)
}