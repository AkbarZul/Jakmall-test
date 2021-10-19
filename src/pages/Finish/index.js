import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbFinish, Back } from "../../components";

import "./finish.css";

const Finish = () => {
  const [check, setCheck] = useState(() => {
    const local = localStorage.getItem("check");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [send, setSend] = useState(() => {
    const local = localStorage.getItem("send");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [coba, setCoba] = useState(() => {
    const local = localStorage.getItem("coba");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [ewallet, setEwallet] = useState(() => {
    const local = localStorage.getItem("ewallet");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [bank, setBank] = useState(() => {
    const local = localStorage.getItem("bank");
    const init = JSON.parse(local);
    return init || 0;
  });
  const [virtual, setVirtual] = useState(() => {
    const local = localStorage.getItem("virtual");
    const init = JSON.parse(local);
    return init || 0;
  });
  let gosend = 0;
  let jne = 0;
  let personal = 0;
  let walletcount = 1500000;
  let bankcount = 1000000;
  let virtualcount = 500000;
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
  return (
    <>
      <BreadcrumbFinish />

      <div className="finish">
        <div className="finish__left">
          <p className="finish__left-text-up">Thank You</p>
          <p>Order ID: </p>
          <p>You order will be delivered today with Go-send</p>
          <Link to="/payment" style={{ textDecoration: "none", color: "black" }}>
            <Back title="Back to homepage" />
          </Link>
        </div>

        <div className="finish__right">
          <p className="finish__right-text-up">Summary</p>
          <p className="finish__right-subtext-up">10 items purchased</p>
          <p className="finish__right-text-delivery">Delivery estimation</p>
          {coba === 1 ? (
                      <p className="finish__right-subtext-delivery">today by Gosend</p>
          ) : send === 2 ? (
            <p className="finish__right-subtext-delivery">2 day by JNE</p>
          ) : check === 3 ? (
            <p className="finish__right-subtext-delivery">1 day by Personal Counter</p>
          ) : null}
          
          <p className="finish__right-text-delivery">Payment Method</p>
          {ewallet === 1 ? (
              <p className="finish__right-subtext-delivery">E-wallet</p>
            ) : bank === 2 ? (
                <p className="finish__right-subtext-delivery">Bank Transfer</p>
            ) : virtual === 3 ? (
                <p className="finish__right-subtext-delivery">Virtual Account</p>
            ) : null}
          
          <div className="finish__right-container-cost">
            <p className="finish__right-text-cost">Cost of goods</p>
            <p
              className="finish__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              {cost}
            </p>
          </div>
          {checkbox === true ? (
            <div className="finish__right-container-fee">
              <p className="finish__right-text-cost">Dropshipping Fee</p>
              <p
                className="finish__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshiping}
              </p>
            </div>
          ) : (
            <div className="finish__right-container-fee">
              <p className="finish__right-text-cost">Dropshipping Fee</p>
              <p
                className="finish__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshipingnol}
              </p>
            </div>
          )}

          {coba === 1 ? (
            <div className="finish__right-container-fee">
              <p className="finish__right-text-cost">Go-send shipment</p>
              <p
                className="finish__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {(gosend = 15000)}
              </p>
            </div>
          ) : send === 2 ? (
            <div className="finish__right-container-fee">
              <p className="finish__right-text-cost">JNE shipment</p>
              <p
                className="finish__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {(jne = 9000)}
              </p>
            </div>
          ) : check === 3 ? (
            <div className="finish__right-container-fee">
              <p className="finish__right-text-cost">
                Personal Counter shipment
              </p>
              <p
                className="finish__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {(personal = 29000)}
              </p>
            </div>
          ) : null}
          {/* <p className="finish__right-text-cost">Gosend shipment</p> */}
          {checkbox === true ? (
              ewallet === 1 ? (
                <div className="finish__right-container-fee">
                  <p
                    className="finish__right-text-total"
                    style={{ color: "orange" }}
                  >
                    Total
                  </p>
                  <p className="finish__right-text-total">
                    {gosend + jne + personal + total + walletcount}
                  </p>
                </div>
              ) : bank === 2 ? (
                <div className="finish__right-container-fee">
                  <p
                    className="finish__right-text-total"
                    style={{ color: "orange" }}
                  >
                    Total
                  </p>
                  <p className="finish__right-text-total">
                    {gosend + jne + personal + total + bankcount}
                  </p>
                </div>
              ) : virtual === 3 ? (
                <div className="finish__right-container-fee">
                <p
                  className="finish__right-text-total"
                  style={{ color: "orange" }}
                >
                  Total
                </p>
                <p className="finish__right-text-total">
                  {gosend + jne + personal + total + virtualcount}
                </p>
              </div>
              ) : null 
          ) : (
            ewallet === 1 ? (
                <div className="finish__right-container-fee">
                  <p
                    className="finish__right-text-total"
                    style={{ color: "orange" }}
                  >
                    Total
                  </p>
                  <p className="finish__right-text-total">
                    {gosend + jne + personal + totalnull + walletcount}
                  </p>
                </div>
              ) : bank === 2 ? (
                <div className="finish__right-container-fee">
                  <p
                    className="finish__right-text-total"
                    style={{ color: "orange" }}
                  >
                    Total
                  </p>
                  <p className="finish__right-text-total">
                    {gosend + jne + personal + totalnull + bankcount}
                  </p>
                </div>
              ) : virtual === 3 ? (
                <div className="finish__right-container-fee">
                <p
                  className="finish__right-text-total"
                  style={{ color: "orange" }}
                >
                  Total
                </p>
                <p className="finish__right-text-total">
                  {gosend + jne + personal + totalnull + virtualcount}
                </p>
              </div>
              ) : null 
          )}
          {/* {ewallet === 1 ? (
            <div className="finish__right-container-fee">
              <p
                className="finish__right-text-total"
                style={{ color: "orange" }}
              >
                Total
              </p>
              <p className="finish__right-text-total">
                {gosend + jne + personal + total + walletcount}
              </p>
            </div>
          ) : bank === 2 ? (
            <div className="finish__right-container-fee">
              <p
                className="finish__right-text-total"
                style={{ color: "orange" }}
              >
                Total
              </p>
              <p className="finish__right-text-total">
                {gosend + jne + personal + total + bankcount}
              </p>
            </div>
          ) : virtual === 3 ? (
            <div className="finish__right-container-fee">
            <p
              className="finish__right-text-total"
              style={{ color: "orange" }}
            >
              Total
            </p>
            <p className="finish__right-text-total">
              {gosend + jne + personal + total + virtualcount}
            </p>
          </div>
          ) : null } */}
        </div>
      </div>
    </>
  );
};

export default Finish;
