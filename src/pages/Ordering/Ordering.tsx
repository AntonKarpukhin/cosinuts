import { GetFormProps, OrderingProps } from "./Ordering.props";
import { Button, Form, Htag} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { DataProps } from "../../helpers/HTTPData";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { cartClearProducts } from "../../reducers/ShoppingCart";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from './Ordering.module.css';
import cn from "classnames";


export const Ordering = ( { className, ...props }: OrderingProps ): JSX.Element => {

	const [name, setName] = useState<string>('');
	const [tel, setTel] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [pay, setPay] = useState<string>('Наличными при получении');
	const [store, setStore] = useState<string>('СПб, Ул. Ефимова, д. 2, ТЦ “ПИК”');


	const {register, handleSubmit, reset, formState: {errors}} = useForm<GetFormProps>();
	const productOrdered = useSelector<ReducerProps, DataProps[]>(state => state.cart.cartProducts);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = (form: GetFormProps) => {
		const setOrder = {
			name: name,
			tel: tel,
			email: email,
			pay: pay,
			store: store,
			product: productOrdered
		};
		console.log(setOrder);

		navigate("/orderCompleted", { replace: true });
		dispatch(cartClearProducts([]));
		reset();
	}

	const getCurrentSum = (productArray: DataProps[]): number => {
		let init = 0;
		productArray.reduce((a, b) => {
			return init = a + b.price
		}, init)
		return init
	}
	const currentSum = getCurrentSum(productOrdered);

	const renderOrderProduct = (productArray: DataProps[]) => {

		return productArray.map((card: DataProps, i: number) => {
			return (
				<div className={styles.orderProduct} key={i}>
					<Form card={card}/>
				</div>
			)
		})
	}

	const product = renderOrderProduct(productOrdered)

	return (
		<section className={ styles.wrapper } { ...props }>
			<motion.form onSubmit={handleSubmit(onSubmit)} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: 'easeOut', duration: 1}}>
				<Htag className={ styles.h2 } tag="h2">Оформление заказа</Htag>
				<div className={ styles.wrapperOrdering }>
					<div className={styles.form}>
						<div className={styles.label}>
							<div className={styles.info}>Ваше имя</div>
							<input
								className={cn(styles.input)}
								value={name}
								{...register('name', {required: 'Обязательное поле', pattern: {value: /^[а-яёА-ЯЁ ]/, message: 'Заполните корректно ФИО'}})}
								placeholder="Введите ФИО"
								type="text"
								onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && <div className={ styles.errorMessage }>{errors.name.message}</div>}
						</div>
						<div className={styles.label}>
							<div className={styles.info}>Ваш телефон</div>
							<input
								className={cn(styles.input)}
								value={tel}
								{...register('tel', {required: 'Обязательное поле', pattern: {value: /^(\d+-?)+\d+$/, message: 'Заполните корректно телефон'}})}
								placeholder="+7 (911) 111-11-11"
								type="text"
								onChange={(e) => setTel(e.target.value)}
							/>
							{errors.tel && <div className={ styles.errorMessage }>{errors.tel.message}</div>}
						</div>
						<div className={styles.label}>
							<div className={styles.info}>Ваш E-mail</div>
							<input
								className={cn(styles.input)}
								value={email}
								{...register('email', {required: 'Обязательное поле', pattern: {value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'Заполните корректно email адресс'}})}
								placeholder='E-mail@mail.ru'
								type="text"
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email && <div className={ styles.errorMessage }>{errors.email.message}</div>}
						</div>
						<div className={styles.label}>
							<div className={styles.info}>Способ оплаты</div>
							<select {...register('pay')} className={styles.select} name="" id="" onChange={e => setPay(e.target.value)}>
								<option defaultValue="Наличными при получении">Наличными при получении</option>
								<option value="Оплата онлайн пластиковой картой">Оплата онлайн пластиковой картой</option>
							</select>
						</div>
						<div className={styles.label}>
							<div className={styles.info}>Пункт выдачи</div>
							<select {...register('store')} className={styles.select} name="" id="" onChange={e => setStore(e.target.value)}>
								<option defaultValue="СПб, Ул. Ефимова, д. 2, ТЦ “ПИК”">СПб, Ул. Ефимова, д. 2, ТЦ “ПИК”</option>
								<option value="СПб, Ул. Демидова, д. 4">СПб, Ул. Демидова, д. 4</option>
							</select>
						</div>
					</div>

					<div>
						<div className={styles.order}>
							<div className={styles.orderName}>Ваш заказ</div>
							{productOrdered.length === 0 ? <div className={styles.noProduct}>Добавьте продукты в корзину</div> : <div className={styles.orderProductWrapper}>{product}</div>}
						</div>
						<div className={styles.sum}>
							<div className={styles.amount}>Итого: <span>{currentSum} Руб.</span></div>
							<Button className={styles.button} appearance='large'>Заказать</Button>
						</div>
					</div>
				</div>
			</motion.form>
		</section>
	)
}

