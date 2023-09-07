import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface SubMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	HTTPSubMenu: string;
}