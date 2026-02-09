import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const PHONE_NUMBER = "8929283292";
const WHATSAPP_NUMBER = "8929283292";
const MESSAGE = "Hello, I want to know more about your medical devices.";

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* CALL ICON */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 transition"
        aria-label="Call now"
      >
        <FaPhoneAlt className="text-white text-2xl" />
      </a>

      {/* WHATSAPP ICON WITH HOVER */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        {/* ICON */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg">
          <FaWhatsapp className="text-white text-3xl" />
        </div>

        {/* EXPANDING TEXT */}
        <div
          className="
            hidden sm:flex items-center
            bg-green-500 text-white
            px-4 py-3 rounded-full shadow-lg
            max-w-0 overflow-hidden opacity-0
            transition-all duration-300 ease-in-out
            group-hover:max-w-[260px]
            group-hover:opacity-100
          "
        >
          <span className="whitespace-nowrap text-sm font-semibold">
            Chat with us on WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
