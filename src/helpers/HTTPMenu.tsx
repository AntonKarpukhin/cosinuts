export interface HTTPFooterProps {
	subcategory: string;
	category: string[];
}

export interface HTTPContactsProps {
	contacts: string;
	tel: string[]
}

export interface HTTPAllFiltersProps {
	main: string[],
	all: string[],
	footerFilters: HTTPFooterProps[]
}

export interface HTTPMenuProps {
	title: string;
	link: string;
}

export const HTTPMenu: HTTPMenuProps[] = [
	{title: 'Главная', link: '/'},
	{title: 'Каталог', link: '/range'},
	{title: 'О нас', link: '/about'},
	{title: 'О доставке', link: '/delivery'},
	{title: 'Магазины', link: '/shops'},
	{title: 'Контакты', link: '/contacts'},
];

export const HTTPAllFilters: HTTPAllFiltersProps = {
	main: [ 'Сухофрукты экзотические', 'Ягоды сушеные', 'Сушеные грибы', 'Восточные сладости', 'Снеки', 'Семена и бобовые', 'Бакалея' ],
	all: [ 'Сухофрукты экзотические', 'Ягоды сушеные', 'Сушеные грибы', 'Восточные сладости', 'Снеки', 'Семена и бобовые', 'Бакалея', 'Цукаты', 'Хлеб и выпечка', 'Сладости', 'Для детей', 'Соленья'],
	footerFilters: [
		{ subcategory: 'Сладости для детей', category: [ 'Сухофрукты экзотические', 'Восточные сладости', 'Бакалея', 'Сладости' ] },
		{ subcategory: 'Десерты', category: [ 'Ягоды сушеные', 'Снеки', 'Цукаты', 'Для детей' ] },
		{ subcategory: 'Хлебные', category: [ 'Цукаты', 'Семена и бобовые', 'Хлеб и выпечка', 'Соленья' ] }
	]
}

export const HTTPContacts: HTTPContactsProps =  {
	contacts: 'Контакты',
	tel: [ '89933133133', '89933133135', 'Sychofrycti@Gmail.com', 'Г. Москва улица кубано набережная 56 литер 2' ]
}
