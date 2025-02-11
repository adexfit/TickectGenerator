import React from "react";

const StepOne = () => {
  return (
    <div className="inner_card">
      <div className="address_card">
        <h1>Techember Fest "25</h1>
        <p>
          Join us for an unforgettable experience at <br />
          [Event name]! Secure your space now <br />
          📍[lEvent location] <span className="seperator">| |</span> March 15,
          2025<span className="seperator">|</span>7:00 PM
        </p>
      </div>

      <hr />

      <section>
        <p>Select Ticket Type:</p>
        <div className="ticket_type_card">
          <div className="access_card">
            <div className="access_wrap">
              <p>REGULAR ACCESS</p>
              <span>25 left</span>
            </div>
            <span className="access_price">Free</span>
          </div>
          <div className="access_card">
            <div className="access_wrap">
              <p>VIP ACCESS</p>
              <span>25 left</span>
            </div>
            <span className="access_price">$50</span>
          </div>
          <div className="access_card">
            <div className="access_wrap">
              <p>VVIP ACCESS</p>
              <span>25 left</span>
            </div>
            <span className="access_price">$150</span>
          </div>
        </div>

        <div className="space_up">
          <label htmlFor="regular">Number of Tickets:</label>
          <br />
          <br />
          <form>
            <select id="country" name="country">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>

        <div className="space_up btn_wrap">
          <button className="btn_sec">Next</button>
          <button className="btn_primary">Cancel</button>
        </div>
      </section>
    </div>
  );
};

export default StepOne;
