import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface ButtonsWeightProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'small' | 'large';
}