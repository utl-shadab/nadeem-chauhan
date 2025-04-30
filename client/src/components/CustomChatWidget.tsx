import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineInfo, MdBusiness, MdOutlineFamilyRestroom, MdOutlineGavel, 
  MdOutlineDescription, MdHome, MdOutlineFlight, MdOutlineHealing, 
  MdOutlineBusinessCenter, MdOutlineCopyright } from 'react-icons/md';
import { findSuggestionsByKeywords, findSuggestionsByCategory, getAllCategories, defaultResponse, Suggestion } from '../data/chatSuggestions';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface CustomChatWidgetProps {
  phoneNumber: string;
  companyName?: string;
}

const initialMessages = [
  {
    text: "Hello! How can we help you today?",
    isUser: false,
    timestamp: new Date()
  },
  {
    text: "Our legal team is here to assist you with any questions about our services.",
    isUser: false,
    timestamp: new Date(Date.now() + 1000)
  }
];

const responseMessages = [
  "Thank you for your message. One of our legal consultants will get back to you shortly.",
  "Do you have any specific legal matter you'd like to discuss?",
  "Would you like to schedule a consultation with one of our experts?",
  "We specialize in several practice areas. Could you specify which area you need assistance with?",
  "Thank you for your interest. We'll contact you on your WhatsApp number soon."
];

const CustomChatWidget = ({ 
  phoneNumber, 
  companyName = "Nadeem Chauhan Consultancy"
}: CustomChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showCategories, setShowCategories] = useState(true);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Format the phone number to ensure it's in international format without any special characters
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  useEffect(() => {
    // Wait a bit before showing the chat button
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update suggestions when user types
  useEffect(() => {
    if (newMessage.trim().length > 2) {
      // Search for matching suggestions
      const matchedSuggestions = findSuggestionsByKeywords(newMessage);
      setSuggestions(matchedSuggestions);
      setShowCategories(false);
    } else {
      // Clear suggestions if input is too short
      setSuggestions([]);
      setShowCategories(true);
    }
  }, [newMessage]);

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: Suggestion) => {
    // Add the question as a user message
    const userMessage: Message = {
      text: suggestion.text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    setSelectedSuggestion(suggestion);
    
    // Generate response based on the selected suggestion
    setTimeout(() => {
      let responseText: string;
      
      // Format the response (could be string or array)
      if (Array.isArray(suggestion.response)) {
        responseText = suggestion.response.join('\n\n');
      } else {
        responseText = suggestion.response;
      }
      
      const botResponse: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Reset suggestions and show categories again
      setSuggestions([]);
      setShowCategories(true);
    }, 1000 + Math.random() * 500);
  };

  // Handle category selection
  const handleSelectCategory = (category: string) => {
    // Get suggestions for this category
    const categorySuggestions = findSuggestionsByCategory(category);
    setSuggestions(categorySuggestions);
    setShowCategories(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Try to find matching suggestions
    const matchedSuggestions = findSuggestionsByKeywords(userMessage.text);
    
    // Simulate response after a delay
    setTimeout(() => {
      let responseText: string;
      
      if (matchedSuggestions.length > 0) {
        // Use the best matching suggestion's response
        const bestMatch = matchedSuggestions[0];
        
        if (Array.isArray(bestMatch.response)) {
          responseText = bestMatch.response.join('\n\n');
        } else {
          responseText = bestMatch.response;
        }
      } else {
        // Use default responses if no good match found
        responseText = defaultResponse.join('\n\n');
      }
      
      const botResponse: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Show categories again after responding
      setShowCategories(true);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleActualWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(messages.filter(m => m.isUser).map(m => m.text).join('\n'))}`;
    window.open(whatsappUrl, '_blank');
  };

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

  const chatVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
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

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Get icon component for category
  const getCategoryIcon = (iconName: string) => {
    switch(iconName) {
      case 'info':
        return <MdOutlineInfo className="text-xl" />;
      case 'business':
        return <MdBusiness className="text-xl" />;
      case 'family_restroom':
        return <MdOutlineFamilyRestroom className="text-xl" />;
      case 'gavel':
        return <MdOutlineGavel className="text-xl" />;
      case 'description':
        return <MdOutlineDescription className="text-xl" />;
      case 'home':
        return <MdHome className="text-xl" />;
      case 'flight':
        return <MdOutlineFlight className="text-xl" />;
      case 'healing':
        return <MdOutlineHealing className="text-xl" />;
      case 'business_center':
        return <MdOutlineBusinessCenter className="text-xl" />;
      case 'copyright':
        return <MdOutlineCopyright className="text-xl" />;
      default:
        return <MdOutlineInfo className="text-xl" />;
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="chat"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={chatVariants}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg w-80 sm:w-96 h-[500px] max-h-[70vh] flex flex-col overflow-hidden"
              >
                {/* Chat header */}
                <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <FaWhatsapp className="text-2xl mr-2" />
                    <div>
                      <h3 className="font-bold">{companyName}</h3>
                      <p className="text-xs opacity-80">Usually replies within an hour</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-green-700 p-1 rounded"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                {/* Chat messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate="visible"
                      variants={messageVariants}
                      className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser 
                            ? 'bg-green-100 text-gray-800 rounded-tr-none' 
                            : 'bg-white shadow-sm text-gray-800 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-right text-xs text-gray-500 mt-1">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] rounded-tl-none">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input area */}
                <div className="p-3 border-t flex items-center">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none max-h-20"
                    rows={1}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
                    className={`ml-2 p-2 rounded-full ${
                      newMessage.trim() === '' 
                        ? 'bg-gray-200 text-gray-400' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <FaPaperPlane />
                  </button>
                </div>
                
                {/* Suggestions area */}
                <div className="max-h-36 overflow-y-auto border-t bg-gray-50">
                  {/* Show categories or suggestions based on state */}
                  {showCategories ? (
                    <div className="p-2">
                      <p className="text-xs text-gray-500 mb-2 font-medium">Frequently Asked Questions:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {getAllCategories().map((cat, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectCategory(cat.category)}
                            className="text-left p-2 rounded hover:bg-gray-100 flex items-center text-sm transition-colors"
                          >
                            <span className="text-gray-700 mr-2">
                              {getCategoryIcon(cat.icon)}
                            </span>
                            <span className="truncate">{cat.category}</span>
                            <IoIosArrowForward className="ml-auto text-gray-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-2">
                      {suggestions.length > 0 && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-xs text-gray-500 font-medium">Suggested Questions:</p>
                            <button 
                              onClick={() => setShowCategories(true)}
                              className="text-xs text-green-600 hover:text-green-700"
                            >
                              Back to Categories
                            </button>
                          </div>
                          {suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSelectSuggestion(suggestion)}
                              className="w-full text-left p-2 rounded hover:bg-gray-100 mb-1 text-sm text-gray-700 transition-colors"
                            >
                              {suggestion.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Transfer to WhatsApp button */}
                <div className="p-3 bg-gray-50 border-t text-center">
                  <button
                    onClick={handleActualWhatsAppRedirect}
                    className="text-sm text-green-600 hover:text-green-800 flex items-center justify-center w-full"
                  >
                    <FaWhatsapp className="mr-1" /> Continue in WhatsApp
                  </button>
                </div>
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
            aria-label="Chat with us"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaWhatsapp className="text-2xl" />}
          </motion.button>
        </div>
      )}
    </>
  );
};

export default CustomChatWidget;