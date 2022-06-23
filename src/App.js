import React, { useState, useEffect } from 'react'
import Pcard from './components/productcard'
import Foods from './Productlist/products.json'
import Navbar from './components/navbar'
import OffCanvs from './components/offcanvs'

function App() {
	const [inCart, setInCart] = useState(
		JSON.parse(localStorage.getItem('cartitems')) || []
	)
	const [offCanv, setOffCanv] = useState(false)

	useEffect(() => {
		localStorage.setItem('cartitems', JSON.stringify(inCart))
	}, [inCart])

	function showSidebar() {
		setOffCanv(!offCanv)
		console.log(offCanv)
		console.log(JSON.stringify(inCart, null, 2))
	}

	function addToCart(id) {
		setInCart((elem) => [...elem, { id: id, amount: 1 }])
		console.log(JSON.stringify(inCart, null, 2))
	}

	function DelItem(id) {
		setInCart((elem) => elem.filter((item) => id !== item.id))
	}

	function Delfromcart(id) {
		setInCart((elem) =>
			elem.map((item) => {
				if (id === item.id) {
					return { id: id, amount: 0 }
				} else {
					return { ...item }
				}
			})
		)
	}

	function incrAmount(id, counter) {
		if (counter === 0) {
			DelItem(id)
		} else {
			setInCart((elem) =>
				elem.map((item) => {
					if (id === item.id) {
						return { id: id, amount: counter }
					} else {
						return { ...item }
					}
				})
			)
		}
	}

	const products = Foods.map((elem) => {
		return (
			<Pcard
				key={elem.id}
				title={elem.title}
				image={elem.thumbnail}
				price={elem.price}
				add={addToCart}
				id={elem.id}
				incr={incrAmount}
				cart={inCart}
			/>
		)
	})
	return (
		<div className='App'>
			<Navbar cart={inCart} handleClick={showSidebar} />
			<OffCanvs delfromcart={Delfromcart} cart={inCart} offcanv={offCanv} />

			<div className='productpage'>{products}</div>
		</div>
	)
}

export default App
