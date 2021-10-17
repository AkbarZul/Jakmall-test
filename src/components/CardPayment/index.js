import React from 'react'

import './card.css'

const CardPayment = (props) => {
    const {name, price} = props;
    return (
        <>
            <div className='card'>
                <p className='card__text' >{name}</p>
                <p className='card__text' style={{marginTop: '-7px'}}>{price}</p>
            </div>
        </>
    )
}

export default CardPayment
