import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: {
		id: number;
		category: string;
		subcategory: string;
		name: string;
		title: string;
		price: number;
		oldprice: number;
		weight?: number;
		isFavorite?: boolean;
	}
}


