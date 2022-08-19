import React from 'react'
import { useParams } from 'react-router-dom'
import Pcard from './components/productcard'
import Foods from './Productlist/products.json'

function App() {
	let { category } = useParams()

	const products = Foods.map((elem) => {
		if (elem.category === category)
			return (
				<Pcard
					key={elem.id}
					title={elem.title}
					image={elem.thumbnail}
					price={elem.price}
					id={elem.id}
				/>
			)
	})
	return (
		<div className='App'>
			<div className='productpage'>{products}</div>
		</div>
	)
}

export default App
