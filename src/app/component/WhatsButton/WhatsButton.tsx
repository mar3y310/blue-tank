import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const WhatsButton = () => {
  return (
    <div className="fixed bottom-5 left-5 space-y-4 z-50">
    {/* زر الواتساب */}
    <a 
        href="https://wa.me/+201027565956" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
        <FaWhatsapp size={28} className="text-white" />
    </a>

    {/* زر المكالمات */}
    <a 
        href="tel:+201203764405" 
        className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
    >
        <FaPhoneAlt size={20} className="text-white" />
    </a>
</div>
  )
}

export default WhatsButton