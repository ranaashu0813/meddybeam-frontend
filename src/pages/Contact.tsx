import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Title Section */}
        <div className="contact-header">
          <h1>Medical Equipments Made Affordable</h1>
          <p>Contact here</p>
        </div>

        {/* Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter your city" />
          </div>

          <div className="form-group">
            <label>Device</label>
            <select>
              <option value="">Select device</option>
              <option value="bipap">BiPAP Machine</option>
              <option value="cpap">CPAP Machine</option>
              <option value="oxygen">Oxygen Concentrator</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
