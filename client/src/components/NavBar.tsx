import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import MegaMenu from './MegaMenu';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.header 
      className="shadow-sm bg-white sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="Nadeem Chauhan Consultancy" className="h-10 mr-2" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className={`text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location === '/' ? 'text-secondary' : ''}`}>
              Home
            </Link>

            <div className="relative" ref={megaMenuRef}>
              <button 
                className={`flex items-center text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location.startsWith('/services') ? 'text-secondary' : ''}`}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onClick={() => setIsMegaMenuOpen(prev => !prev)}
              >
                Services
                <span className="material-icons text-sm ml-1">expand_more</span>
              </button>

              <MegaMenu isOpen={isMegaMenuOpen} onMouseLeave={() => setIsMegaMenuOpen(false)} />
            </div>

            <Link href="/about" className={`text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location === '/about' ? 'text-secondary' : ''}`}>
              About Us
            </Link>
            
            <Link href="/blog" className={`text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location === '/blog' || location.startsWith('/blog/') ? 'text-secondary' : ''}`}>
              Blog
            </Link>
            
            <Link href="/schedule" className={`text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location === '/schedule' ? 'text-secondary' : ''}`}>
              Schedule
            </Link>
            
            <Link href="/contact" className={`text-foreground hover:text-secondary font-medium transition-colors duration-200 ${location === '/contact' ? 'text-secondary' : ''}`}>
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors duration-200">
              Free Consultation
            </Link>
          </div>

          <button 
            className="lg:hidden text-foreground" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-3 space-y-3">
            <Link href="/" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Home
            </Link>
            
            <button 
              className="flex justify-between items-center w-full px-3 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <span className="material-icons">{isMobileServicesOpen ? 'expand_less' : 'expand_more'}</span>
            </button>
            
            <div className={`pl-6 space-y-2 ${isMobileServicesOpen ? 'block' : 'hidden'}`}>
              <Link href="/services/corporate-law" className="block px-3 py-1 text-foreground hover:text-secondary">
                Corporate Law
              </Link>
              <Link href="/services/litigation" className="block px-3 py-1 text-foreground hover:text-secondary">
                Litigation
              </Link>
              <Link href="/services/intellectual-property" className="block px-3 py-1 text-foreground hover:text-secondary">
                Intellectual Property
              </Link>
              <Link href="/services/tax-law" className="block px-3 py-1 text-foreground hover:text-secondary">
                Tax Law
              </Link>
              <Link href="/services/family-law" className="block px-3 py-1 text-foreground hover:text-secondary">
                Family Law
              </Link>
              <Link href="/services" className="block px-3 py-1 text-secondary">
                View All Services →
              </Link>
            </div>
            
            <Link href="/about" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              About Us
            </Link>
            
            <Link href="/blog" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Blog
            </Link>
            
            <Link href="/schedule" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Schedule
            </Link>
            
            <Link href="/contact" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Contact
            </Link>
            
            <Link href="/contact" className="block px-3 py-2 bg-primary text-white rounded-lg text-center mt-4">
              Free Consultation
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default NavBar;
