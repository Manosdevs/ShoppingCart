import React, { useEffect, useState } from 'react'
import Foods from '../Productlist/products.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context'

export default function OffCanvs(props) {
	const { inCart, delItem } = useCart()

	let sum = 0

	const items = inCart.map((elem) => {
		let image = Foods[elem.id].thumbnail
		let total = elem.amount * Foods[elem.id].price
		sum = sum + total

		return (
			<div key={elem.id} className='cartli'>
				<img src={image} alt={Foods[elem.id].title}></img>
				<div className='offcanvtext'>
					<h6 className='itemtitle'>{Foods[elem.id].title}</h6> <br></br>
					<h6 className='itmamt'>
						{' '}
						Amount: {elem.amount} x ${Foods[elem.id].price.toFixed(2)}{' '}
					</h6>
					<br></br>
					<h6 className='total'>Total ${total.toFixed(2)} </h6>
				</div>
				<button onClick={() => delItem(elem.id)} className='bg-dark delicon'>
					<i className='bi bi-trash3'></i>
				</button>
				<hr className='line'></hr>
			</div>
		)
	})

	return (
		<div
			className={props.offcanv ? 'offcanvs active bg-dark' : 'offcanvs bg-dark'}
		>
			<div className='cartlist'>{items}</div>
			<div className='checkbtnDiv'>
				<Link to='/checkout'>
					{' '}
					<button
						disabled={inCart.length > 0 ? false : true}
						className='checkout'
					>
						Checkout ${sum.toFixed(2)}
					</button>{' '}
				</Link>
			</div>
		</div>
	)
}
