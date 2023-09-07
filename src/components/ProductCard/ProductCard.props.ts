import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DataProps } from "../../helpers/HTTPData";


export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	product: DataProps
}
