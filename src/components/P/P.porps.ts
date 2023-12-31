import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PPorps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
	size: 's' | 'm';
	children: ReactNode
}