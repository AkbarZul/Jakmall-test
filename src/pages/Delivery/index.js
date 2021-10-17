import React, { useState } from "react";
import { Breadcrumb, Back } from "../../components";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";

import "./delivery.css";

const Delivery = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [address, setAddress] = useState('')
  console.log('ini check', checkbox)
  return (
    <>
      <Breadcrumb />
      <Back title="Back to cart" />
      <div className="delivery">
        <div className="delivery__left">
          <div className="delivery__left-up">
            <p className='delivery__left-text-up'>Delivery details</p>
            <div className="delivery__left-container">
              <input
                type="checkbox"
                onChange={() => {
                  setCheckbox(!checkbox);
                }}
              />
              <p className='delivery__left-text-container'>send as dropshipper</p>
            </div>
          </div>
         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div className='delivery__left-down'>
          <input placeholder='Email' className='delivery__left-input-down' />
          <input placeholder='Phone Number' className='delivery__left-input-down'/>
          <input placeholder='Delivery Address' className='delivery__left-input-down' style={{height: '70px'}} onChange={(e) => setAddress(e.target.value)} />
          <p>{address.length}</p>
          <p>{address}</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <input placeholder='Dropshipper name' className='delivery__left-input-down' style={{width: '300px'}} />
            <input placeholder='Dropshipper phone number' className='delivery__left-input-down' style={{width: '300px'}} />
          </div>
         </div>
          
        </div>
        <div className="delivery__right">
        <p className='delivery__right-text-up'>Summary</p>
        <p className='delivery__right-subtext-up'>10 items purchased</p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '250px'}}>
          <p>Cost of goods</p>
          <p>500,000</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-20px'}}>
          <p>Dropshipping Fee</p>
          <p>5,900</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-20px'}}>
          <p>Total</p>
          <p>505,900</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button style={{width: '190px', height: '40px', background: 'orange', color: 'white', borderRadius: '5px', border: 'none'}}>Continue to payment</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
