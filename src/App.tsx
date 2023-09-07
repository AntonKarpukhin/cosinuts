import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home, Header, Footer, About, Delivery, Contacts, Shops, OrderCompleted, Ordering, Product, Range, Favorites, Page404 } from "./pages";

import './App.css';


function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/range" element={<Range/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/delivery" element={<Delivery/>}/>
					<Route path="/shops" element={<Shops/>}/>
					<Route path="/contacts" element={<Contacts/>}/>

					<Route path="/product/:productId" element={<Product/>}/>
					<Route path="/favorites" element={<Favorites/>}/>

					<Route path="/ordering" element={<Ordering/>}/>
					<Route path="/orderCompleted" element={<OrderCompleted/>}/>

					<Route path="*" element={<Page404/>}/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;