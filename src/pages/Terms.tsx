import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">

        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-intro">
          Welcome to <strong>CPAPStore.co.in</strong>. These Terms & Conditions
          govern your use of our website and services. By accessing or purchasing
          from our site, you agree to these Terms.
        </p>

        <section className="terms-section">
          <h2>1. General Information</h2>
          <ul>
            <li>CPAPStore.co.in is an online supplier of CPAP, BiPAP, Oxygen Concentrators, and related medical equipment.</li>
            <li>You must be at least 18 years old to use this website.</li>
            <li>These Terms apply to all users, customers, and visitors.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>2. Product Information</h2>
          <ul>
            <li>Product details are for informational purposes only.</li>
            <li>We strive for accuracy but do not guarantee error-free content.</li>
            <li>Some products may require a valid medical prescription.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Orders & Payments</h2>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>Prices are listed in INR (₹) unless stated otherwise.</li>
            <li>Full payment is required before order confirmation.</li>
            <li>Payments are processed via secure third-party gateways.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Shipping & Delivery</h2>
          <ul>
            <li>We deliver across India (and internationally where specified).</li>
            <li>Delivery timelines are estimates and may vary.</li>
            <li>Risk of goods transfers to the customer upon delivery.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Returns, Refunds & Cancellations</h2>
          <ul>
            <li>Governed by our Refund & Cancellation Policy.</li>
            <li>Opened or used medical products are generally non-returnable.</li>
            <li>Eligible refunds are processed within 7 working days.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>6. Use of Website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for illegal or fraudulent activities.</li>
            <li>Copy or distribute content without permission.</li>
            <li>Disrupt website security or performance.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>7. Intellectual Property</h2>
          <p>
            All content on CPAPStore.co.in is owned or licensed by us.
            Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <ul>
            <li>Products must be used as per medical advice.</li>
            <li>We are not responsible for misuse or self-medication.</li>
            <li>Liability is limited to the product purchase price.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>9. Warranties</h2>
          <ul>
            <li>Products carry manufacturer warranties only.</li>
            <li>Warranty claims must follow manufacturer policies.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>10. Privacy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India.
            Courts of <strong>New Delhi</strong> shall have exclusive jurisdiction.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Changes are effective once posted.
          </p>
        </section>

        <section className="terms-section highlight">
          <h2>13. Contact Information</h2>
          <p><strong>Website:</strong> medbeam.co.in</p>
          <p><strong>Email:</strong> medbeam@gmail.com</p>
        </section>

      </div>
    </div>
  );
};

export default Terms;
