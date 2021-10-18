import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbPayment, Back, CardPayment } from "../../components";

import "./payment.css";

const Payment = () => {
  const [check, setCheck] = useState(0);
  const [send, setSend] = useState(0);
  const [coba, setCoba] = useState(0);
  const [ewallet, setEwallet] = useState(0);
  const [bank, setBank] = useState(0);
  const [virtual, setVirtual] = useState(0);
  const gosend = 15000;
  const jne = 9000;
  const personal = 29000;
  return (
    <>
      <BreadcrumbPayment />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Back title="Back to delivery" />
      </Link>
      <div className="payment">
        <div className="payment__left">
          <p className="payment__left-text-up">Shipment</p>
          <div className="payment__left-containerbutton">
            <div className="card" onClick={() => setCoba(1)}>
              <p className="card__text">Go-Send</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                15000
              </p>
            </div>

            <div className="card" onClick={() => setSend(2)}>
              <p className="card__text">JNE</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                9000
              </p>
            </div>

            <div className="card" onClick={() => setCheck(3)}>
              <p className="card__text">Personal Counter</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                29000
              </p>
            </div>
          </div>
          <p className="payment__left-text-up">Payment</p>
          <div className="payment__left-containerbutton">
            <div className="card" onClick={() => setEwallet(1)}>
              <p className="card__text">e-wallet</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                1500000
              </p>
            </div>

            <div className="card" onClick={() => setBank(2)}>
              <p className="card__text">Bank Transfer</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                1000000
              </p>
            </div>

            <div className="card" onClick={() => setVirtual(3)}>
              <p className="card__text">Virtual Account</p>
              <p className="card__text" style={{ marginTop: "-7px" }}>
                500000
              </p>
            </div>
          </div>
        </div>
        <div className="payment_right">
          <p className="payment__right-text-up">Summary</p>
          <p className="payment__right-subtext-up">10 items purchased</p>
          <p className="payment__right-text-delivery">Delivery estimation</p>
          {coba === 1 ? (
            <p className="payment__right-subtext-delivery">today by Gosend</p>
          ) : send === 2 ? (
            <p className="payment__right-subtext-delivery">2 day by JNE</p>
          ) : check === 3 ? (
            <p className="payment__right-subtext-delivery">
              1 day by Personal Counter
            </p>
          ) : null}
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

          {coba === 1 ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">Go-send shipment</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {gosend}
              </p>
            </div>
          ) : send === 2 ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">JNE shipment</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {jne}
              </p>
            </div>
          ) : check === 3 ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">
                Personal Counter shipment
              </p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {personal}
              </p>
            </div>
          ) : null}
          {/* <p className="payment__right-text-cost">Gosend shipment</p> */}

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
            {ewallet === 1 ? (
              <Link to="/payment">
                <button className="payment__right-button">
                  Pay with e-wallet
                </button>
              </Link>
            ) : bank === 2 ? (
              <Link to="/payment">
                <button className="payment__right-button">
                  Pay with Bank Transfer
                </button>
              </Link>
            ) : virtual === 3 ? (
              <Link to="/payment">
                <button className="payment__right-button">
                  Pay with Virtual Account
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
