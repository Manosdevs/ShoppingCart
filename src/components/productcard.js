import React, {useState, useEffect, useRef, useCallback} from "react";



export default function Pcard(props) {
    const image = require(`./images/${props.image}`)
    const [counter, setCounter] = useState(0)
   
    const  AddToCart = useCallback( () => {
            props.add(props.id)
            setCounter(counter => counter + 1)
            
    }, [counter])    


    useEffect(() => {
        props.incr(props.id, counter)
    }, [counter])

  /*   const  Increase = useCallback( () => {
            setCounter(counter => counter + 1)
            props.incr(props.id, counter)
            
            
            
        }, [counter])

        function Decrease() {
            setCounter(counter => counter - 1 )
            props.decr(props.id, counter)
            
            
            
        } */

    function Increase() {
        setCounter(counter + 1)
    }
    
    function Decrease() {
        setCounter(counter - 1)
    }
        
    
    
    
    return(
        <div className='cardcont'>
            <h3 className='prodtitle'>{props.title}</h3>
            <img src={image} alt={props.title}></img>
            <p className='price'>${props.price}</p>
            {counter === 0 && <button onClick={AddToCart}>Add To Cart</button> }
            
            {counter !== 0 && <div className='amounts'>
                <button className='increment' onClick={Decrease}>-</button> 
                <p>{counter }</p> 
                <button className='increment' onClick={Increase}> + </button>

                </div>}

        </div>
    )
}


