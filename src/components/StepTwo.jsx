import React, { useContext, useState } from "react";
import "../components/step2.css";
import upload_icon from "../assets/upload_icon.png";
import { AppContext } from "../context/AppContext";

const StepTwo = () => {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [request, setRequest] = useState("");
  const { step, setStep, formData, setFormData } = useContext(AppContext);

  // console.log(`Email:${email}, Fullname:${fullname}, Request:${request}`);

  const handleCheckStepTwo = (e) => {
    e.preventDefault();
    // setFormData((prev) => ({
    //   ...prev,
    //   email,
    //   fullname,
    //   request,
    // }));
    console.log(formData);
    setStep(3);
  };
  const handleBackToOne = () => {
    // e.target.prevenDefault();
    setStep(1);
  };

  const handleChange = (event) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="inner_card">
      <div className="upload">
        <p className="p_upload">Upload Profile Photo</p>
        <br />

        <div className="upload_box">
          <img src={upload_icon} alt="" />

          <p>Drag & drop or click to upload</p>
        </div>
        <div className="rectangle"></div>
      </div>

      <hr />

      <form className="from2">
        <label htmlFor="fullname">Enter your name</label>
        <br />
        <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          onChange={handleChange}
          value={formData.fullname}
        />
        <br />

        <label htmlFor="email">Enter your email *</label>
        <br />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="request">Special request?</label>
        <br />
        <br />
        <textarea
          name="request"
          rows="10"
          cols="30"
          onChange={handleChange}
          value={formData.request}
        ></textarea>
      </form>

      <div className="space_up btn_wrap">
        <button className="btn_sec" onClick={handleBackToOne}>
          Back
        </button>
        <button className="btn_primary" onClick={handleCheckStepTwo}>
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
