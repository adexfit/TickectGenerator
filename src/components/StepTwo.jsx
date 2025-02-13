import React, { useContext, useState, useRef, useEffect } from "react";
import "../components/step2.css";
import upload_icon from "../assets/upload_icon.png";
import { AppContext } from "../context/AppContext";
import loading from "../assets/loading.gif";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const StepTwo = () => {
  const { step, setStep, formData, setFormData } = useContext(AppContext);
  const [isUploading, setIsUploading] = useState(false);
  const userRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const errRef = useRef();

  useEffect(() => {}, [formData.fullname]);

  const handleCheckStepTwo = (e) => {
    e.preventDefault();

    const user_test = USER_REGEX.test(formData.fullname);
    const email_test = EMAIL_REGEX.test(formData.email);

    // if (!user_test) {
    //   console.log("invalid user name");
    // }
    // return;

    // if (!email_test) {
    //   console.log("invalid user email");
    // }
    // return;

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

  const handleUpload = async (e) => {
    setIsUploading(true);
    const file = e.target.files[0];

    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "adeboye");
    data.append("cloud_name", "dhgd4kf9z");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhgd4kf9z/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImageUrl = await res.json();
    console.log(uploadedImageUrl.url);

    setFormData((previousValues) => ({
      ...previousValues,
      image: uploadedImageUrl,
    }));
    setIsUploading(false);
  };

  return (
    <div className="inner_card">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="upload">
        <p className="p_upload">Upload Profile Photo</p>
        <br />

        <label id="image-label" htmlFor="upload_box">
          {" "}
          <div
            className="upload_box"
            style={{ backgroundImage: `url(${formData.image.url})` }}
          >
            <input
              type="file"
              onChange={handleUpload}
              accept="image/x-png, image/jpeg"
              id="upload_box"
              required
            />
            {isUploading ? (
              <img src={loading} alt="" height={60} width={60} />
            ) : (
              ""
            )}
            <img src={upload_icon} alt="" className="uploadedImg" />
            <p>Drag & drop or click to upload</p>
          </div>{" "}
        </label>
        <div className="rectangle"></div>
      </div>

      <hr />

      <form className="from2">
        <div className="form-control">
          <label htmlFor="fullname">Enter your name</label>
          <br />
          <br />
          <input
            type="text"
            id="fullname"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
            required
            aria-invalid={validName ? "false" : "true"}
            // aria-describedby="fullnameNote"
          />
          <small>full name error message</small>
          {/* <p
          id="fullnameNote"
          className={!validName ? "instructions" : "offscreen"}
        >
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p> */}
        </div>

        <br />

        <div class="form-control">
          <label htmlFor="email">Enter your email *</label>
          <br />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            // aria-describedby="emailnote"
          />
          <small>mail error message</small>
        </div>

        <div className="form-control">
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
          <small>request error message</small>
        </div>
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
