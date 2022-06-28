import React from 'react'
import categories from '../Productlist/categories.json'
import { Link } from 'react-router-dom'

function Landing() {
	const rend = categories.map((elem) => {
		return (
			<Link to={`/ShoppingCart/${elem.title}`}>
				<button className='categButton' key={elem.id}>
					{elem.title}
				</button>
			</Link>
		)
	})

	return (
		<div className='landing'>
			<div className='gridWrap'>{rend}</div>
		</div>
	)
}
export default Landing
