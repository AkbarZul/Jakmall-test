import React, { useState, useEffect } from "react";
import { Breadcrumb, Back } from "../../components";
import { BiArrowBack } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";

import "./delivery.css";
import { Link, useHistory } from "react-router-dom";

const Delivery = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState(() => {
    const local = localStorage.getItem("email");
    const init = JSON.parse(local);
    return init || "";
  });
  const [number, setNumber] = useState(() => {
    const local = localStorage.getItem("number");
    const init = JSON.parse(local);
    return init || "";
  });
  const [err, setErr] = useState(false);
  const [errNumber, setErrNumber] = useState(false);
  const dropshiping = 5900;
  const dropshipingnol = 0;
  const cost = 500000;
  const history = useHistory();
  const handleSubmit = () => {
    const emailFormat =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!email.match(emailFormat)) {
      setErr(true);
    } else {
      history.push("/payment");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
    const number = e.target.value;
    if (number.length >= 20 || number.length <= 6) {
      setErrNumber(true);
    }
  };

  useEffect(() => {
    // storing input email
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(number));
  }, [number]);
  console.log("ini check", checkbox);
  console.log("err", err);
  console.log("errn", errNumber);
  return (
    <>
      <Breadcrumb />
      <Back title="Back to cart" />
      <div className="delivery">
        <div className="delivery__left">
          <div className="delivery__left-up">
            <p className="delivery__left-text-up">Delivery details</p>
            <div className="delivery__left-container">
              <input
                type="checkbox"
                onChange={() => {
                  setCheckbox(!checkbox);
                }}
              />
              <p className="delivery__left-text-container">
                send as dropshipper
              </p>
            </div>
          </div>
          <div className="delivery__left-container-down">
            <div className="delivery__left-down">
              {/* <form onChange={handleChange}> */}
              {err !== false ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    placeholder="Email"
                    value={email}
                    className="delivery__left-input-downwrong"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <VscClose style={{ marginLeft: "-30px" }} />
                </div>
              ) : (
                <input
                  placeholder="Email"
                  value={email}
                  className="delivery__left-input-down"
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              {/* </form> */}
              {errNumber !== false ? (
                 <div
                 style={{
                   display: "flex",
                   flexDirection: "row",
                   alignItems: "center",
                 }}
               >
                 <input
                   placeholder="Phone Number"
                   className="delivery__left-input-downwrong"
                   value={number}
                   onChange={handleChange}
                 />
                 <VscClose style={{ marginLeft: "-30px" }} />
               </div>
              ) : (
                <input
                  placeholder="Phone Number"
                  className="delivery__left-input-down"
                  value={number}
                  onChange={handleChange}
                />
              )}
              <input
                placeholder="Delivery Address"
                className="delivery__left-input-down"
                style={{ height: "70px" }}
                size="120"
                onChange={(e) => setAddress(e.target.value)}
              />
              <p>{120 - address.length} / 120</p>
            </div>
            {checkbox === true ? (
              <div className="delivery__left-container-inputdown">
                <input
                  placeholder="Dropshipper name"
                  className="delivery__left-input-down"
                  style={{ width: "300px" }}
                />
                <input
                  placeholder="Dropshipper phone number"
                  className="delivery__left-input-down"
                  style={{ width: "300px" }}
                />
              </div>
            ) : (
              <div className="delivery__left-container-inputdown">
                <input
                  readOnly
                  className="delivery__left-input-down"
                  style={{ width: "300px" }}
                />
                <input
                  readOnly
                  className="delivery__left-input-down"
                  style={{ width: "300px" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="delivery__right">
          <p className="delivery__right-text-up">Summary</p>
          <p className="delivery__right-subtext-up">10 items purchased</p>
          <div className="delivery__right-container-cost">
            <p className="delivery__right-text-cost">Cost of goods</p>
            <p
              className="delivery__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              {cost}
            </p>
          </div>
          <div className="delivery__right-container-fee">
            <p className="delivery__right-text-cost">Dropshipping Fee</p>
            {checkbox === true ? (
              <p
                className="delivery__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshiping}
              </p>
            ) : (
              <p
                className="delivery__right-text-cost"
                style={{ fontWeight: "bold" }}
              >
                {dropshipingnol}
              </p>
            )}
          </div>
          <div className="delivery__right-container-fee">
            <p
              className="delivery__right-text-total"
              style={{ color: "orange" }}
            >
              Total
            </p>
            {checkbox === true ? (
              <p className="delivery__right-text-total">{cost + dropshiping}</p>
            ) : (
              <p className="delivery__right-text-total">
                {cost + dropshipingnol}
              </p>
            )}
          </div>
          <div className="delivery__right-container-button">
            <button className="delivery__right-button" onClick={handleSubmit}>
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
