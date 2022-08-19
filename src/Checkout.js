import React, { useEffect } from 'react'
import Foods from './Productlist/products.json'
import './checkout.css'
import { useCart } from './Context'

export default function Checkout() {
	const { inCart, delItem, decrAmount, incrAmount } = useCart()

	useEffect(() => {
		localStorage.setItem('cartitems', JSON.stringify(inCart))
	}, [inCart])

	let sum = 0
	let shipping = 0
	let taxes = 0
	let grandTotal = 0

	const items = inCart.map((elem) => {
		let image = Foods[elem.id].thumbnail
		let total = elem.amount * Foods[elem.id].price
		sum = sum + total
		shipping = sum * 0.05
		taxes = sum * 0.08
		grandTotal = sum + shipping + taxes

		return (
			<div key={elem.id} className='checkli'>
				<img src={image} alt={Foods[elem.id].title}></img>
				<div className='checktext'>
					<h6 className='checktitle'>{Foods[elem.id].title}</h6>
					<h6 className='checkprice'>
						${Foods[elem.id].price.toFixed(2)} /unit
					</h6>

					<div className='checkamounts'>
						<button
							className='checkincrement minus'
							onClick={() => decrAmount(elem.id)}
						>
							-
						</button>
						<div className='checkamt'>{elem.amount}</div>
						<button
							className='checkincrement plus'
							onClick={() => incrAmount(elem.id)}
						>
							+
						</button>
					</div>
					<h6 className='itemtotal'> ${total.toFixed(2)} </h6>
					<button onClick={() => delItem(elem.id)} className='checkdelicon'>
						<i className='bi bi-trash3'></i>
					</button>
				</div>
			</div>
		)
	})

	return (
		<div className='checkoutmain'>
			<div className='checkcont'>{items}</div>
			<div className='checktotal'>
				<div className='cartsect'>In Cart: &nbsp; ${sum}</div>
				<hr className='checkline'></hr>
				<div className='cartsect'>Taxes: &nbsp; ${taxes.toFixed(2)}</div>
				<hr className='checkline'></hr>
				<div className='cartsect'>Shipping: &nbsp; ${shipping.toFixed(2)}</div>
				<hr className='checkline'></hr>
				<div className='cartsect'>
					Grand Total: &nbsp; ${grandTotal.toFixed(2)}
				</div>
				<hr className='checkline'></hr>
				<button className='pay'>Pay Now</button>
			</div>
		</div>
	)
}
