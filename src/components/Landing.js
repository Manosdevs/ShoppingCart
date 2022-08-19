import React from 'react'
import categories from '../Productlist/categories.json'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

function Landing() {
	const rend = categories.map((elem) => {
		return (
			<Link
				style={{ textDecoration: 'none' }}
				to={`/ShoppingCart/${elem.title}`}
			>
				<Card key={elem.id} style={{ width: '15rem' }}>
					<Card.Img
						variant='top'
						style={{ width: '15rem', height: '10rem' }}
						src={elem.image}
					/>
					<Card.Body>
						<Card.Title style={{ color: 'black' }}>{elem.title}</Card.Title>
					</Card.Body>
				</Card>
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
