import React from "react";
import "../components/step2.css";
import upload_icon from "../assets/upload_icon.png";

const StepTwo = () => {
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

      <form>
        <label htmlFor="fullname">Enter your name</label>
        <br />
        <br />
        <input type="text" id="fullname" name="fullname" />
        <br />

        <label htmlFor="email">Enter your email *</label>
        <br />
        <br />
        <input type="email" id="email" name="email" />

        <label htmlFor="request">Special request?</label>
        <br />
        <br />
        <textarea name="request" rows="10" cols="30">
          Textarea
        </textarea>
      </form>

      <div className="space_up btn_wrap">
        <button className="btn_sec">Back</button>
        <button className="btn_primary">Get My Free Ticket</button>
      </div>
    </div>
  );
};

export default StepTwo;
