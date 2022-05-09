import React, {useState, useEffect, useRef} from "react";



export default function Pcard(props) {
    const image = require(`./images/${props.image}`)
    const [counter, setCounter] = useState(1)
   
    function AddToCart() {
            props.add(props.id)
            setCounter(counter => counter + 1)
            
    }    


     function Increase() {
            
            props.incr(props.id, counter)
            setCounter(counter => counter + 1)
            
            
        }

        function Decrease() {
            setCounter(counter => counter - 1 )
            props.decr(props.id, counter)
            
            
            
        }
        
    
    
    
    return(
        <div className='cardcont'>
            <h3 className='prodtitle'>{props.title}</h3>
            <img src={image} alt={props.title}></img>
            <p className='price'>${props.price}</p>
            {counter === 1 && <button onClick={AddToCart}>Add To Cart</button> }
            
            {counter !== 1 && <div className='amounts'>
                <button className='increment' onClick={Decrease}>-</button> 
                <p>{counter - 1}</p> 
                <button className='increment' onClick={Increase}> + </button>

                </div>}

        </div>
    )
}


