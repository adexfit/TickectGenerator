import React from "react";

const StepOne = () => {
  return (
    <div className="inner_card">
      <div className="address_card">
        <h1>Techember Fest "25</h1>
        <p>
          Join us for an unforgettable experience at <br />
          [Event name]! Secure your space now <br />
          <br />
          📍[lEvent location] <span className="seperator">| |</span> March 15,
          2025<span className="seperator">|</span>7:00 PM
        </p>
      </div>
      <br />
      <hr />

      <section>
        <p>Select Ticket Type:</p>
        <div className="ticket_type_card">
          <div className="access_card">
            <div className="access_wrap">
              <p className="access_price">Free</p>
              <p className="ticket_type">REGULAR ACCESS</p>
              <span className="ticket_type">20/52</span>
            </div>
          </div>
          <div className="access_card">
            <div className="access_wrap">
              <p className="access_price">$50</p>
              <p className="ticket_type">VIP ACCESS</p>
              <span className="ticket_type"> 20/52</span>
            </div>
          </div>
          <div className="access_card">
            <div className="access_wrap">
              <p className="access_price">$150</p>
              <p className="ticket_type">VVIP ACCESS</p>
              <span className="ticket_type">20/52</span>
            </div>
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
