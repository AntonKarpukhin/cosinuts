import { DetailedHTMLProps, HTMLAttributes } from "react";
import { HTTPAllFiltersProps, HTTPContactsProps } from "../../helpers/HTTPMenu";


export interface FootersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: HTTPAllFiltersProps['footerFilters'];
	contactsTel: HTTPContactsProps;
}