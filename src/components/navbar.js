import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OffCanvs from './offcanvs'
import { useCart } from '../Context'

export default function Navbar() {
	const { inCart, offCanv, showSidebar } = useCart()

	return (
		<div className='navDiv'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link className='homeLink nav-link active' to='/ShoppingCart'>
						Home
					</Link>

					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'></ul>
					</div>
					{
						<button onClick={() => showSidebar()} className='cartbutton'>
							<i className='bi bi-cart'></i> Your Cart({inCart.length})
						</button>
					}
				</div>
			</nav>
			{<OffCanvs offcanv={offCanv} />}
		</div>
	)
}
