import React from 'react'

import './card.css'

const CardPayment = (props) => {
    const {name, price, id, onSubmit} = props;
    // console.log('ini id', id)
    // const checkShipment = () => {
    //     console.log('ayoooo')
    //   }
    return (
        <>
            <div className='card' onClick={onSubmit}>
                <p className='card__text'>{name}</p>
                <p className='card__text' style={{marginTop: '-7px'}}>{price}</p>
            </div>
        </>
    )
}

export default CardPayment
