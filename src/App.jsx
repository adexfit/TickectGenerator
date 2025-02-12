import { useEffect, useState, useContext } from "react";
import "./App.css";
// import btn_ico from "../src/assets/btn_ico.png";
import NavBar from "./components/NavBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { AppContext } from "././context/AppContext";

// import { app } from '../firebase';
// import { CircularProgressbar } from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';

function App() {
  // const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("33%");
  const { step, setStep, formData, setFormData } = useContext(AppContext);

  // if (!formData.username || !formData.email || !formData.password) {
  //   return setErrorMessage('Please fill out all fields.');
  // }

  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (step == 1) {
      setTitle("Ticket Selection");
      setProgress("33%");
    } else if (step == 2) {
      setTitle("Attendee Details");
      setProgress("66%");
    } else if (step == 3) {
      setTitle("Ready");
      setProgress("100%");
    }
  }, [step]);

  return (
    <div className="wrapper">
      <NavBar />

      <div className="main_card">
        <div className="card_title">
          <h2>{title}</h2>
          <p>Step {step}/3</p>
        </div>
        <div className="progress_bar">
          <div className="progress_sofar" style={{ width: progress }}></div>
        </div>

        {step === 1 ? (
          <StepOne />
        ) : step === 2 ? (
          <StepTwo />
        ) : step === 3 ? (
          <StepThree />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
