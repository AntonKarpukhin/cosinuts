import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	select: (count: number) => void;
	numberSlider: number[];
}