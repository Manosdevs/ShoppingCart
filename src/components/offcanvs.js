import React, {useState} from 'react' 
import Foods from '../Productlist/Foods.json'

export default function OffCanvs(props) {



    const items = props.cart.map(elem => {
        let image = require(`./images/${Foods[elem.id].image}`)
        let total = elem.amount * Foods[elem.id].price

        return <div className='cartli'><img src={image} alt={Foods[elem.id].title} ></img>
            <div>
                <h6 className='itemtitle'>{Foods[elem.id].title}</h6> <br></br> 
                <h7 className='itmamt'> Amount: {elem.amount}  x  ${Foods[elem.id].price.toFixed(2)} </h7><br></br>
                <h7 className='total'>Total ${total.toFixed(2)} </h7>
            </div>
            <button onClick={() => props.delItem(elem.id)} className='bg-dark delicon'><i class="bi bi-trash3"></i></button>
            <hr className='line'></hr>    
        </div>
    })


    return(

       

        <div className={props.offcanv ? 'offcanvs active bg-dark' : 'offcanvs bg-dark'}>
            <div className='cartlist'>
                {items}
                <button className='checkout'>Checkout</button>
            </div>
            
        </div>
    )
}