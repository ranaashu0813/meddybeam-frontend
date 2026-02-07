import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          At <strong>CPAP Store.co.in</strong>, we respect your privacy and are committed
          to protecting your personal information.
        </p>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> Name, email, phone number, address, and payment details.</li>
            <li><strong>Health-related Information:</strong> Only if voluntarily shared for CPAP/BiPAP usage.</li>
            <li><strong>Technical Information:</strong> IP address, browser, device type, cookies.</li>
            <li><strong>Order Information:</strong> Purchase history and communication records.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Process and deliver orders.</li>
            <li>Provide customer support.</li>
            <li>Improve website and product offerings.</li>
            <li>Send updates and promotions (opt-out available).</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Sharing of Information</h2>
          <p>We do not sell or rent your personal data. Information may be shared with:</p>
          <ul>
            <li>Payment processors and courier partners.</li>
            <li>Legal authorities when required.</li>
            <li>Business transfers (merger or acquisition).</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Cookies & Tracking</h2>
          <p>
            Cookies help us enhance user experience, analyze traffic,
            and personalize content. You can manage cookies in your browser settings.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We use appropriate security measures to protect your data.
            However, no online platform can guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Rights</h2>
          <ul>
            <li>Access, update, or delete your information.</li>
            <li>Withdraw marketing consent.</li>
            <li>Request a copy of stored data.</li>
          </ul>
          <p className="privacy-contact">
            Contact us at <a href="mailto:info@cpapstore.co.in">info@cpapstore.co.in</a>
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Data Retention</h2>
          <p>
            We retain data only as long as necessary or as required by law.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Third-Party Links</h2>
          <p>
            We are not responsible for the privacy practices of third-party websites.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under 18.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Policy Updates</h2>
          <p>
            This policy may be updated periodically. Changes will be posted on this page.
          </p>
        </section>

        <section className="privacy-section highlight">
          <h2>11. Contact Us</h2>
          <p><strong>Website:</strong> medbeam.co.in</p>
          <p><strong>Email:</strong> medbeam@gmail.com</p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
