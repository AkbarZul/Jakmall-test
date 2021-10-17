import React, { useState } from "react";
import { Breadcrumb, Back } from "../../components";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";

import "./delivery.css";
import { Link } from "react-router-dom";

const Delivery = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [address, setAddress] = useState("");
  console.log("ini check", checkbox);
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
              <input
                placeholder="Email"
                className="delivery__left-input-down"
              />
              <input
                placeholder="Phone Number"
                className="delivery__left-input-down"
              />
              <input
                placeholder="Delivery Address"
                className="delivery__left-input-down"
                style={{ height: "70px" }}
                onChange={(e) => setAddress(e.target.value)}
              />
              <p>{address.length}</p>
              <p>{address}</p>
            </div>
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
              500,000
            </p>
          </div>
          <div className="delivery__right-container-fee">
            <p className="delivery__right-text-cost">Dropshipping Fee</p>
            <p
              className="delivery__right-text-cost"
              style={{ fontWeight: "bold" }}
            >
              5,900
            </p>
          </div>
          <div className="delivery__right-container-fee">
            <p
              className="delivery__right-text-total"
              style={{ color: "orange" }}
            >
              Total
            </p>
            <p className="delivery__right-text-total">505,900</p>
          </div>
          <div className="delivery__right-container-button">
            <Link to="/payment">
              <button className="delivery__right-button">
                Continue to payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
