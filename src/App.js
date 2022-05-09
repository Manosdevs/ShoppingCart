import React, {useState, useEffect} from "react";
import Pcard from "./components/productcard";
import Foods from "./Productlist/Foods.json";
import Navbar from "./components/navbar";
import OffCanvs from "./components/offcanvs";

function App() {

  const [inCart, setInCart] = useState([])
  const [offCanv, setOffCanv] = useState(false)
 
 function showSidebar() {
   setOffCanv(!offCanv)
   console.log(offCanv)
   console.log(JSON.stringify(inCart, null, 2))
 }

  function addToCart(id) {
    
    setInCart(elem => [...elem, {'id': id, 'amount': 1}])
    console.log(JSON.stringify(inCart, null, 2))
  }

  function incrAmount(id, counter) {
    if (counter === 0) {
      setInCart(elem => elem.filter((item) => id !== item.id))
    } else {

      setInCart(elem => elem.map((item) => {
        if (id === item.id) {
          return {'id': id,  'amount': counter}
        } else {
          return {...item}  
        }
        }))
    }
  }
 


 

  const products = Foods.map(elem => {
   return <Pcard 
    key={elem.id}
    title={elem.title}
    image={elem.image}
    price={elem.price}
    add={addToCart}
    id={elem.id}
    incr={incrAmount}
    
   

    />
  })
  return (
    <div className="App">
      <Navbar  handleClick={showSidebar} />
      <OffCanvs cart={inCart} offcanv={offCanv} />
       
        
      <div className='productpage'>
        {products}
      </div>  
      
    </div>
  );
}

export default App;
