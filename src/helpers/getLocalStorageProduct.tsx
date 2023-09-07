import { DataProps } from "./HTTPData";

const product = localStorage.getItem('addProduct');

let newOrdered: DataProps[];

if (product) {
	newOrdered = JSON.parse(product)
} else {
	newOrdered = []
}

export {newOrdered}
