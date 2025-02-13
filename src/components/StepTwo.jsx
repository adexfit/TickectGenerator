import React, { useContext, useState, useRef, useEffect } from "react";
import "../components/step2.css";
import upload_icon from "../assets/upload_icon.png";
import { AppContext } from "../context/AppContext";
import loading from "../assets/loading.gif";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const StepTwo = () => {
  const { step, setStep, formData, setFormData } = useContext(AppContext);
  const [isUploading, setIsUploading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [userNameErr, setuserNameErr] = useState("");
  const [uploadErr, setUploadErr] = useState("");
  const [fixError, setFixError] = useState("");
  const userNameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    if (formData.image.length < 2) {
      setUploadErr("Please upload a picture");
    } else {
      setUploadErr("");
    }
  }, [formData]);

  const handleCheckStepTwo = (e) => {
    e.preventDefault();

    if (formData.image.url.length < 2) {
      setUploadErr("Please upload a picture");
    } else {
      setUploadErr("");
    }
    // const user_test = USER_REGEX.test(formData.fullname);

    if (formData.fullname.length < 4) {
      setuserNameErr("Please provide a valid user name");
    } else {
      setuserNameErr("");
    }

    const email_test = EMAIL_REGEX.test(formData.email.trim());
    if (!email_test) {
      setEmailErr("Please provide a valid email");
    } else {
      setEmailErr("");
    }

    if (userNameErr != "" && emailErr != "") {
      userNameRef.current.focus();
    } else if (userNameErr != "") {
      userNameRef.current.focus();
    } else if (emailErr != "") {
      emailRef.current.focus();
    }

    console.log(formData);
    console.log(formData.image.url.length);
    if (
      email_test &&
      formData.fullname.length > 3 &&
      formData.image.url.length > 5
    ) {
      setStep(3);
      setFixError("");
    } else {
      setTimeout(
        setFixError(
          "Please provide valid inputs to all fields above and try again"
        ),
        5000
      );
    }
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

    if (event.target.value.length < 4) {
      setuserNameErr("Please provide a valid user name");
    } else {
      setuserNameErr("");
    }
    const email_test = EMAIL_REGEX.test(formData.email.trim());
    if (!email_test) {
      setEmailErr("Please provide a valid email");
    } else {
      setEmailErr("");
    }
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
    // console.log(uploadedImageUrl.url);

    setFormData((previousValues) => ({
      ...previousValues,
      image: uploadedImageUrl,
    }));
    setIsUploading(false);
  };

  return (
    <div className="inner_card">
      <div className="upload">
        <p className="p_upload">Upload Profile Photo*</p>
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
      <p id="uploadError">
        <small aria-live="assertive">{uploadErr}</small>
      </p>

      <hr />

      <form className="from2">
        <div className="form-control">
          <label htmlFor="fullname">Enter your name *</label>
          <br />
          <br />
          <input
            type="text"
            id="fullname"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
            required
            aria-invalid={userNameErr == "" ? "true" : "false"}
            aria-describedby="fullnameNote"
            ref={userNameRef}
          />
          <small aria-live="assertive">{userNameErr}</small>
        </div>

        <br />

        <div className="form-control">
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
            ref={emailRef}
          />{" "}
          <br />
          <small aria-live="assertive">{emailErr}</small>
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
      <div className="error">
        <small>{fixError}</small>
      </div>
    </div>
  );
};

export default StepTwo;
