import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseLeave: () => void;
}

const MegaMenu = ({ isOpen, onMouseLeave }: MegaMenuProps) => {
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed left-0 right-0 top-[4.5rem] mx-auto mt-2 sm:mt-4 w-screen max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden z-50"
          style={{ maxWidth: "95%", margin: "0 auto" }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          onMouseLeave={onMouseLeave}
        >
          {/* Responsive layout - stacked on mobile, flex on larger screens */}
          <div className="flex flex-col md:flex-row">
            {/* Left column with categories */}
            <div className="w-full md:w-1/3 bg-slate-50 p-4 md:p-6">
              <motion.div variants={itemVariants} className="mb-6 md:mb-8 relative p-3 md:p-4 rounded-md hover:bg-slate-100 transition-colors duration-300">
                <Link href="/services/corporate-law" className="block group">
                  <h3 className="text-primary font-medium text-base md:text-lg mb-1 group-hover:text-secondary transition-colors">Business Client</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Empowering flexibility and efficiency</p>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons text-primary text-sm md:text-base">arrow_forward</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6 md:mb-8 relative p-3 md:p-4 rounded-md hover:bg-slate-100 transition-colors duration-300">
                <Link href="/services/family-law" className="block group">
                  <h3 className="text-primary font-medium text-base md:text-lg mb-1 group-hover:text-secondary transition-colors">Individual Client</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Built for agility and collaboration</p>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons text-primary text-sm md:text-base">arrow_forward</span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative p-3 md:p-4 rounded-md hover:bg-slate-100 transition-colors duration-300">
                <Link href="/services" className="block group">
                  <h3 className="text-primary font-medium text-base md:text-lg mb-1 group-hover:text-secondary transition-colors">Legal Expertise</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Designed for the enterprise</p>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons text-primary text-sm md:text-base">arrow_forward</span>
                  </div>
                </Link>
              </motion.div>
            </div>
            
            {/* Center column with menu items and icons */}
            <div className="w-full md:w-1/3 p-4 md:p-6 border-t md:border-t-0 md:border-r border-gray-100">
              <motion.ul className="space-y-4 md:space-y-6" variants={menuVariants}>
                <motion.li variants={itemVariants}>
                  <Link href="/services/corporate-law" className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-50 p-1 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-indigo-100 transition-colors">
                      <span className="material-icons text-indigo-500 text-sm md:text-base">view_agenda</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">Headless Content Management</h4>
                    </div>
                  </Link>
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <Link href="/services/litigation" className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-50 p-1 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-indigo-100 transition-colors">
                      <span className="material-icons text-indigo-500 text-sm md:text-base">view_list</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">Structured Content</h4>
                    </div>
                  </Link>
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <Link href="/services/intellectual-property" className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-50 p-1 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-indigo-100 transition-colors">
                      <span className="material-icons text-indigo-500 text-sm md:text-base">check_circle</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">Workflows & Approval</h4>
                    </div>
                  </Link>
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <Link href="/services/family-law" className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-50 p-1 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-indigo-100 transition-colors">
                      <span className="material-icons text-indigo-500 text-sm md:text-base">device_hub</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">Interoperability & Extensibility</h4>
                    </div>
                  </Link>
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <Link href="/services/estate-planning" className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-50 p-1 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-indigo-100 transition-colors">
                      <span className="material-icons text-indigo-500 text-sm md:text-base">code</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">API Playground</h4>
                    </div>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
            
            {/* Right column with content */}
            <div className="w-full md:w-1/3 p-4 md:p-6 border-t md:border-t-0">
              <motion.div variants={itemVariants} className="h-full relative pb-8 md:pb-0">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">Customized workflows for content governance</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-4">
                  Today's digital campaigns are complex and require coordination of multiple touchpoints along the customer journey.
                </p>
                <div className="absolute bottom-0 md:bottom-6 right-0 md:right-6">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-purple-600 text-sm md:text-base">help_outline</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
