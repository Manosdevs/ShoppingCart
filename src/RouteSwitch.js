import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from './App'
import Checkout from './Checkout'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/ShoppingCart' element={<App />} />
                <Route path ='/checkout' element={<Checkout />} />
                
            </Routes>
        </BrowserRouter>
    )
}