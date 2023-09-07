import { LinkProps } from "react-router-dom";
import { HTTPMenuProps } from "../../helpers/HTTPMenu";


export interface MenuProps extends Omit<LinkProps, "className" | "style" | "children" | "to"> {
	HTTPMenu: HTTPMenuProps[]
}