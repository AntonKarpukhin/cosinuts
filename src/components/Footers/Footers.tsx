import { FootersProps } from "./Footers.props";
import { Htag } from "../Htag/Htag";
import {ReactComponent as PhoneIcon} from "./phone.svg";
import {ReactComponent as MailIcon} from "./mail.svg";
import {ReactComponent as MapIcon} from "./map.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filtersChange } from "../../reducers/Filters.Slice";
import { motion } from "framer-motion";

import styles from './Footers.module.css';
import cn from "classnames";



export const Footers = ( { data, contactsTel, className, ...props }: FootersProps ): JSX.Element => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const setCategoryRange = (filter: string) => {
		navigate('/range', )
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		dispatch(filtersChange(filter))
	}

	return (
		<div className={ styles.wrapper } { ...props }>
			{ data.map( item => (
				<motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} key={ item.subcategory }>
					<Htag className={styles.h3} tag="h3">{ item.subcategory }</Htag>
					<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.divider}></motion.div>
					{ item.category.map( cat => (
						<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} onClick={() => setCategoryRange(cat)} className={cn(styles.item, styles.menu)} key={ cat }>{ cat }</motion.div>
					) ) }
				</motion.div>
			) ) }
			<div>
				<Htag className={styles.h3} tag="h3">{ contactsTel.contacts }</Htag>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} className={styles.divider}></motion.div>
				{ contactsTel.tel.map( ( contact, i ) => (
					<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}} key={i} className={styles.item}>
						{i === 0 ? <div className={styles.wrapperContracts}><PhoneIcon/> <a href="tel:+79933133133" className={styles.a} key={ i }>{ contact }</a></div> :
							i === 1 ? <div className={styles.wrapperContracts}><PhoneIcon/> <a href="tel:+79933133135" className={styles.a} key={ i }>{ contact }</a></div> :
								i === 2 ? <div className={styles.wrapperContracts}><MailIcon/><a href="mailto: Sychofrycti@Gmail.com" className={styles.a} key={ i }>{ contact }</a></div> :
									i === 3 ? <div className={styles.wrapperContracts}><MapIcon/><a href="#" className={styles.a} key={ i }>{ contact }</a></div> : null}
					</motion.div>

				) ) }
			</div>
		</div>
	)
}