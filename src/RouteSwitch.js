import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Checkout from './Checkout'
import Navbar from './components/navbar'
import Landing from './components/Landing'
import { CartContextProvider } from './Context'

export default function RouteSwitch() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path='/ShoppingCart' element={<Landing />} />
					<Route path='/ShoppingCart/:category' element={<App />} />

					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	)
}
