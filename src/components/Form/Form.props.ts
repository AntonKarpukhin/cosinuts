import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DataProps } from "../../helpers/HTTPData";



export interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	card: DataProps;
}

