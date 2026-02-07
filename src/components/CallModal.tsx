import "./CallModal.css";

interface Props {
  onClose: () => void;
  productName: string;
  description: string;
}

const CallModal = ({ onClose, productName, description }: Props) => {
  const phone = "919999999999";
  const whatsapp = `https://wa.me/${phone}?text=Hi, I want to know more about ${productName}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{productName}</h2>
        <p className="modal-desc">{description}</p>

        <div className="modal-actions">
          <a href={`tel:${phone}`} className="call-btn">📞 Call Now</a>
          <a href={whatsapp} target="_blank" className="whatsapp-btn">
            💬 WhatsApp
          </a>
        </div>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CallModal;
