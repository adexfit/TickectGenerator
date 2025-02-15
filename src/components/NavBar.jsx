import React, { useContext } from "react";
import logoticket from "../assets/logoticket.png";
import btn_ico from "../assets/btn_ico.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const { step, setStep, formData, setFormData } = useContext(AppContext);
  return (
    <div className="nav">
      <span className="logodiv">
        <img src={logoticket} alt="logo" />
      </span>
      <span className="navItem">
        <Link>Events</Link>
        <Link>My Tickets</Link>
        <Link>About Project</Link>
      </span>
      <span className="nav_btn_wrapper" onClick={() => setStep(1)}>
        <button className="btn_nav">
          MY TICKETS
          <img src={btn_ico} alt="-" />
        </button>
      </span>
    </div>
  );
};

export default NavBar;
