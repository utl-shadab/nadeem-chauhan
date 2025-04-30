import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello, I'm interested in your legal services and would like more information."
}: WhatsAppButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Format the phone number to ensure it's in international format without any special characters
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Wait a bit before showing the WhatsApp button
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    tap: { scale: 0.9 }
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="popup"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={popupVariants}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-4 w-72"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <FaWhatsapp className="text-green-500 text-xl mr-2" />
                    <h3 className="font-bold text-gray-800">Chat with us</h3>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Have questions? Chat with our team on WhatsApp for quick assistance.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center justify-center py-2 rounded-md transition-colors duration-200"
                >
                  <FaWhatsapp className="mr-2" />
                  Start Chat
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial="hidden"
            animate="visible"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </motion.button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;