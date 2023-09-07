import { LinkProps } from "react-router-dom";


export interface CartShopProps extends Omit<LinkProps, "className" | "style" | "children" | "to"> {
}