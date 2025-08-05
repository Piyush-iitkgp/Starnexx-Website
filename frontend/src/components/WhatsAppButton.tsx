import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/6XC52TVE44RBO1" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
