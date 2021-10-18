import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbPayment, Back, CardPayment } from "../../components";

import "./payment.css";

const Payment = () => {
  const [check, setCheck] = useState(false);
  const [send, setSend] = useState(false);
  console.log("ini check", check);
  const shipment = [
    {
      id: 1,
      name: "Gosend",
      price: 15000,
    },
    {
      id: 2,
      name: "JNE",
      price: 9000,
    },
    {
      id: 3,
      name: "Personal Counter",
      price: 29000,
    },
  ];

  const Payment = [
    {
      id: 1,
      name: "e-wallet",
      price: 1500000,
    },
    {
      id: 1,
      name: "Bank Transfer",
      price: 1000000,
    },
    {
      id: 1,
      name: "Virtual Account",
      price: 500000,
    },
  ];

  useEffect(() => {
    // storing input email
    localStorage.setItem("shipment", JSON.stringify(shipment));
    // localStorage.setItem("totalnull", JSON.stringify(totalnull));
  }, [shipment]);

  const checkShipment = () => {
   console.log('ini id click', send)
  };

  console.log(shipment);
  return (
    <>
      <BreadcrumbPayment />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Back title="Back to delivery" />
      </Link>
      <div className="payment">
        <div className="payment__left">
          <p className="payment__left-text-up">Shipment</p>
          <form value={send} onChange={(e) => {
            setSend(e.target.value)
          }}>
            <div
              className="payment__left-containerbutton"
            >
              {shipment.map((item, i) => (
                <CardPayment
                  key={i}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  onSubmit={checkShipment}
                />
              ))}
            </div>
          </form>
          <p className="payment__left-text-up">Payment</p>
          <div
            className="payment__left-containerbutton"
            onClick={() => setCheck(!check)}
          >
            {Payment.map((item, i) => (
              <CardPayment key={i} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
        <div className="payment_right">
          <p className="payment__right-text-up">Summary</p>
          <p className="payment__right-subtext-up">10 items purchased</p>
          <p className="payment__right-text-delivery">Delivery estimation</p>
          <p className="payment__right-subtext-delivery">today by Gosend</p>
          <div className="payment__right-container-cost">
            <p className="payment__right-text-cost">Cost of goods</p>
            <p
              className="payment__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              500,000
            </p>
          </div>
          <div className="payment__right-container-fee">
            <p className="payment__right-text-cost">Dropshipping Fee</p>
            <p
              className="payment__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              5,900
            </p>
          </div>
          <div className="payment__right-container-fee">
            <p className="payment__right-text-cost">Gosend shipment</p>
            <p
              className="payment__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              5,900
            </p>
          </div>
          <div className="payment__right-container-fee">
            <p
              className="payment__right-text-total"
              style={{ color: "orange" }}
            >
              Total
            </p>
            <p className="payment__right-text-total">505,900</p>
          </div>
          <div className="payment__right-container-button">
            <Link to="/payment">
              <button className="payment__right-button">
                Pay with e-wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
