import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbPayment, Back, CardPayment } from "../../components";

import "./payment.css";

const Payment = () => {
  const [check, setCheck] = useState(() => {
    const local = localStorage.getItem("check");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [send, setSend] = useState(() => {
    const local = localStorage.getItem('send');
    const init = JSON.parse(local);
    return init || 0;
  });
  const [coba, setCoba] = useState(() => {
    const local = localStorage.getItem("coba");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [ewallet, setEwallet] = useState(() => {
    const local = localStorage.getItem('ewallet');
    const init = JSON.parse(local);
    return init || 0;
  });
  const [bank, setBank] = useState(() => {
    const local = localStorage.getItem('bank');
    const init = JSON.parse(local);
    return init || 0;
  });
  const [virtual, setVirtual] = useState(() => {
    const local = localStorage.getItem('virtual');
    const init = JSON.parse(local);
    return init || 0;
  });
  let gosend = 0;
  let jne = 0;
  let personal = 0;
  const [cost, setCost] = useState(() => {
    const local = localStorage.getItem("cost");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [dropshiping, setDropshiping] = useState(() => {
    const local = localStorage.getItem("dropshiping");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [dropshipingnol, setDropshipingNol] = useState(() => {
    const local = localStorage.getItem("dropshipingnol");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [total, setTotal] = useState(() => {
    const local = localStorage.getItem("total");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [totalnull, setTotalNull] = useState(() => {
    const local = localStorage.getItem("totalnull");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [checkbox, setCheckbox] = useState(() => {
    const local = localStorage.getItem("checkbox");
    const init = JSON.parse(local);
    return init || "";
  });
  useEffect(() => {
    // storing input email
    localStorage.setItem("check", JSON.stringify(check));
    localStorage.setItem("send", JSON.stringify(send));
    localStorage.setItem("coba", JSON.stringify(coba));
    localStorage.setItem("ewallet", JSON.stringify(ewallet));
    localStorage.setItem("bank", JSON.stringify(bank));
    localStorage.setItem("virtual", JSON.stringify(virtual));
  }, [check, send, coba, ewallet, bank, virtual]);
  console.log("payment chec", checkbox);
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
              {cost}
            </p>
          </div>
          {/* <div className="payment__right-container-fee"> */}
          {checkbox === true ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">Dropshipping Fee</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshiping}
              </p>
            </div>
          ) : (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">Dropshipping Fee</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshipingnol}
              </p>
            </div>
          )}

          {/* </div> */}

          {coba === 1 ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">Go-send shipment</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {(gosend = 15000)}
              </p>
            </div>
          ) : send === 2 ? (
            <div className="payment__right-container-fee">
              <p className="payment__right-text-cost">JNE shipment</p>
              <p
                className="payment__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {(jne = 9000)}
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
                {(personal = 29000)}
              </p>
            </div>
          ) : null}
          {/* <p className="payment__right-text-cost">Gosend shipment</p> */}
          {checkbox === true ? (
            <div className="payment__right-container-fee">
              <p
                className="payment__right-text-total"
                style={{ color: "orange" }}
              >
                Total
              </p>
              <p className="payment__right-text-total">
                {gosend + jne + personal + total}
              </p>
            </div>
          ) : (
            <div className="payment__right-container-fee">
              <p
                className="payment__right-text-total"
                style={{ color: "orange" }}
              >
                Total
              </p>
              <p className="payment__right-text-total">
                {gosend + jne + personal + totalnull}
              </p>
            </div>
          )}

          <div className="payment__right-container-button">
            {ewallet === 1 ? (
              <Link to="/finish">
                <button className="payment__right-button">
                  Pay with e-wallet
                </button>
              </Link>
            ) : bank === 2 ? (
              <Link to="/finish">
                <button className="payment__right-button">
                  Pay with Bank Transfer
                </button>
              </Link>
            ) : virtual === 3 ? (
              <Link to="/finish">
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
