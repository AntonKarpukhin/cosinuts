import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OrderingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
}

export interface GetFormProps {
	name: string;
	tel: number;
	email: string;
	pay: string;
	store: string;
	productName: string;
	productWeight: string;
	productPrice: string;
}