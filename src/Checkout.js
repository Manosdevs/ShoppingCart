import React, { useState, useEffect } from 'react'
import Foods from './Productlist/products.json'
import './checkout.css'

export default function Checkout() {
	const [inCart, setInCart] = useState(
		JSON.parse(localStorage.getItem('cartitems')) || []
	)

	useEffect(() => {
		localStorage.setItem('cartitems', JSON.stringify(inCart))
	}, [inCart])

	let sum = 0

	const items = inCart.map((elem) => {
		let image = require(`./components/images/${Foods[elem.id].image}`)
		let total = elem.amount * Foods[elem.id].price
		sum = sum + total

		return (
			<div key={elem.id} className='checkli'>
				<img src={image} alt={Foods[elem.id].title}></img>
				<div className='checktext'>
					<h6 className='checktitle'>{Foods[elem.id].title}</h6>
					<h6 className='checkprice'>${Foods[elem.id].price.toFixed(2)} </h6>
					<h6 className='itemtotal'>Total ${total.toFixed(2)} </h6>
					<div className='checkamounts'>
						<button className='checkincrement minus'>-</button>
						<div className='checkamt'>{elem.amount}</div>
						<button className='checkincrement plus'>+</button>
					</div>
				</div>
				<button
					/* onClick={() => props.delItem(elem.id)} */ className='checkdelicon'
				>
					<i className='bi bi-trash3'></i>
				</button>
			</div>
		)
	})

	return (
		<div className='checkcont'>
			{items}

			<div className='checktotal'>
				<div className='carttotal'>In Cart: {sum}</div>
				<hr className='checkline'></hr>
				<div className='carttaxesl'>Taxes: $10</div>
				<hr className='checkline'></hr>
				<div className='cartsum'>Grand Total: ${sum + 10}</div>
				<hr className='checkline'></hr>
				<button className='pay'>Pay Now</button>
			</div>
		</div>
	)
}
