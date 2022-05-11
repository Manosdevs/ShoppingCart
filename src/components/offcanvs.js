import React, {useState} from 'react' 
import Foods from '../Productlist/Foods.json'

export default function OffCanvs(props) {

    let sum = 0

    const items = props.cart.map(elem => {
        let image = require(`./images/${Foods[elem.id].image}`)
        let total = elem.amount * Foods[elem.id].price
        sum = sum + total

        return <div key={elem.id} className='cartli'><img src={image} alt={Foods[elem.id].title} ></img>
            <div>
                <h6 className='itemtitle'>{Foods[elem.id].title}</h6> <br></br> 
                <h6 className='itmamt'> Amount: {elem.amount}  x  ${Foods[elem.id].price.toFixed(2)} </h6><br></br>
                <h6 className='total'>Total ${total.toFixed(2)} </h6>
            </div>
            <button onClick={() => props.delItem(elem.id)} className='bg-dark delicon'><i className="bi bi-trash3"></i></button>
            <hr className='line'></hr>    
        </div>
    })


    return(

       

        <div className={props.offcanv ? 'offcanvs active bg-dark' : 'offcanvs bg-dark'}>
            <div className='cartlist'>
                {items}
                <button className='checkout'>Checkout ${sum.toFixed(2)}</button>
            </div>
            
        </div>
    )
}