import React from "react";
import "./Form.css";
import { printerest } from "../../assests/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faCalendarDays,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const formDetails = [
    {
      imageName: faUser,
      placeholderText: "Name",
    },
    {
      imageName: faPhone,
      placeholderText: "Contact Number",
    },
    {
      imageName: faEnvelope,
      placeholderText: "Mail id",
    },
    {
      imageName: faCalendarDays,
      placeholderText: "Wedding date",
    },
    {
      imageName: faStopwatch,
      placeholderText: "No. of Days",
    },
  ];

  return (
    <div className="form-bg  pt-5 ">
      <div className="printerest-image-container">
        <img className="printerest-pic" src={printerest} alt="printerest" />
      </div>
      <div className="vertical-line"></div>
      <div className="user-form-container">
        <div className="form-heading-container">
          <h1 className="form-heading">Get a quotation from FliqaIndia</h1>
          <p className="form-heading-para">
            Fill the details below and get an call back within next 24 working
            hours.
          </p>
        </div>
        <form className="form-container">
          {formDetails.map((details) => (
            <div className="user-inputs-container ">
              <div key={details.placeholderText}>
                <FontAwesomeIcon
                  icon={details.imageName}
                  style={{ fontSize: "35px" }}
                />
              </div>
              <input
                type="text"
                className="form-control input-element"
                placeholder={details.placeholderText}
              ></input>
            </div>
          ))}
          <select
            className="form-select select-input-element"
            aria-label="Default select example"
          >
            <option selected>Package you are looking</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button type="button" className="submit-btn">
            Submit
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Form;
