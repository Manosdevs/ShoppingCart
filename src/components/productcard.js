import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useCart } from '../Context'

export default function Pcard(props) {
	const image = props.image
	const { addToCart, incrAmount, getAmount, decrAmount, inCart } = useCart()
	let counter = getAmount(props.id)

	return (
		<div className='cardcont'>
			<h3 className='prodtitle'>{props.title}</h3>
			<img src={image} alt={props.title}></img>
			<p className='price'>${props.price.toFixed(2)}</p>
			{counter === 0 && (
				<button className='ATC bg-dark' onClick={() => addToCart(props.id)}>
					Add To Cart
				</button>
			)}

			{counter !== 0 && (
				<div className='amounts'>
					<button
						className='increment bg-dark'
						onClick={() => decrAmount(props.id)}
					>
						-
					</button>
					<p className='counter'>{counter}</p>
					<button
						className='increment bg-dark'
						onClick={() => incrAmount(props.id)}
					>
						{' '}
						+{' '}
					</button>
				</div>
			)}
		</div>
	)
}
