import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'small' | 'large';
	children: ReactNode;
}