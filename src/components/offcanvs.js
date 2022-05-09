import React, {useState} from 'react' 

export default function OffCanvs(props) {

    const items = props.cart.map(elem => {
        return <li>{elem.id} : {elem.amount}</li>
    })


    return(

       

        <div className={props.offcanv ? 'offcanvs active' : 'offcanvs'}>
            <ol>
                {items}
            </ol>
        </div>
    )
}