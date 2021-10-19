import React, { useState, useEffect } from "react";
import { Breadcrumb, Back } from "../../components";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./delivery.css";
import { Link, useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email(),
  number: yup.number().positive().integer().max(20),
});

const Delivery = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useFormPersist(
    "form",
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );
  const dropshiping = 5900;
  const dropshipingnol = 0;
  const cost = 500000;
  const total = cost + dropshiping;
  const totalnull = cost + dropshipingnol;
  useEffect(() => {
    // storing input email
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("totalnull", JSON.stringify(totalnull));
    localStorage.setItem("cost", JSON.stringify(cost))
    localStorage.setItem("dropshiping", JSON.stringify(dropshiping))
    localStorage.setItem("dropshipingnol", JSON.stringify(dropshipingnol))
    localStorage.setItem("checkbox", JSON.stringify(checkbox))
  }, [total, totalnull, cost, dropshipingnol, checkbox]);
  const onSubmit = (data, e) => console.log(data, e);
  return (
    <>
      <Breadcrumb />
      <Back title="Back to cart" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {errors.email ? (
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    className="delivery__left-input-downwrong"
                    {...register("email")}
                  />
                ) : (
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    className="delivery__left-input-down"
                    {...register("email")}
                  />
                )}

                {errors.number ? (
                  <input
                    placeholder="Phone number"
                    name="number"
                    className="delivery__left-input-downwrong"
                    {...register("number")}
                  />
                ) : (
                  <input
                    placeholder="Phone number"
                    name="number"
                    className="delivery__left-input-down"
                    {...register("number")}
                  />
                )}
                <input
                  placeholder="Delivery Address"
                  className="delivery__left-input-down"
                  style={{ height: "70px" }}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <p>{120 - address.length} / 120</p>
              </div>
              {checkbox === true ? (
                <div className="delivery__left-container-inputdown">
                  <input
                    placeholder="Dropshipper name"
                    className="delivery__left-input-down"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Dropshipper phone number"
                    className="delivery__left-input-down"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              ) : (
                <div className="delivery__left-container-inputdown">
                  <input
                    readOnly
                    className="delivery__left-input-down"
                  />
                  <input
                    readOnly
                    className="delivery__left-input-down"
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
                <p className="delivery__right-text-total">{total}</p>
              ) : (
                <p className="delivery__right-text-total">{totalnull}</p>
              )}
            </div>
            <div className="delivery__right-container-button">
              <Link to={{ pathname: "/payment", total, totalnull }}>
                <button className="delivery__right-button">
                  Continue to payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Delivery;
