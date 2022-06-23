import React, { useState, useEffect, useRef, useCallback } from 'react'

export default function Pcard(props) {
	const image = props.image

	let initcount = 0

	;(function () {
		const tomap = JSON.parse(localStorage.getItem('cartitems'))
		if (tomap) {
			tomap.map((elem) => {
				if (elem.id === props.id) {
					initcount = elem.amount
				}
			})
		}
	})()

	const [counter, setCounter] = useState(initcount || 0)

	const AddToCart = useCallback(() => {
		props.add(props.id)
		setCounter((counter) => counter + 1)
	}, [counter])

	useEffect(() => {
		props.incr(props.id, counter)
	}, [counter])

	useEffect(() => {
		props.cart.map((elem) => {
			if (elem.id === props.id) {
				setCounter(elem.amount)
			}
		})
	}, [props.cart])

	function Increase() {
		setCounter(counter + 1)
	}

	function Decrease() {
		setCounter(counter - 1)
	}

	return (
		<div className='cardcont'>
			<h3 className='prodtitle'>{props.title}</h3>
			<img src={image} alt={props.title}></img>
			<p className='price'>${props.price.toFixed(2)}</p>
			{counter === 0 && (
				<button className='ATC bg-dark' onClick={AddToCart}>
					Add To Cart
				</button>
			)}

			{counter !== 0 && (
				<div className='amounts'>
					<button className='increment bg-dark' onClick={Decrease}>
						-
					</button>
					<p className='counter'>{counter}</p>
					<button className='increment bg-dark' onClick={Increase}>
						{' '}
						+{' '}
					</button>
				</div>
			)}
		</div>
	)
}
