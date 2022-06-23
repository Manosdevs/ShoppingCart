import React, { useEffect, useState } from 'react'
import Foods from '../Productlist/products.json'
import { Link } from 'react-router-dom'

export default function OffCanvs(props) {
	let sum = 0

	const items = props.cart.map((elem) => {
		let image = Foods[elem.id - 1].thumbnail
		let total = elem.amount * Foods[elem.id - 1].price
		sum = sum + total

		return (
			<div key={elem.id - 1} className='cartli'>
				<img src={image} alt={Foods[elem.id - 1].title}></img>
				<div>
					<h6 className='itemtitle'>{Foods[elem.id - 1].title}</h6> <br></br>
					<h6 className='itmamt'>
						{' '}
						Amount: {elem.amount} x ${Foods[elem.id - 1].price.toFixed(2)}{' '}
					</h6>
					<br></br>
					<h6 className='total'>Total ${total.toFixed(2)} </h6>
				</div>
				<button
					onClick={() => props.delfromcart(elem.id - 1)}
					className='bg-dark delicon'
				>
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
			<div className='cartlist'>
				{items}
				<Link to='/checkout'>
					{' '}
					<button
						disabled={props.cart.length > 0 ? false : true}
						className='checkout'
					>
						Checkout ${sum.toFixed(2)}
					</button>{' '}
				</Link>
			</div>
		</div>
	)
}
