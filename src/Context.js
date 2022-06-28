import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export function useCart() {
	return useContext(CartContext)
}

export function CartContextProvider({ children }) {
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

	function getAmount(id) {
		return inCart.find((item) => item.id === id)?.amount || 0
	}

	function addToCart(id) {
		setInCart((elem) => [...elem, { id: id, amount: 1 }])
		console.log(JSON.stringify(inCart, null, 2))
	}

	function delItem(id) {
		setInCart((elem) => elem.filter((item) => id !== item.id))
	}

	function incrAmount(id) {
		setInCart((elem) => {
			return elem.map((item) => {
				if (item.id === id) {
					return { ...item, amount: item.amount + 1 }
				} else {
					return item
				}
			})
		})
	}

	function decrAmount(id) {
		setInCart((elem) => {
			if (elem.find((item) => item.id === id)?.amount === 1) {
				return elem.filter((item) => item.id !== id)
			} else {
				return elem.map((item) => {
					if (item.id === id) {
						return { ...item, amount: item.amount - 1 }
					} else {
						return item
					}
				})
			}
		})
	}
	return (
		<CartContext.Provider
			value={{
				inCart,
				addToCart,
				delItem,
				decrAmount,
				incrAmount,
				getAmount,
				showSidebar,
				offCanv,
			}}
		>
			{' '}
			{children}
		</CartContext.Provider>
	)
}
